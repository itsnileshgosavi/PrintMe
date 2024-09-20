import { useState } from 'react';
import RatingStars from './RatingStars';

const TestimonialCarousel = () => {
    //dummy testimonials data
    const testimonials = [
        {
            id: 1,
            store: "#",
            rating: 5,
            name: 'John Doe',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png',
        },
        {
            id: 2,
            store: "#",
            rating: 5,
            name: 'Jane Smith',
            quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            image: 'https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg',
        },
        {
            id: 3,
            store: "#",
            rating: 3,
            name: 'Alice Johnson',
            quote: 'Suspendisse potenti. Donec euismod commodo elit, quis fermentum nisi.',
            image: 'https://printify.com/pfh/media/nikki-TJP4NANB.png',
        },
        {
            id: 4,
            store: "#",
            rating: 4,
            name: 'Michael Brown',
            quote: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc fermentum orci in ex aliquam, vel venenatis risus eleifend.',
            image: 'https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png',
        },
        {
            id: 5,
            store: "#",
            rating: 4,
            name: 'Emily Davis',
            quote: 'Nullam malesuada nisi vitae est ullamcorper, sit amet pulvinar elit aliquet.',
            image: 'https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePrev = () => {
        if (isAnimating) return; // prevent during animation
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
          setIsAnimating(false);
        }, 500); // Duration of the transition
    };

    const handleNext = () => {
        if (isAnimating) return; // prevent during animation
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Duration of the transition
    };

    const handleIndicatorClick = (index: number) => {
        if (isAnimating) return; // prevent during animation
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex(index);
          setIsAnimating(false);
        }, 500); // Duration of the transition
    };

    return (
        <div className="flex items-center justify-center h-fit w-[100vw] mb-10 overflow-hidden">
            <div className="w-fit  p-8 rounded-lg relative">
                <div className={`testimonial-card ${!isAnimating ? 'active' : ''} p-7 h-72 w-full md:w-[500px] bg-white shadow-lg rounded-lg ring-1 ring-gray-900/5 flex flex-col items-center justify-center`}>
                    <div className="mb-4 flex space-x-4">
                        <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-16 h-16 rounded-full mx-auto mb-2" />
                        <div className='flex flex-col items-center'>
                            <h3 className="text-lg font-bold text-center">{testimonials[activeIndex].name}</h3>
                            <a href={testimonials[activeIndex].store} className="text-green-500 font-medium text-lg">Store Link</a>
                            <RatingStars rating={testimonials[activeIndex].rating} />
                        </div>
                    </div>
                    <p className="text-center">{testimonials[activeIndex].quote}</p>
                </div>
                <div className="mt-4 flex justify-between">
                    <button onClick={handlePrev} className="px-4  rounded-md"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor" transform-origin="center" transform="rotate(180)"></path></svg></button>
                    <button onClick={handleNext} className="px-4  rounded-md"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"></path></svg></button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} onClick={() => handleIndicatorClick(index)} className={`w-2 h-2 mx-1 hover:cursor-pointer rounded-full ${index === activeIndex ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;