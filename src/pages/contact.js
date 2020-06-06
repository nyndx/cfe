import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useForm } from "react-hook-form"

const Error = ({ children, ...rest }) => (
  <span className="mt-2 text-xs font-light text-red-400" {...rest}>
    {children}
  </span>
)
const Contact = () => {
  const { register, handleSubmit, errors } = useForm()
  const [formState, setFormState] = useState({})
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMsg(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [msg])

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  // const handleChange = e =>
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   })
  const handleFormSubmit = (data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => setMsg(true))
      .catch(error => alert(error))

    setFormState({ name: "", phone: "", email: "", message: "" })
    e.target.reset()
    console.log(data)
  }
  return (
    <>
      <Layout>
        <SEO title="Contact" />
        <div className="h-full py-12 text-gray-600">
          <div className="mb-4 space-y-2 text-center">
            <h2 className="text-2xl font-medium leading-none tracking-tight text-center md:text-4xl">
              Contact
            </h2>
            <p className="text-base font-light">
              contact us for a quote, help, or any other information
            </p>
          </div>

          <div className="grid grid-rows-1 py-6 lg:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none md:mx-8 gap-14 lg:gap-5">
            <div className="max-w-xs m-auto sm:max-w-md">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                className="flex flex-col px-4 py-6 space-y-4 bg-gray-100 rounded shadow-lg sm:text-xl"
              >
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="flex flex-col ">
                  <label
                    htmlFor="name"
                    className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    autoComplete="off"
                    className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                  />
                  {errors.name && <Error>This field is required</Error>}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                  >
                    Phone
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                  />
                  {errors.phone && <Error>This field is required</Error>}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                  >
                    Email
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your e-mail"
                    className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                  />
                  {errors.email && <Error>This field is required</Error>}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-2 text-sm font-bold text-gray-600 sm:text-lg"
                  >
                    Message
                  </label>
                  <textarea
                    ref={register({ required: true })}
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:border-indigo-600 focus:border-2"
                  ></textarea>
                  {errors.message && <Error>This field is required</Error>}
                </div>
                <div data-netlify-recaptcha="true" className="mt-4"></div>
                {msg ? (
                  <p className="px-1 py-2 text-base font-medium text-center text-white transition duration-300 ease-in-out bg-indigo-400 rounded">
                    Thank you for contacting us, we will get back to you soon!
                  </p>
                ) : null}
                <div className="self-end outline-none">
                  <div className="mt-4 rounded-lg outline-none ">
                    <button
                      type="submit"
                      className="px-8 py-2 text-xs font-semibold text-center text-white uppercase bg-indigo-600 rounded-full shadow-lg outline-none hover:bg-indigo-700 sm:text-base lg:text-xl"
                    >
                      send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="max-w-xs m-auto">
              <div className="px-4">
                <h3 className="text-xl font-semibold text-gray-600 md:text-2xl">
                  Get in touch!
                </h3>
                <div className="grid gap-4 mt-4 grid-row-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold leading-4">Charlotte:</h4>
                    <ul className="space-y-2">
                      <li>
                        <label htmlFor="Phone">Phone: </label>
                        <a
                          className="text-indigo-400 underline"
                          href="tel:+01-704-713-6667"
                          name="Phone"
                        >
                          +01-704-713-6667
                        </a>
                      </li>
                      <li className="flex">
                        <label htmlFor="Email">Email: </label>
                        <div className="inline-block ml-2">
                          <a
                            className="text-indigo-400 underline"
                            href="mailto:info@cfetaxservices.com"
                            name="Email"
                          >
                            info@cfetaxservices.com
                          </a>
                          <a
                            className="block text-indigo-400 underline"
                            href="mailto:zc@cfetaxservices.com"
                            name="Email"
                          >
                            zc@cfetaxservices.com
                          </a>
                        </div>
                      </li>
                      <li className="uppercase">
                        1727 8A Sardis RD N Charlotte, NC, 28270
                      </li>
                      <div className="w-full h-6 border-t-2"></div>
                      <li>
                        <label htmlFor="Phone">Phone: </label>
                        <a
                          className="text-indigo-400 underline"
                          href="tel:+01-704-713-6667"
                          name="Phone"
                        >
                          +01-704-713-6667
                        </a>
                      </li>
                      <li className="flex">
                        <label htmlFor="Email">Email: </label>
                        <div className="inline-block ml-2">
                          <a
                            className="text-indigo-400 underline"
                            href="mailto:info@cfetaxservices.com"
                            name="Email"
                          >
                            info@cfeaccounting.com
                          </a>
                        </div>
                      </li>
                      <li className="uppercase">
                        5736 N TRYON STREET, STE 116B CHARLOTTE, NC 28213
                      </li>
                    </ul>
                  </div>
                  <div className="w-full border-t-2"></div>
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold leading-4">New England:</h4>
                    <ul className="space-y-2">
                      <li>
                        <label htmlFor="Phone">Phone: </label>
                        <a
                          className="text-indigo-400 underline"
                          href="tel:+01-617-784-1604"
                          name="Phone"
                        >
                          +01-617-784-1604
                        </a>
                      </li>
                      <li className="flex">
                        <label htmlFor="Email">Email: </label>
                        <div className="inline-block ml-2">
                          <a
                            className="text-indigo-400 underline"
                            href="mailto:info@cfetaxservices.com"
                            name="Email"
                          >
                            info@cfetaxservices.com
                          </a>
                          <a
                            className="block text-indigo-400 underline "
                            href="mailto:zc@cfetaxservices.com"
                            name="Email"
                          >
                            zcr@cfetaxservices.com
                          </a>
                        </div>
                      </li>

                      <li className="uppercase">
                        {" "}
                        Boston, MA Brockton, MA Las Vegas, NV
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
