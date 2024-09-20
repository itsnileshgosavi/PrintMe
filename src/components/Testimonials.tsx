import TestimonialCarousel from "./TestimonialCorousal"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Testimonials = () => {
  const ref = useRef(null);
  const testimonia = useRef(null);// reference to testimonial corousal
  const isInView = useInView(ref, { once: true, amount: 0.5 });// useInView hook to play animations when element is in view
  return (
    <div className="flex flex-col justify-center items-center space-y-10 py-10">
      <div className="flex justify-center items-center flex-col md:flex-row space-y-10 py-10">
        <h5 className="text-2xl md:text-3xl font-bold mt-10 px-10">Trusted by over 8M sellers around the world</h5>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // Starts Transparent and 50px left
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }} // fades in and moves to its original position
          transition={{ duration: 1, delay: 0.5 }}
        >

          <p className="text-gray-500 px-10">Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
        </motion.div>
      </div>
      <motion.div
        ref={testimonia}
        initial={{ opacity: 0, y: -100 }} // Starts Transparent and 100px top
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }} // fades in and moves to its original position
        transition={{ duration: 1, delay: 0.5 }}
      >
        <TestimonialCarousel />
      </motion.div>
    </div>
  )
}

export default Testimonials