import Lottie from 'lottie-react';
import animationData from '../assets/myjson.json';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TshirtAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='absolute hidden md:block w-64 h-72 bottom-10 left-80'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }} // Starts fully transparent and 100px above its position
        animate={{ opacity: isInView ? 1: 0, y:isInView ? 0 : 100 }}   // Fades in and moves to its original position
        transition={{ duration: 1, delay: 1 }} // 1 second animation with a 1 second delay
      >
        <Lottie animationData={animationData['animation-t-shirt']} loop={true} />
      </motion.div>
    </div>
  );
};

export default TshirtAnimation;