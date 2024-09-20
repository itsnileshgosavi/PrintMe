import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Connect = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        
            <div className="flex flex-col justify-center items-center mt-10 w-screen">
                <h1 className="text-4xl font-bold">Connect Your Store</h1>
                <p className="text-gray-500 my-5 text-lg">Printify easily integrates with major e-commerce platforms and marketplaces</p>
                <motion.div
            ref={ref}
            initial={{ width: 0, height: "60px", opacity: 0 }} // Starts smaller
            animate={{ width: isInView ? "90%" : 0 , height: isInView ? "450px" : "60px", opacity: isInView ? 1 : 0}} // Grows to full size when in view
            transition={{ duration: 1 , delay: 0.5 }}
            className='flex flex-col justify-center items-center w-screen'
        >
                <div id="cloud" className="w-[90%] h-[450px] bg-none md:bg-connect-pattern bg-cover relative ">
                    <a href="#" className="absolute top-[55%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-24 w-24 md:h-36 md:w-36 bg-white rounded-lg shadow-lg">
                            <img src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[55%] md:top-[110%] left-[30%] md:left-[41%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center  h-12 w-12 md:h-16 md:w-16 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute  top-[30%] md:top-[65%] left-[20%]  md:left-[80%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center  h-12 w-12 md:h-16 md:w-16 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/woo-PGFAG65X.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[23%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-12 w-12 md:h-16 md:w-16 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[80%] md:top-[100%] left-[58%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-24 w-24 md:h-36 md:w-36 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/shopify-3NAPXPBF.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[70%] md:top-[95%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-24 w-24 md:h-36 md:w-36 bg-white rounded-lg shadow-lg">
                            <h1 className="text-3xl font-bold">API</h1>
                        </div>
                    </a>
                    <a href="#" className="absolute top-[70%] md:top-[100%] left-[90%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-32 w-32 md:h-40 md:w-40 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/etsy-MXXFYORZ.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[30%] left-[64%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-20 w-20 md:h-24 md:w-24 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[40%] md:top-[100%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-20 w-20 md:h-24 md:w-24 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/presta-54F6AYUU.svg" alt="cloud" />
                        </div>
                    </a>
                    <a href="#" className="absolute top-[10%] left-[70%] md:left-[95%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-300">
                        <div className="flex justify-center items-center h-20 w-20 md:h-24 md:w-24 bg-white rounded-lg shadow-lg">
                            <img src="https://printify.com/pfh/media/wix-MWZCZDTE.svg" alt="cloud" />
                        </div>
                    </a>

                </div>
                </motion.div>
            </div>
        
    )
}

export default Connect