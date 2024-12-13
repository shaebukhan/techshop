// Dependencies
import * as React from 'react';
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const MyPaymentForm = () => (
    <PaymentForm
        applicationId="sandbox-sq0idb-Nyg6__oT1ov9dXKKwJE-Jg"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
            console.log('token:', token);
            console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LNXQ3MF02NYXS'
    >
        <CreditCard />
    </PaymentForm>
);

export default MyPaymentForm;