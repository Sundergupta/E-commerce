import React, { useState } from 'react';
// Import your SVG images
import SummerImage from '../../assets/Home/Image1.svg';
import HighCozinessImage from '../../assets/Home/Image2.svg';
import BreezySummerImage from '../../assets/Home/Image3.svg';

const App = () => {
    const slides = [
        {
            image: SummerImage,
            title: 'Summer Value Pack',
            subtitle: 'cool / colorful / comfy',
            buttonText: 'Shop Now',
            category: 'T-Shirt / Tops',
        },
        {
            image: HighCozinessImage,
            title: 'High Coziness',
            subtitle: 'UPTO 50% OFF',
            buttonText: 'Explore Items',
            category: 'Low Price',
        },
        {
            image: BreezySummerImage,
            title: 'Breezy Summer Style',
            subtitle: 'UPTO 50% OFF',
            buttonText: 'Explore Items',
            category: 'Beyoung Presents',
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div
                className="relative w-full h-[450px] flex items-center justify-start bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
                <div
                    onClick={handlePrevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
                    &#9664;
                </div>
                <div className="pl-10 text-left">
                    <p className="text-white text-lg font-semibold">{slides[currentSlide].category}</p>
                    <h1 className="text-white text-5xl font-bold my-4">{slides[currentSlide].title}</h1>
                    <p className="text-white text-lg">{slides[currentSlide].subtitle}</p>
                    <button className="mt-6 bg-white text-blue-500 py-2 px-6 rounded-full shadow-md">
                        {slides[currentSlide].buttonText}
                    </button>
                </div>
                <div
                    onClick={handleNextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer">
                    &#9654;
                </div>
            </div>

            {/* Below is your static grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
                <div
                    className="bg-yellow-400 p-8 rounded-xl shadow-lg relative overflow-hidden bg-cover bg-center flex items-center justify-start"
                    style={{ backgroundImage: `url(${HighCozinessImage})` }}
                >
                    <div className="text-left">
                        <div className="text-white text-sm">Low Price</div>
                        <h2 className="text-white text-3xl font-bold mb-4">High Coziness</h2>
                        <p className="text-white text-sm">UPTO 50% OFF</p>
                        <button className="mt-6 bg-white text-yellow-500 py-2 px-6 rounded-full shadow-md">
                            Explore Items
                        </button>
                    </div>
                </div>

                <div
                    className="bg-purple-500 p-8 rounded-xl shadow-lg relative overflow-hidden bg-cover bg-center flex items-center justify-start"
                    style={{ backgroundImage: `url(${BreezySummerImage})` }}
                >
                    <div className="text-left">
                        <div className="text-white text-sm">Beyoung Presents</div>
                        <h2 className="text-white text-3xl font-bold mb-4">Breezy Summer Style</h2>
                        <p className="text-white text-sm">UPTO 50% OFF</p>
                        <button className="mt-6 bg-white text-purple-500 py-2 px-6 rounded-full shadow-md">
                            Explore Items
                        </button>
                    </div>
                </div>
                <div className='text-left'>
                    new Arrivel
                </div>
            </div>
        </div>
    );
};

export default App;
