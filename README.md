# customer_notifications_backend

![Customer Notifications Backend](https://blog.afi.io/content/images/size/w1600/2021/05/Screen-Shot-2021-05-08-at-10.07.23-PM.png "Customer Notifications Backend")

Taken from: 
Taken from: 
- [Using the Google Maps API to get Driver ETAs (Part 1 of 2)](https://blog.afi.io/using-the-google-maps-api-to-get-driver-etas/)
- [Using Twilio to Send ETA Notifications to your Customers (Part 2 of 2)](https://blog.afi.io/using-the-twilio-api-to-send-eta-notifications-to-your-customers/)

 How to run the app:
 1. cd into your project
 2. Install packages by running `yarn` and enter `yarn start` to run the app in development mode.
 3. Create a `.env` file in the root folder and add the following lines of code (be sure to replace the placeholder text with your actual API keys)
```
TWILIO_ACCOUNT_SID='TWILIO_SID'
TWILIO_AUTH_TOKEN='TWILIO_TOKEN'
GOOGLE_API_KEY='GOOGLE_KEY'
```
The `TWILIO_SID` is a 34 digit SID that starts with AC while the `TWILIO_TOKEN` is the access token that is generated [when you create an API key](https://www.twilio.com/docs/iam/access-tokens) in the Twilio console. The `GOOGLE_KEY` is retrieved from the [project you created in the Google Cloud Console](https://developers.google.com/maps/documentation/maps-static/get-api-key).

Please contact afian@afi.io if you have any questions or suggestions. Pull requests are welcome.