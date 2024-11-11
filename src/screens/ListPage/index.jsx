import React, { useState } from 'react';
import CategoriesWomenImage1 from '../../assets/Home/Categories For Women/CategoriesWomenImage1.svg'
import CategoriesWomenImage2 from '../../assets/Home/Categories For Women/CategoriesWomenImage2.svg'
import CategoriesWomenImage3 from '../../assets/Home/Categories For Women/CategoriesWomenImage3.svg'
import CategoriesWomenImage4 from '../../assets/Home/Categories For Women/CategoriesWomenImage4.svg'
import CategoriesWomenImage5 from '../../assets/Home/Categories For Women/CategoriesWomenImage5.svg'
import CategoriesWomenImage6 from '../../assets/Home/Categories For Women/CategoriesWomenImage6.svg'
import CategoriesWomenImage7 from '../../assets/Home/Categories For Women/CategoriesWomenImage7.svg'
import CategoriesWomenImage8 from '../../assets/Home/Categories For Women/CategoriesWomenImage8.svg'
import CategoriesWomenImage9 from '../../assets/Home/Categories For Women/CategoriesWomenImage9.svg'
import CategoriesWomenImage10 from '../../assets/Home/Categories For Women/CategoriesWomenImage10.svg'
import CategoriesWomenImage11 from '../../assets/Home/Categories For Women/CategoriesWomenImage11.svg'
import CategoriesWomenImage12 from '../../assets/Home/Categories For Women/CategoriesWomenImage12.svg'
import CategoriesWomenImage13 from '../../assets/Home/Categories For Women/CategoriesWomenImage13.svg'
import CategoriesWomenImage14 from '../../assets/Home/Categories For Women/CategoriesWomenImage14.svg'

import Card from '../../components/Card';


const List = () => {



    const dressStyles = [
        'Classic',
        'Casual',
        'Business',
        'Sport',
        'Elegant',
        'Formal (evening)'
    ];


    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    const colors = [
        { name: "Purple", hex: "#8b5cf6" },
        { name: "Black", hex: "#000000" },
        { name: "Red", hex: "#ef4444" },
        { name: "Orange", hex: "#f97316" },
        { name: "Navy", hex: "#1e3a8a" },
        { name: "White", hex: "#ffffff" },
        { name: "Broom", hex: "#f59e0b" },
        { name: "Green", hex: "#10b981" },
        { name: "Yellow", hex: "#fbbf24" },
        { name: "Grey", hex: "#d1d5db" },
        { name: "Pink", hex: "#ec4899" },
        { name: "Blue", hex: "#3b82f6" },
    ];

    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (colorName) => {
        setSelectedColor(colorName);
    };
    // State variables for the price range
    const [minPrice, setMinPrice] = useState(70);
    const [maxPrice, setMaxPrice] = useState(600);

    // Range limits
    const min = 0;
    const max = 1000;

    // Function to handle minimum price change
    const handleMinChange = (event) => {
        const value = Math.min(Number(event.target.value), maxPrice - 50); // Ensure minPrice is not greater than maxPrice - 50
        setMinPrice(value);
    };

    // Function to handle maximum price change
    const handleMaxChange = (event) => {
        const value = Math.max(Number(event.target.value), minPrice + 50); // Ensure maxPrice is not less than minPrice + 50
        setMaxPrice(value);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex p-8 gap-8">
            {/* Navigation Bar */}


            {/* Filter Sidebar */}
            <div className="w-1/5 bg-white rounded-lg shadow-lg p-6 sticky top-8 h-fit">
                <h2 className="text-xl font-bold text-gray-700 mb-6">Filter</h2>
                <hr className="mb-6" />

                {/* Category List */}
                <div className="mb-6">
                    <h4 className="text-gray-600 mb-2">Categories</h4>
                    <ul className="space-y-2">
                        {['Tops', 'Printed T-shirts', 'Plain T-shirt', 'Kurti', 'Boxers', 'Full sleeve T-shirts', 'Joggers', 'Payjiamas', 'Jeans'].map((item, index) => (
                            <li key={index} className="text-gray-700 cursor-pointer hover:text-blue-500">{item}</li>
                        ))}
                    </ul>
                </div>

                <hr className="mb-6" />

                {/* Price Range Filter */}
                <div className="p-4">
                    <h2 className="font-semibold text-gray-700 mb-4">Price</h2>
                    <hr className="mb-6" />
                    {/* Dual Range Slider */}
                    <div className="relative flex items-center mb-6">
                        {/* Minimum Price Slider */}
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={minPrice}
                            onChange={handleMinChange}
                            className="absolute w-full h-1 bg-gray-300 appearance-none z-10"
                            style={{ zIndex: 2 }} // Ensure the min slider is above the active range bar
                        />
                        {/* Maximum Price Slider */}
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={maxPrice}
                            onChange={handleMaxChange}
                            className="absolute w-full h-1 bg-gray-300 appearance-none z-10"
                        />

                        {/* Active range bar */}
                        <div className="relative w-full h-1 bg-gray-300 rounded">
                            <div
                                className="absolute h-1 bg-black rounded"
                                style={{
                                    left: `${(minPrice / max) * 100}%`,
                                    right: `${100 - (maxPrice / max) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Display Selected Prices */}
                    <div className="flex justify-between mt-4">
                        <span className="px-4 py-2 border rounded bg-gray-100 font-bold text-gray-700">
                            ${minPrice}
                        </span>
                        <span className="px-4 py-2 border rounded bg-gray-100 font-bold text-gray-700">
                            ${maxPrice}
                        </span>
                    </div>
                </div>
                <div>
                    <hr className="mb-6" />
                    <h2 className="font-semibold text-gray-700 mb-4">Colors</h2>
                    <hr className="mb-6" />
                    <div className="grid grid-cols-4 gap-4">
                        {colors.map((color) => (
                            <div
                                key={color.name}
                                className={`cursor-pointer flex flex-col items-center`}
                                onClick={() => handleColorClick(color.name)}
                            >
                                {/* Color Box */}
                                <div
                                    className={`w-12 h-12 rounded-md`}
                                    style={{
                                        backgroundColor: color.hex,
                                        border: color.name === "White" ? "1px solid #ccc" : "none",
                                        boxShadow: selectedColor === color.name ? '0 0 4px 2px rgba(0, 0, 0, 0.3)' : 'none'
                                    }}
                                />
                                {/* Color Name */}
                                <span className="mt-2 text-gray-500 text-sm">{color.name}</span>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="p-6">
                    <h2 className="font-semibold text-gray-700 mb-4">Size</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={`border rounded px-4 py-2 text-sm font-semibold 
                            ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-gray-600'}
                            hover:bg-black hover:text-white transition`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div class="bg-white rounded-md shadow-md">
                    <div class="px-4 py-3 border-b border-gray-200 cursor-pointer">
                        <h2 class="font-medium text-gray-900">Dress Style</h2>
                        <svg class="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    <div class="px-4 py-2">
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Classic</a>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Casual</a>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Business</a>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Sport</a>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Elegant</a>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100">Formal (evening)</a>
                    </div>
                </div>
            </div>
            {/* Categories For women section */}
            <div className="w-4/5 bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-black mr-2"></div>
                    <h2 className="text-2xl font-semibold italic text-gray-800">Categories For Women</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

                    <Card
                        imageSrc={CategoriesWomenImage1}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage2}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage3}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showHeart={true}
                        showPrice={true}
                    /><Card
                        imageSrc={CategoriesWomenImage4}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    />
                    <Card
                        imageSrc={CategoriesWomenImage5}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}

                    /><Card
                        imageSrc={CategoriesWomenImage6}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage7}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage8}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage9}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage10}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage11}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage12}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage13}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage14}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage4}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    /><Card
                        imageSrc={CategoriesWomenImage4}
                        title="Black Sweatshirt ..."
                        brand="Jhanvi's Brand"
                        showTitle={true}
                        showBrand={true}
                        showPrice={true}
                        showHeart={true}
                    />
                </div>

            </div>
        </div>
    );
};

export default List;