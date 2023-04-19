import React, { useEffect } from "react"
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

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
        <div className="p-4 max-w-3xl min-h-[250px] bg-gray-100 mx-auto rounded-lg">
            {/* <PayPalScriptProvider options={{ "client-id": "AZ4luTp_Rbj7cY--C-OXONY5flJl_Z7_KYkxb6ObRnNRLOSC2qwiwMeWKH8Z4P8W306dqb9eapfYsWwS" }} /> */}
            <PayPalScriptProvider options={{ "client-id": "sb" }}>
                <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    )
}

export default PaymentButton
