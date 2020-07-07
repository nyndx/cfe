import React, { useState, useRef, useEffect } from "react"

import { useScript } from "../hooks"

function Paypal({ product }) {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const paypalRef = useRef()
  const [loaded, errors] = useScript(
    `https://www.paypal.com/sdk/js?client-id=AUBGAJKS0hYtT64DAPeAUi3EiijM6tLWSzDIYrOzPFm39XJusa_P9afYXB-uXwKiRucYlWXNcdVf-hVD&currency=USD`
  )

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            style: {
              shape: "rect",
              color: "blue",
              layout: "vertical",
              label: "checkout",
            },
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: "USD",
                      value: Number(product.price),
                    },
                  },
                ],
              })
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture()
              setPaidFor(true)
              console.log(order)
            },
            onError: err => {
              setError(err)
              console.error(err)
            },
          })
          .render(paypalRef.current)
      }, 0)
    }
  }, [loaded])

  if (paidFor) {
    return (
      <div className="h-full px-4 py-6 bg-white rounded-md">
        <h1 className="text-lg text-center">
          Thank your for your payment of{" "}
          <span className="font-medium">{product.price}</span>!
        </h1>
      </div>
    )
  }

  return (
    <div className="w-3/4 px-4 overflow-scroll bg-white rounded-md shadow-lg md:w-1/2">
      <div className="">
        <div className="py-6">
          {error && <>Uh oh, an error occurred! {error.message}</>}
          <h2 className="w-full text-lg font-medium text-center ">
            <span className="text-xl font-medium ">
              {" "}
              You're paying ${product.price}
            </span>
          </h2>

          <div className="mt-6" ref={paypalRef} />
        </div>
      </div>
    </div>
  )
}

export default Paypal
