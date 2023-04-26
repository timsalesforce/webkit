# W-13089063: Signature Success - 44381625 - BP International Ltd - Customer Org - Customer are getting blank page on clicking of the login button in IOS only when lightning locker is Enabled in Org.

## Repro

For LWS:

1. Clone this repo and deploy to scratch org
2. Create an Account
3. In an iOS simulator open the Account
4. Click on the "click me" button

You will see the error message that webkit is undefined.

For Legacy Locker:

Turn off LWS in Session Settings and repeat the steps above.

