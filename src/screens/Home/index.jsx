import React, { useState } from 'react';

import Title from '../../components/title.jsx'


import SummerImage from '../../assets/Home/Image1.svg';
import HighCozinessImage from '../../assets/Home/Image2.svg';
import BreezySummerImage from '../../assets/Home/image3.svg';
import NewArrivalImage1 from '../../assets/Home/NewArrivel/image4.svg';
import NewArrivalImage2 from '../../assets/Home/NewArrivel/image5.svg';
import NewArrivalImage3 from '../../assets/Home/NewArrivel/image6.svg';
import NewArrivalImage4 from '../../assets/Home/NewArrivel/image7.svg';

import BigSavingImage1 from '../../assets/Home/BigSavingZone/image1.svg';
import BigSavingImage2 from '../../assets/Home/BigSavingZone/image2.svg';
import BigSavingImage3 from '../../assets/Home/BigSavingZone/image3.svg';
import BigSavingImage4 from '../../assets/Home/BigSavingZone/image4.svg';
import BigSavingImage5 from '../../assets/Home/BigSavingZone/image5.svg';

import arrow from '../../assets/Home/arrow.svg';

import image4 from '../../assets/Home/image4.svg';
import image5 from '../../assets/Home/image5.svg';

import CategoriesImage1 from '../../assets/Home/CategoriesForMen/CategoriesImage1.svg'
import CategoriesImage2 from '../../assets/Home/CategoriesForMen/CategoriesImage2.svg'
import CategoriesImage3 from '../../assets/Home/CategoriesForMen/CategoriesImage3.svg'
import CategoriesImage4 from '../../assets/Home/CategoriesForMen/CategoriesImage4.svg'
import CategoriesImage5 from '../../assets/Home/CategoriesForMen/CategoriesImage5.svg'
import CategoriesImage6 from '../../assets/Home/CategoriesForMen/CategoriesImage6.svg'
import CategoriesImage7 from '../../assets/Home/CategoriesForMen/CategoriesImage7.svg'
import CategoriesImage8 from '../../assets/Home/CategoriesForMen/CategoriesImage8.svg'

import CategoriesWomenImage1 from '../../assets/Home/CategoriesForWomen/CategoriesWomenImage1.svg'
import CategoriesWomenImage2 from '../../assets/Home/CategoriesForWomen/CategoriesWomenImage2.svg'
import CategoriesWomenImage3 from '../../assets/Home/CategoriesForWomen/CategoriesWomenImage3.svg'
import CategoriesWomenImage4 from '../../assets/Home/CategoriesForWomen/CategoriesWomenImage4.svg'


import TopBand2 from '../../assets/Home/TopBrandDeals/Brand2.svg'
import TopBand3 from '../../assets/Home/TopBrandDeals/Brand3.svg'
import TopBand4 from '../../assets/Home/TopBrandDeals/Brand4.svg'
import TopBand1 from '../../assets/Home/TopBrandDeals/Brand1.svg'
import TopBand5 from '../../assets/Home/TopBrandDeals/Brand5.svg'

import LimelightImage1 from '../../assets/Home/InTheLimelight/Limelight1.svg'
import LimelightImage2 from '../../assets/Home/InTheLimelight/Limelight2.svg'
import LimelightImage3 from '../../assets/Home/InTheLimelight/Limelight3.svg'
import LimelightImage4 from '../../assets/Home/InTheLimelight/Limelight4.svg'

import FeedImage1 from '../../assets/Home/FeedBack/FeedBackImage1.svg'
import FeedImage2 from '../../assets/Home/FeedBack/FeedBackImage2.svg'
import FeedImage3 from '../../assets/Home/FeedBack/FeedBackImage3.svg'
import Card from '../../components/Card.jsx';
import Feedback from '../../components/Feedback.jsx'
// import List from '../../components/List.jsx'

const App = () => {
    // /////////////////////////////////////////////////////
    // LimelightImage
    const LimelightImage = [
        { src: LimelightImage1, description: true, price: true, heart: true },
        { src: LimelightImage2, description: true, price: true, heart: true },
        { src: LimelightImage3, description: true, price: true, heart: true }
    ];
    // Arrival Section


    // /////////////////////////////////////////////////////


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

    const newArrivals = [
        { image: NewArrivalImage1, alt: "Knitted Joggers", title: "Knitted Joggers" },
        { image: NewArrivalImage2, alt: "Full Sleeve", title: "Full Sleeve" },
        { image: NewArrivalImage3, alt: "Active T-Shirts", title: "Active T-Shirts" },
        { image: NewArrivalImage4, alt: "Urban Shirts", title: "Urban Shirts" }
    ];
    const CategoriesImage = [
        { image: CategoriesImage1, alt: "Shirts", title: "Shirts" },
        { image: CategoriesImage2, alt: "Printed T-Shirts", title: "Printed T-Shirts" },
        { image: CategoriesImage3, alt: "Plain T-Shirt", title: "Plain T-Shirt" },
        { image: CategoriesImage4, alt: "Polo T-Shirts", title: "Polo T-Shirt" },
    ];
    const CategoriesImages2 = [
        { image: CategoriesImage5, alt: "Hoodies & SweetShirts", title: "Hoodies & SweetShirts" },
        { image: CategoriesImage6, alt: "Jeans", title: "Jeans" },
        { image: CategoriesImage7, alt: "Activewear", title: "Activewear" },
        { image: CategoriesImage8, alt: "Bozers", title: "Bozers" }
    ]

    const CategoriesWomenImage = [

        { image: CategoriesWomenImage1, alt: "Hoodies & SweetShirts", title: "Hoodies & SweetShirts" },
        { image: CategoriesWomenImage2, alt: "Jeans", title: "Jeans" },
        { image: CategoriesWomenImage3, alt: "Activewear", title: "Activewear" },
        { image: CategoriesWomenImage4, alt: "Bozers", title: "Bozers" }

    ]
    const Limelights = [
        { image: LimelightImage1, alt: "Bozers", title: "Bozers" },
        { image: LimelightImage2, alt: "Bozers", title: "Bozers" },
        { image: LimelightImage3, alt: "Bozers", title: "Bozers" },
        { image: LimelightImage4, alt: "Bozers", title: "Bozers" },







        // {
        //     id: 1,
        //     title: 'Black Sweatshirt',
        //     description: 'Comfortable and stylish sweatshirt',
        //     brand: "Jhanvi's Brand",
        //     price: 123.00,
        //     isFavorite: false,
        //     image: LimelightImage1,  // Assign the image here
        // },
        // {
        //     id: 2,
        //     title: 'Red Hoodie',
        //     description: 'Warm and cozy hoodie',
        //     brand: "Jhanvi's Brand",
        //     price: 150.00,
        //     isFavorite: false,
        //     image: LimelightImage2,  // You can use different images here
        // },
        // {
        //     id: 3,
        //     title: 'Red Hoodie',
        //     description: 'Warm and cozy hoodie',
        //     brand: "Jhanvi's Brand",
        //     price: 150.00,
        //     isFavorite: false,
        //     image: LimelightImage3,  // You can use different images here
        // },
        // {
        //     id: 4,
        //     title: 'Red Hoodie',
        //     description: 'Warm and cozy hoodie',
        //     brand: "Jhanvi's Brand",
        //     price: 150.00,
        //     isFavorite: false,
        //     image: LimelightImage4,  // You can use different images here
        // },



        // {
        //     id: 1,
        //     title: 'Summer Collection',
        //     image: LimelightImage1,
        //     details: 'Enjoy the summer with this amazing collection!',
        //     price: '$49.99',
        // },
        // {
        //     id: 2,
        //     title: 'High Coziness',
        //     image: LimelightImage2,
        //     details: 'Stay cozy with our best collection!',
        //     price: '$79.99',
        // },
        // {
        //     id: 3,
        //     title: 'Breezy Summer',
        //     image: LimelightImage3,
        //     details: 'Feel the breeze with this awesome summer wear!',
        //     price: '$99.99',
        // },
        // {
        //     id: 4,
        //     title: 'Breezy Summer',
        //     image: LimelightImage4,
        //     details: 'Feel the breeze with this awesome summer wear!',
        //     price: '$99.99',
        // },
    ]

    const [products, setProducts] = useState([

        {
            id: 1,
            title: 'Black Sweatshirt',
            description: 'Comfortable and stylish sweatshirt',
            brand: "Jhanvi's Brand",
            price: 123.00,
            isFavorite: false,
            image: LimelightImage1,  // Assign the image here
        },
        {
            id: 2,
            title: 'Red Hoodie',
            description: 'Warm and cozy hoodie',
            brand: "Jhanvi's Brand",
            price: 150.00,
            isFavorite: false,
            image: LimelightImage2,  // You can use different images here
        },
        {
            id: 3,
            title: 'Red Hoodie',
            description: 'Warm and cozy hoodie',
            brand: "Jhanvi's Brand",
            price: 150.00,
            isFavorite: false,
            image: LimelightImage3,  // You can use different images here
        },
        {
            id: 4,
            title: 'Red Hoodie',
            description: 'Warm and cozy hoodie',
            brand: "Jhanvi's Brand",
            price: 150.00,
            isFavorite: false,
            image: LimelightImage4,  // You can use different images here
        },
    ]);
    // Toggle 
    const toggleFavorite = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
            )
        );
    };



    return (
        <div className="w-full min-h-screen bg-gray-100">
            {/* Slider Section */}
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
            <div className='p-8 max-w-6xl mx-auto'>

                {/* Static Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
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
                </div>

                {/* New Arrival Section */}
                <div className="mt-8 mb-4  ">
                    <div className="flex items-center mb-4">
                        <Title title="New Arrival" />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                        <Card
                            imageSrc={NewArrivalImage1}
                            title="Knitted Joggers"
                            showTitle={true}
                        /><Card
                            imageSrc={NewArrivalImage2}
                            title="Full Sleeve"
                            showTitle={true}
                        /><Card
                            imageSrc={NewArrivalImage3}
                            title="Active T-Shirts"
                            showTitle={true}
                        /><Card
                            imageSrc={NewArrivalImage4}
                            title="Urban Shirts"
                            showTitle={true}
                        />
                    </div>
                </div>

                {/*  BigSavingZone */}

                <div className='mt-8 mb-4 '>
                    <Title title="BigSavingZone" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {/* Image 1 */}
                        <div className="relative h-80 rounded-lg overflow-hidden">
                            <div
                                className="bg-cover bg-center h-full"
                                style={{ backgroundImage: `url(${BigSavingImage1})` }}>
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                                <h3 className="text-2xl font-semibold text-white">Hawaiian Shirts</h3>
                                <p className="text-white mt-2">Dress up in summer vibe</p>
                                <p className="text-white mt-1">UPTO 50% OFF</p>

                                <img src={arrow} alt="arrow" className="w-6 mt-2 mb-2 filter invert flex justify-center items-center" />
                                <button className="bg-transparent border border-white text-white w-24 px-1 py-0.5 rounded mt-2 hover:bg-white hover:text-gray-800">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative h-80 rounded-lg overflow-hidden">
                            <div
                                className="bg-cover bg-center h-full"
                                style={{ backgroundImage: `url(${BigSavingImage2})` }}>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-end p-6">
                                <span className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded">Limited Stock</span>
                                <h3 className="text-2xl font-semibold text-white">Printed T-Shirt</h3>
                                <p className="text-white mt-2">New Designs Every Week</p>
                                <p className="text-white mt-1">UPTO 40% OFF</p>

                                <img src={arrow} alt="arrow" className="w-6 mt-2 mb-2" />
                                <button className="bg-transparent border border-white text-white w-24 px-1 py-0.5 rounded mt-2 hover:bg-white hover:text-gray-800">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="relative h-80 rounded-lg overflow-hidden">
                            <div
                                className="bg-cover bg-center h-full"
                                style={{ backgroundImage: `url(${BigSavingImage3})` }}>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-end p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Cargo Joggers</h3>
                                <p className="text-gray-800 mt-2">Move with style & comfort</p>
                                <p className="text-gray-800 mt-1">UPTO 50% OFF</p>

                                <img src={arrow} alt="arrow" className="w-6 mt-2 mb-2" />
                                <button className="bg-transparent border border-gray-800 text-gray-800 w-24 px-1 py-0.5 rounded mt-2 hover:bg-gray-800 hover:text-white">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="relative h-80 rounded-lg overflow-hidden col-span-2">
                            <div
                                className="bg-cover bg-center h-full"
                                style={{ backgroundImage: `url(${BigSavingImage4})` }}>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-end p-6">
                                <h3 className="text-4xl font-semibold text-gray-800">Urban Shirts</h3>
                                <p className="text-xl text-gray-800 mt-2">Live In Comfort</p>
                                <p className="text-xl text-gray-800 mt-1">FLAT 60% OFF</p>

                                <img src={arrow} alt="arrow" className="w-6 mt-2 mb-2" />
                                <button className="bg-transparent border border-gray-800 text-gray-800 w-24 px-1 py-0.5 rounded mt-2 hover:bg-gray-800 hover:text-white">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                        {/* Image 5 */}
                        <div className="relative h-80 rounded-lg overflow-hidden">
                            <div
                                className="bg-cover bg-center h-full"
                                style={{ backgroundImage: `url(${BigSavingImage5})` }}>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-end p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">Oversized T-Shirts</h3>
                                <p className="text-gray-800 mt-2">Street Style Icon</p>
                                <p className="text-gray-800 mt-1">FLAT 60% OFF</p>
                                {/* Arrow Image */}
                                <img src={arrow} alt="arrow" className="w-6 mt-2 mb-2" />
                                <button className="bg-transparent border border-gray-800 text-gray-800 w-24 px-1 py-0.5 rounded mt-2 hover:bg-gray-800 hover:text-white">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                {/* // Additional Section */}



                <div className="flex items-center justify-center mt-8 mb-4 mt-8 mb-4  ">
                    <div className="relative flex w-full max-w-4xl h-[450px] rounded-lg overflow-hidden">
                        {/* Left Section */}
                        <div
                            className="flex-1 flex flex-col justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${image4})` }}
                        >
                            <h1 className="text-white text-4xl font-bold mb-4">
                                WE MADE YOUR EVERYDAY FASHION BETTER!
                            </h1>
                            <p className="text-white text-lg mb-8">
                                In our journey to improve everyday fashion, euphoria presents
                                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
                            </p>
                            <button className=" border-white text-white w-24 px-1 py-0.5 rounded mt-2 hover:bg-white hover:text-gray-800">
                                Shop Now
                            </button>
                        </div>

                        {/* Right Section */}
                        <div
                            className="flex-1 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image5})` }}
                        ></div>
                    </div>
                </div>




                {/* CategoriesForMen secton */}
                <div className="mt-8 mb-4 ">
                    <div className="flex items-center mb-4">
                        <Title title="CategoriesForMen" />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>

                        <Card
                            imageSrc={CategoriesImage1}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage2}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage3}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage4}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage5}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage6}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage7}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                        <Card
                            imageSrc={CategoriesImage8}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showArrow={true}
                        />
                    </div>


                    {/* CategoriesForWomen section */}
                    <div className="mt-8 mb-4 ">
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-6 bg-black mr-2"></div>
                            <h2 className="text-2xl font-semibold italic text-gray-800">CategoriesForWomen</h2>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>

                            <Card
                                imageSrc={CategoriesWomenImage1}
                                title="Black Sweatshirt ..."
                                brand="Jhanvi's Brand"
                                showTitle={true}
                                showBrand={true}
                                showArrow={true}
                            /><Card
                                imageSrc={CategoriesWomenImage2}
                                title="Black Sweatshirt ..."
                                brand="Jhanvi's Brand"
                                showTitle={true}
                                showBrand={true}
                                showArrow={true}
                            /><Card
                                imageSrc={CategoriesWomenImage3}
                                title="Black Sweatshirt ..."
                                brand="Jhanvi's Brand"
                                showTitle={true}
                                showBrand={true}
                                showArrow={true}
                            /><Card
                                imageSrc={CategoriesWomenImage4}
                                title="Black Sweatshirt ..."
                                brand="Jhanvi's Brand"
                                showTitle={true}
                                showBrand={true}
                                showArrow={true}
                            />
                        </div>

                    </div>


                </div>
                {/* Top Brand  */}
                <div className="bg-gray-800 rounded-lg text-center text-white mt-8 mb-4 p-8 max-w-6xl mx-auto ">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Top Brands Deal</h2>
                        <p className="text-lg">
                            Up To <span className="text-yellow-400 font-semibold">60%</span> off on brands
                        </p>
                    </div>
                    <div className="flex justify-around items-center mt-6 space-x-4">
                        <img src={TopBand1} alt="Brand 1" className="w-24 p-2 bg-white rounded-lg" />
                        <img src={TopBand2} alt="Brand 2" className="w-24 p-2 bg-white rounded-lg" />
                        <img src={TopBand3} alt="Brand 3" className="w-24 p-2 bg-white rounded-lg" />
                        <img src={TopBand4} alt="Brand 4" className="w-24 p-2 bg-white rounded-lg" />
                        <img src={TopBand5} alt="Brand 5" className="w-24 p-2 bg-white rounded-lg" />
                    </div>
                </div>

                {/* Limelights section */}
                <Title title="Limelights" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* First Card */}

                    <Card
                        imageSrc={LimelightImage1}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        price="$123.00"
                        showHeart={true}
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                    />

                    {/* Second Card */}
                    <Card
                        imageSrc={LimelightImage2}
                        title="Line Pattern Black ..."
                        brand="AS's Brand"
                        price="$37.00"
                        showHeart={true}
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                    />

                    {/* Third Card */}
                    <Card
                        imageSrc={LimelightImage3}
                        title="Black Shorts"
                        brand="MM's Brand"
                        price="$37.00"
                        showHeart={true}
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}

                    />

                    {/* Fourth Card */}
                    <Card
                        imageSrc={LimelightImage4}
                        title="Lavender Hoodie ..."
                        brand="Nike's Brand"
                        price="$119.00"
                        showHeart={true}
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                    />
                </div>

            </div>
            {/* Feedback section */}

            <div className="max-w-6xl mx-auto mt-8 mb-4 p-8">
                <h2 className="text-2xl font-bold mb-6"><Title title="FeedBack" /></h2>
                <div className="flex gap-6 overflow-x-auto">
                    <Feedback
                        image={FeedImage1}
                        alt="Floyd Miles"
                        name="Floyd Miles"
                        rating="★★★★☆"
                        feedback="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Feedback
                        image={FeedImage2}
                        alt="Ronald Richards"
                        name="Ronald Richards"
                        rating="★★★★★"
                        feedback="Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Feedback
                        image={FeedImage3}
                        alt="Savannah Nguyen"
                        name="Savannah Nguyen"
                        rating="★★★★☆"
                        feedback="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </div>
            </div>

        </div>

    );
};
<footer />
export default App;
