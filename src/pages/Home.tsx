import Connect from "../components/connect"
import Button from "../components/Button"
import { CirclePlay } from "lucide-react"
import LadyAnimation from "../components/LadyAnimation"
import BenifitsList from "../components/Benifits"
import TshirtAnimation from "../components/TshirtAnimation"
import FlowerAnimation from "../components/FlowerAnimation"
import TalkToSales from "../components/TalkToSales"
import Testimonials from "../components/Testimonials"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"



const Home = () => {
  const ref = useRef(null);
  const firstref = useRef(null); //references to elements for animations
  const secondref = useRef(null);
  const thirdref = useRef(null);
  const isInView = useInView(ref, { once: true }); //using useInView hook to play animations when element is in view
  return (
    <main>
      <section id="hero" className="min-h-screen mt-10 pb-20 w-screen overflow-hidden">
        <div className="flex flex-col md:flex-row pt-28 ">
          <div className=" p-2 md:p-8 flex flex-col justify-end pl-8 md:pl-28">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create and sell</h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">custom products</h1>

            <ul className="mb-4 my-10">
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                100% Free to use
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                900+ High-Quality Products
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Largest global print network
              </li>
            </ul>
            <div className="space-x-4 flex">
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="ghost" size="lg" className="flex"><CirclePlay className="w-6 h-6 mr-2" />How it works?</Button>
            </div>
            <p className="text-green-600 font-semibold my-5">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="md:w-[60%] flex justify-center items-center bg-cover bg-hero-pattern overflow-y-visible bg-right">
            <LadyAnimation />
          </div>
        </div>
      </section>
      <section id="features" className="my-10 py-10 flex justify-center items-center w-screen overflow-hidden">
        <BenifitsList />

      </section>
      <section id="ez" className="relative min-h-[200vh] bg-gray-100 w-[100vw] overflow-hidden">
        {/* top divider */}
        <div className="custom-shape-divider-top-1726698535">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="flex justify-center items-center  relative py-10">
          {/* hiddenn on mobile and tablet */}
          <div className="mx-auto hidden lg:block h-fit md:h-[450px] md:w-[80%] w-[100%] bg-white z-10 top-96 absolute rounded-xl shadow-md">
            <div className="h-[650px] w-[100%] md:w-[450px] absolute bg-green-600 rounded-xl bottom-full md:bottom-0 md:left-0 shadow-md">
              <img src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp" alt="" className="h-full w-full rounded-xl rotate-90 md:rotate-0" />
              <TshirtAnimation />
            </div>

            <div className="md:p-5 p-2 flex flex-col justify-center items-start absolute space-y-7 flex-wrap md:right-10 top-20 md:w-[400px] lg:w-[500px]">

              <h2 className="text-3xl font-bold">Easily add your designs to wide range of products</h2>
              <p className=" text-md text-gray-800">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products</p>
              <button className="text-green-600 font-semibold hover:text-green-400 flex items-center">All Products <img src="https://printify.com/pfh/media/link-arrow-A6VZADMD.svg" alt="" className="w-3 h-3 m-4" /></button>

            </div>

          </div>
        </div>
        {/* visible only on mobile and tablet */}
        <div className="flex justify-center items-center rounded-2xl bg-white  w-[95%] flex-col lg:hidden">
          <div className="bg-green-500 mb-3 rounded-2xl">
            <img src="https://printify.com/pfh/media/clothes-mobile-Q6UN6X6P.webp" alt="products" className="w-full h-full rounded-2xl" />

          </div>
          <div className="p-5 flex flex-col justify-center items-start space-y-5">
            <h2 className="text-3xl font-bold">Easily add your designs to wide range of products</h2>
            <p className=" text-md text-gray-800">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products</p>
            <button className="text-green-600 font-semibold hover:text-green-400 flex items-center">All Products <img src="https://printify.com/pfh/media/link-arrow-A6VZADMD.svg" alt="" className="w-3 h-3 m-4" /></button>
          </div>
        </div>
        {/* product features */}
        <div className="flex mb-32 md:mb-10 static lg:absolute md:bottom-32 bottom-24 -right-10 md:right-11 justify-center md:justify-evenly flex-wrap items-center space-x-3 md:space-x-10">
          <motion.div
            ref={firstref}
            initial={{ opacity: 0, y: -50 }} // Starts fully transparent and 50px above its position
            animate={{ opacity: 1, y: 0 }}   // Fades in and moves to its original position
            transition={{ duration: 0.5, delay: 0.5 }} // 1 second animation with a 2 second delay
          >
            <div className="flex flex-col justify-center items-start space-y-3 w-96">
              <img src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="" className="w-56 h-56" />
              <h3 className="text-xl text-green-600">Create</h3>
              <h4 className="text-2xl font-bold">Custom Products</h4>
              <p className="text-sm font-light text-gray-700">Easily add your designs to a wide range of products using our free tools</p>
            </div>
          </motion.div>
          <motion.div
            ref={secondref}
            initial={{ opacity: 0, y: -50 }} // Starts fully transparent and 50px above its position
            animate={{ opacity: 1, y: 0 }}   // Fades in and moves to its original position
            transition={{ duration: 0.5, delay: 1 }} // 1 second animation with a 2 second delay
          >
            <div className="flex flex-col justify-center items-start space-y-3 w-96">
              <img src="https://printify.com/pfh/assets/legacy/your-products.png" alt="" className="w-56 h-56" />
              <h3 className="text-xl text-green-600">Sell</h3>
              <h4 className="text-2xl font-bold">On your own terms</h4>
              <p className="text-sm font-light text-gray-700">You can choose the products, sale price and where to sell.</p>
            </div>
          </motion.div>
          <motion.div
            ref={thirdref}
            initial={{ opacity: 0, y: -50 }} // Starts fully transparent and 50px above its position
            animate={{ opacity: 1, y: 0 }}   // Fades in and moves to its original position
            transition={{ duration: 0.5, delay: 1.5 }} // 1 second animation with a 2 second delay
          >
            <div className="flex flex-col justify-center items-start space-y-3 w-96">
              <img src="https://printify.com/pfh/assets/legacy/fullfillment.png" alt="" className="w-56 h-56" />
              <h3 className="text-xl text-green-600">We Handle</h3>
              <h4 className="text-2xl font-bold">Fullfilment</h4>
              <p className="text-sm font-light text-gray-700">Once an order is placed, we automatically handle all the printing and delivery logistics.</p>
            </div>
          </motion.div>
        </div>
        {/* bottom divider */}
        <div className="custom-shape-divider-bottom-1726698650">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section id="connect" className="h-fit md:h-[120vh] w-screen overflow-hidden">
        <Connect />
      </section>
      <section id="talktosales" className="w-screen overflow-hidden">
        <TalkToSales />
      </section>
      <section id="testimonials" className="min-h-screen bg-gray-200 mb-20 relative overflow-hidden w-screen">
        <Testimonials />
        {/* bottom divider */}
        <div className="custom-shape-divider-bottom-1726698650">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section id="grow" className="min-h-screen flex justify-center items-center w-screen overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-screen"
        >
          <div className=" bg-[#203741] h-fit  md:h-[85vh] w-[80%] rounded-xl shadow-lg text-white relative">
            <div className="flex flex-col justify-center items-center md:items-start pr-3 pl-3 md:pr-[514px] py-16 md:pl-10 space-y-10">
              <h4 className="text-3xl font-bold">Make Money, Risk-Free</h4>
              <p className="text-lg">You pay for fulfillment only when you make a sale</p>
              <div className="grid grid-cols-2 md:grid-cols-2 p-10 rounded-xl shadow-xl gap-4 w-[80%] bg-[#164b21]">
                <h6>You sell a t-shirt</h6>
                <h6>300 Rs</h6>
                <h6>You Pay for its production</h6>
                <h6>100 Rs</h6>
                <h5 className="font-bold text-green-400">Your Profit</h5>
                <h5 className="font-bold text-green-400">200 Rs</h5>
              </div>
              <Button variant="primary" size="md">Get Started</Button>
            </div>

            <FlowerAnimation />
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default Home