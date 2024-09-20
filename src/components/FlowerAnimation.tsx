import Lottie from 'lottie-react';
import animationData from '../assets/myjson.json'; 

const FlowerAnimation = () => {
  return (
    <div className='absolute bottom-0 right-0 hidden lg:block'>
      <Lottie animationData={animationData['animation-flower']} loop={true}  />
    </div>
  );
};

export default FlowerAnimation;