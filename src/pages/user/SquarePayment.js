import React, { useEffect, useState } from 'react';

const SquarePayment = () => {
    const appId = "sandbox-sq0idb-Nyg6__oT1ov9dXKKwJE-Jg"; // Replace with your Square Application ID
    const locationId = "LNXQ3MF02NYXS"; // Replace with your Square Location ID

    const [payments, setPayments] = useState(null);
    const [card, setCard] = useState(null);
    const [afterpay, setAfterpay] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const initializePayments = async () => {
            if (!window.Square) {
                console.error("Square.js failed to load properly");
                return;
            }

            try {
                const paymentsInstance = window.Square.payments(appId, locationId);
                setPayments(paymentsInstance);

                const cardInstance = await paymentsInstance.card();
                await cardInstance.attach("#card-container");
                setCard(cardInstance);

                const paymentRequest = paymentsInstance.paymentRequest({
                    countryCode: "US",
                    currencyCode: "USD",
                    total: { amount: "1.00", label: "Total" },
                    requestShippingContact: true,
                });

                const afterpayInstance = await paymentsInstance.afterpayClearpay(paymentRequest);
                await afterpayInstance.attach("#afterpay-button");
                setAfterpay(afterpayInstance);
            } catch (error) {
                console.error("Error initializing Square Payments", error);
            }
        };

        initializePayments();
    }, []);

    const handlePaymentMethodSubmission = async (paymentMethod) => {
        try {
            const tokenResult = await paymentMethod.tokenize();
            if (tokenResult.status === "OK") {
                const response = await createPayment(tokenResult.token);
                setStatus("SUCCESS");
                console.log("Payment Success", response);
            } else {
                setStatus("FAILURE");
                console.error("Tokenization failed", tokenResult);
            }
        } catch (error) {
            setStatus("FAILURE");
            console.error("Payment submission failed", error);
        }
    };

    const createPayment = async (token) => {
        const body = JSON.stringify({
            locationId,
            sourceId: token,
            idempotencyKey: window.crypto.randomUUID(),
        });

        const response = await fetch("/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
        });

        if (response.ok) return response.json();

        const errorBody = await response.text();
        throw new Error(errorBody);
    };

    return (
        <div>
            <form id="payment-form">
                <div id="afterpay-button"></div>
                <div id="card-container"></div>
                <button
                    id="card-button"
                    type="button"
                    onClick={() => handlePaymentMethodSubmission(card)}
                    disabled={!card}
                >
                    Pay $1.00
                </button>
            </form>
            <div id="payment-status-container" className={status?.toLowerCase()}>
                {status === "SUCCESS" && <p>Payment Successful!</p>}
                {status === "FAILURE" && <p>Payment Failed. Try Again.</p>}
            </div>
        </div>
    );
};

export default SquarePayment;