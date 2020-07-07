import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useState } from "react"
import Paypal from "../components/paypal"

const Pricing = () => {
  const [price, setPrice] = useState(0)
  const [toggle, setToggle] = useState(false)

  const closeModal = () => {
    setToggle(false)
    setPrice(0)
  }

  const product = {
    price: Number(price),
    name: "Tax Services",
    description: "Tax payment",
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })
  console.log(Number(price))
  return (
    <>
      <Layout>
        <SEO title="Pricing" />
        <div className="py-12 pb-20 text-gray-600 ">
          <div className="mb-10">
            <div className="max-w-xs pb-6 m-auto bg-white rounded shadow-lg min-h-40vh">
              <div className="h-full bg-gray-300">
                <p className="py-6 font-medium tracking-widest text-center uppercase ">
                  amout to pay
                </p>
              </div>
              <form className="px-4 py-6 space-y-4 text-base bg-gray-100 b ">
                <input
                  className="w-full px-4 py-2 border-2 border-indigo-500 rounded-md"
                  type="number"
                  name="amount"
                  id="amount"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  placeholder="Amount to pay"
                />
              </form>
              <div className="flex flex-col items-center h-full bg-white">
                <div className="px-4 py-6 ">
                  <span className="text-xl italic font-semibold ">
                    {formatter.format(product.price)}
                  </span>
                </div>
                <div className="rounded-lg outline-none ">
                  <button
                    disabled={!price || price < 1}
                    type="button"
                    className={`${
                      price < 1
                        ? "bg-indigo-300 opacity-75 cursor-not-allowed"
                        : ""
                    } px-8 py-2 text-xs font-semibold text-center text-white uppercase bg-indigo-600 rounded-full shadow-lg outline-none hover:bg-indigo-700 sm:text-base lg:text-xl`}
                    onClick={() => setToggle(true)}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {toggle && (
            <div
              className={`absolute inset-0  items-center justify-center bg-black bg-opacity-75 overflow-scroll ${
                toggle ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-col w-full h-full ">
                <span className="self-end mt-6 mr-6">
                  <button
                    type="button"
                    className=""
                    onClick={() => closeModal()}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-6 h-6 text-gray-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
                <div className="flex justify-center px-6 mt-8">
                  <Paypal product={product} />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center ">
            <p className="text-center md:text-2xl">
              For more information or for personal and tailored services please{" "}
              <Link
                className="pb-1 font-semibold text-indigo-400 border-b-2 border-indigo-400 hover:text-indigo-500"
                to="/contact"
              >
                contact us.
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Pricing
