import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LiWrapper from "../components/li"

const SpanWrap = props => (
  <span className="mr-2 " {...props}>
    <strong>{props.children}</strong>
  </span>
)

const Social = () => (
  <>
    <Layout>
      <SEO title="About Us" />
      <div className="pb-20 text-gray-600 md:text-lg">
        <div className="mt-12">
          <h1 className="text-xl font-semibold tracking-tight text-yellow-500 sm:text-2xl md:text-3xl">
            <a
              href="http://www.breadforsouls.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bread for Souls,Inc
            </a>
          </h1>
          <div className="mt-4">
            <h2 className="mb-4 font-medium tracking-tight sm:text-xl ">
              Our Vocational Program:
            </h2>
            <p>
              In order for{" "}
              <a
                className="pb-2 underline cursor-pointer"
                href="http://www.breadforsouls.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bread For Souls
              </a>{" "}
              to do the work that is necessary in Plateau Central, Haiti, we
              need compassionate people like you who are willing to help teenage
              mothers to get a second chance at life. Due to the enormous
              numbers of teenage mothers in Haiti as a result of the Earthquake
              and sexual violations committed, it therefore becomes imperative
              for us to stand up for human rights but most importantly, for
              women's rights at home and abroad.
            </p>
            <p>
              With your help, we can transform the lives of teenage mothers in
              Haiti so that these women can provide healthy, happy and
              sustainable homes for their young ones through trainings in the
              areas of:
            </p>
            <ul className="my-4 space-y-2 text-base">
              <LiWrapper>
                <li>Computer Science</li>
              </LiWrapper>
              <LiWrapper>
                <li>Hospitality</li>
              </LiWrapper>
              <LiWrapper>
                <li>ESL</li>
              </LiWrapper>
            </ul>

            <p>
              These services are just examples of what Bread for Souls will
              provide to teenage mothers in Plateau Central, Haiti with your
              help.
            </p>

            <div className="mt-4">
              <h2 className="mb-4 text-lg font-medium">
                What Bread for Souls, Inc. Has Done So Far?
              </h2>
              <div className="space-y-2">
                <p>
                  A few years ago in July of 2011, Bread for Souls Inc. visited
                  orphaned children at a non-profit called CHOH which is located
                  in Thomazeau, Haiti. We provided the children with reading and
                  writing materials to help prepare them for the upcoming school
                  season in addition to providing them with toys as part of our
                  annual Christmas in July Program. This program helped to
                  motivate the children to look forward to school in addition to
                  brightening their spirits simultaneously. As a result of our
                  past donors, we were able to make the children's dreams a
                  reality by preparing them for their education.
                </p>
                <p>
                  Our goal this year is to raise enough funds and donations for
                  our organization so that we can function as a non-profit in
                  order to better serve our community.
                </p>
                <p>
                  The only way that we can continue to do the work that is
                  needed in the Commonwealth of Massachusetts and in Haiti is
                  with your unwavering support. By supporting Bread for Souls
                  Inc. we can continue to provide diapers for our young mothers
                  with children in Massachusetts in addition to providing
                  vocational and ESL courses to young mothers in Haiti on a
                  seasonal basis.
                </p>
              </div>
              <div className="max-w-3xl p-6 mx-auto my-16 text-white bg-yellow-500 rounded">
                <section className="mt-4">
                  <h2 className="mb-4 text-sm font-medium tracking-wider uppercase">
                    Why Be Responsible?
                  </h2>
                  <div className="space-y-2">
                    <p>
                      It is part of CFE Tax's belief to help others who can not
                      help themselves. We at CFE Tax's believe that part of our
                      success is the impact that we can make within a community
                      whether at home or abroad. We have a conviction in making
                      sure that we help those who are in need by equipping them
                      with tools to be economically sustainable long term.
                    </p>
                    <p>
                      As a result, it is with pleasure and generosity that we
                      help our partners, Bread For Souls Foundation; in order to
                      achieve their goal of giving teenage mothers a 2nd chance
                      at life.
                    </p>
                  </div>
                </section>
                <section className="mt-4">
                  <h2 className="mb-4 text-xs font-medium tracking-wider uppercase">
                    Our Mission:
                  </h2>
                  <p>
                    Bread for Souls Inc. is a 501(c)(3) non profit organization
                    who is devoted to making a difference within the Greater
                    Boston area and abroad. Our Mission is to provide
                    educational, professional and emotional support to young
                    mothers. We hope to provide the means necessary to help low
                    income women lead safe and productive lives. We also intend
                    to provide additional assistance in the form of diapers to
                    all needy mothers who are low income and living below the
                    poverty line to help foster self sufficiency and
                    independence in order to pursue gainful employment,
                    continued education and or small business ownership within
                    1-3 years.
                  </p>
                </section>
                <section className="mt-4">
                  <h2 className="mb-4 text-xs font-medium tracking-wider uppercase">
                    Our vision:
                  </h2>
                  <div className="space-y-2">
                    <p>
                      <SpanWrap>People:</SpanWrap>A place where people are
                      inspired to reach their fullest potential through
                      vocational and professional training.
                    </p>
                    <p>
                      <SpanWrap>Portfolio:</SpanWrap>
                      To bring a quality of education which will increase the
                      quality of life for young women and mothers.
                    </p>
                    <p>
                      <SpanWrap>Planet:</SpanWrap>
                      Encourage responsible citizens to be agents of change
                      within their communities and their country through
                      active-based education.
                    </p>
                    <p>
                      <SpanWrap>Profit:</SpanWrap>
                      Bread for Souls is not for profit and members will only
                      receive 5% of the profits on what they have invested.
                    </p>
                    <p>
                      <SpanWrap>Productivity:</SpanWrap>
                      Be an effective, forward moving, socially aware and people
                      centered foundation that strives toward creating
                      democratic change from the bottom-up.
                    </p>
                  </div>
                </section>
                <section className="mt-4 ">
                  <h2 className="mb-4 text-xs font-medium tracking-wider uppercase ">
                    Our Values:
                  </h2>
                  <div className="space-y-2">
                    <p>
                      <SpanWrap>Leadership:</SpanWrap>
                      The courage to lead during difficult times
                    </p>
                    <p>
                      <SpanWrap>Collaboration:</SpanWrap>
                      Serving each other and working together
                    </p>
                    <p>
                      <SpanWrap>Respect:</SpanWrap>
                      Treating others how you would like to be treated{" "}
                    </p>
                    <p>
                      <SpanWrap>Love:</SpanWrap>
                      Showing compassion to others and to humanity through
                      sacrifice
                    </p>
                    <p>
                      <SpanWrap>Quality:</SpanWrap>
                      All projects must be executed effectively and productively
                    </p>
                    <p>
                      <SpanWrap>Responsibility:</SpanWrap>
                      Being responsible to yourself is being responsible to our
                      future
                    </p>
                    <p>
                      <SpanWrap>Professionalism:</SpanWrap>
                      We take what we do seriously and thoughtfully
                    </p>
                    <p>
                      <SpanWrap>Authenticity:</SpanWrap>
                      We are original and proud of what we do
                    </p>
                  </div>
                </section>
                <div className="mt-6 font-bold">
                  <p>
                    Sincerely Yours,{" "}
                    <span className="block">Zadih Cadyma CFO,</span> CFE
                    Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 space-y-6">
            <p className="mb-6">
              To donate click the image below! Thank you for your generosity
              towards our cause.
            </p>
            <a
              href="https://smile.amazon.com/ch/45-5069261"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full"
            >
              <div className="relative inline-block ">
                <img
                  src="https://d1ev1rt26nhnwq.cloudfront.net/ccmtblv2.png"
                  id="banner"
                  alt="Amazon donation banner"
                />

                <div className="absolute inset-0 flex items-center justify-center w-full h-full ">
                  <p className="text-xl font-bold">Bread for Souls,Inc</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Social
