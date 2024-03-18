"use strict";
const Mfrc522 = require("mfrc522-rpi");
const SoftSPI = require("rpi-softspi");

console.log("Initialising card scanner...");

const softSPI = new SoftSPI({
    clock: 23,      // SCK
    mosi: 19,       // MOSI
    miso: 21,       // MISO 
    client: 24      // SDA
                    // GND: 6
                    // RST: 22
                    // 3.3V: 1
});

// Setting reset pin and buzzer pin (for adding signal in the future)
const mfrc522 = new Mfrc522(softSPI).setResetPin(22).setBuzzerPin(18);

// Variable to hold last read data
let lastReadData = null;

function startReadingCard() {
    setInterval(function() {

        // Resetting card
        mfrc522.reset();
    
        // Scan for card
        // Output card type if detected and "NO CARD" if not
        let response = mfrc522.findCard();
        if (!response.status) {
            console.log("NO CARD");
            return;
        }
        console.log("DETECTED CARD OF TYPE: " + response.bitSize);
    
        // Retviere card UID
        // Output "UID SCAN ERROR" if cannot get UID
        response = mfrc522.getUid();
        if (!response.status) {
            console.log("UID SCAN ERROR");
            return;
        }
    
        // If UID retrieved, assign it to 'uid' and output
        const uid = response.data;
        console.log(
            "CARD READ UID: %s %s %s %s",
            uid[0].toString(16),
            uid[1].toString(16),
            uid[2].toString(16),
            uid[3].toString(16)
        );
    
        // Select scanned card and output memory capacity
        const memoryCapacity = mfrc522.selectCard(uid);
        console.log("CARD MEMOMY CAPACITY: " + memoryCapacity);
    
        // Default key for authentication 
        const key = [0xff, 0xff, 0xff, 0xff, 0xff, 0xff];
    
        // Authenticate on Block 8 with key and uid
        // Output message if there is an error
        if (!mfrc522.authenticate(8, key, uid)) {
            console.log("Authentication Error");
            return;
        }
    
        // Retrieve data on Block 8 and output it
        console.log("Block: 8 Data: " + mfrc522.getDataForBlock(8));
    
        // Outputting the first byte (number) only
        // This is for testing and future purposes
        let blockdata = mfrc522.getDataForBlock(8);
        let firstbyte = blockdata[0];
        lastReadData = blockdata[0];
        console.log(firstbyte);
    
        // Finish the process
        mfrc522.stopCrypto();
    
    }, 5000);
}

module.exports = { startReadingCard, getLastReadData: () => lastReadData };

