import React, { useEffect } from "react"
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

const paypal_client_id = process.env.PAYPAL_CLIENT_ID
const sandbox = "sb"
const amount = "2"
const currency = "USD"
const style = { layout: "vertical" }

const ButtonWrapper = ({ currency, showSpinner }) => {
    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId
                        })
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    })
                }}
            />
        </>
    )
}

const PaymentButton = () => {
    return (
        <div className="p-4 max-w-lg min-h-[250px] bg-gray-100 mx-auto rounded-lg">
            {/* <PayPalScriptProvider options={{ "client-id": {paypal_client_id} }}> */}
            <PayPalScriptProvider options={{ "client-id": sandbox }}>
                <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    )
}

export default PaymentButton
