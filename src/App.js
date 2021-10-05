
import './App.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function App() {

const  PUBLISHABLE_KEY="pk_test_51Iit5TSA1fSdY1w9QYkfNNHwDLAspR8Qxa3idjfH1UjESpNPKtEyCclwogBZeQW00dZuWRxJ5mebPLiXtDbJeY5w00JZguEpXu"

  return (
    <div className="App">
      <h1>Google Pay </h1>
      <hr />
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "stripe",
                  "stripe:version": "v3",
                  "stripe:publishableKey": PUBLISHABLE_KEY
                }
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
          console.log('Payment Authorised Success', paymentData)
          return { transactionState: 'SUCCESS' }
        }
        }
        onPaymentDataChanged={paymentData => {
          console.log('On Payment Data Changed', paymentData)
          return {}
        }
        }
        existingPaymentMethodRequired='true'
        buttonColor='black'
        buttonType='Buy'
      />
    </div>

  );
}

export default App;
