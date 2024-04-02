# CSC8604-CW-STACK
Team project for CSC8604 module coursework, created by Tom Sevcov, Annie Lambert, Eshaan Abhyankar and Archita Pathak.


## PROJECT
This repository is a food preferance analysing system for schools, which can be used in dining
areas. This system can be expanded and upgraded for future possibilities, but for now its main
functionality is:
* Collecting the data about what food each school grade prefers to buy in canteen
* Processing the data on the server
* Representing data in a form of a pie chart
* System works will additional hardware (RFID/NFC scanner)


## TECHNOLOGY
Hardware:
* Raspberry Pi 4 MODEL B
* RFID-RC522 RFID/NFC reader/writer
* NFC card and key
* 10" touchscreen
* Computer monitor
* Physical small scale representation of a canteen

Software:
* Node.js
* Express
* React
* Git
* VS Code
* npm


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
