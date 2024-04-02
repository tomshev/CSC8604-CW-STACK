# CSC8604-CW-STACK
Team project for CSC8604 module coursework, using Express and React

TO IMPLEMENT:

- NFC/RFID writing and retrieving ID from card
- Retrieve ClassID from ID entry in database
- cashierView selection available when NFC/RFID card is scanned and ID is retrieved
- cashierView 'CONFIRM' only if (selectedMeal), otherwise alert('NO SELECTION IS MADE')
- cashierView resets when 'CONFIRM' is pressed
- Pairing confirmed selectedMeal to just scanned ID and ClassID
- Updating the statistics




## RUNNING AND USING THE SERVICE

* Clone the CSC8604-CW-STACK repository to the Raspberry Pi
* Connect RFID-RC522 RFID/NFC reader to the Raspberry Pi
    ```
    3.3V to PIN 1
    RST to PIN 22
    GND to PIN 6
    MISO to PIN 21
    MOSI to PIN 19
    SCK to PIN 23
    SDA to PIN 24
    ```

* In the main directory, CSC8604-CW-STACK, open two terminal windows. In the 1st window:
    ```
    cd server
    npm install
    ```

    In the 2nd window:
    ```
    cd client
    npm install
    ```

    In the 1st window (server):
    ```
    npm run dev
    ```

    In the 2nd window (client):
    ```
    npm start
    ```

* Home page will with 3 buttons will open in the browser
* Go to PublicView (Split screen) to see the public dashboard, located in the dining area
* Go to CashierView (Submit customer's order), place a white card or blue key on the RFID/NFC
reader and wait for the status to update from "HOLD CARD NEAR THE SCANNER" to student info
* Now select a meal and press SUBMIT
* Go back to PublicView (Split screen) and check the updated pie chart on the bottom half
* You can open PublicView in one window and CashierView in another window, to play with order
submission and pie chart in real-time