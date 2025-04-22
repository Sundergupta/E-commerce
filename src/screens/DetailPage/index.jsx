import React, { useState, useEffect } from "react";
import { Star, PlayCircle } from "lucide-react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

// Image Imports (Women Categories)
import CategoriesWomenImage2 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage2.svg";
import CategoriesWomenImage3 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage3.svg";
import CategoriesWomenImage4 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage4.svg";
import CategoriesWomenImage5 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage5.svg";
import CategoriesWomenImage6 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage6.svg";
import CategoriesWomenImage7 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage7.svg";
import CategoriesWomenImage8 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage8.svg";
import CategoriesWomenImage9 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage9.svg";
import CategoriesWomenImage10 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage10.svg";
import CategoriesWomenImage11 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage11.svg";
import CategoriesWomenImage12 from "../../assets/Home/CategoriesForWomen/CategoriesWomenImage12.svg";

// Default fallback image
const defaultImage = "https://via.placeholder.com/400x400.png?text=No+Image";

const ProductPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product.selectedProduct);

    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("black");
    const [mainImage, setMainImage] = useState("");

    // Thumbnail setup with fallback
    const thumbnails = product?.thumbnails?.length
        ? product.thumbnails
        : product?.img
            ? [product.img]
            : [defaultImage];

    // Set main image when product changes
    useEffect(() => {
        if (product?.img) {
            setMainImage(product.img);
        } else {
            setMainImage(defaultImage);
        }
    }, [product]);

    const productCards = [
        CategoriesWomenImage2,
        CategoriesWomenImage3,
        CategoriesWomenImage4,
        CategoriesWomenImage5,
        CategoriesWomenImage6,
        CategoriesWomenImage7,
        CategoriesWomenImage8,
        CategoriesWomenImage9,
        CategoriesWomenImage10,
        CategoriesWomenImage11,
        CategoriesWomenImage12,
    ];

    if (!product) {
        return (
            <div className="max-w-6xl mx-auto p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-700">No product selected.</h2>
                <p className="text-gray-500">Please go back and select a product first.</p>
                <button
                    onClick={() => window.history.back()}
                    className="mt-4 text-blue-500 underline"
                >
                    ← Go back to products
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-8">
            {/* Product Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left - Images */}
                <div className="flex gap-4">
                    <div className="flex md:flex-col gap-2 overflow-x-auto">
                        {thumbnails.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-16 h-16 rounded-lg border cursor-pointer"
                                onClick={() => setMainImage(image)}
                            />
                        ))}
                    </div>
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="rounded-lg w-full max-w-lg"
                    />
                </div>

                {/* Right - Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-1">{product.title || "No Title"}</h2>

                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4"
                                fill={i < Math.floor(product.rating || 5) ? "yellow" : "none"}
                                stroke="yellow"
                            />
                        ))}
                        <span className="ml-2 text-gray-500">(120 comments)</span>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Select Size</h3>
                        <div className="flex gap-2 mt-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? "bg-black text-white" : "bg-gray-100"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Colours Available</h3>
                        <div className="flex gap-2 mt-2">
                            {["black", "red", "yellow"].map((color) => (
                                <button
                                    key={color}
                                    title={color}
                                    aria-label={color}
                                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart & Buy Now */}
                    <div className="mt-6 flex items-center gap-4 flex-wrap">
                        <button
                            className="bg-black text-white px-6 py-3 rounded-md"
                            onClick={() => {
                                const productToAdd = {
                                    ...product,
                                    size: selectedSize,
                                    color: selectedColor,
                                    image: mainImage,
                                    price: product.price || 75,
                                    quantity: 1,
                                };
                                dispatch(addToCart(productToAdd));
                            }}
                        >
                            🛒 Add to Cart
                        </button>

                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-md"
                            onClick={() => {
                                const productToBuy = {
                                    ...product,
                                    size: selectedSize,
                                    color: selectedColor,
                                    image: mainImage,
                                    price: product.price || 75,
                                    quantity: 1,
                                };
                                dispatch(addToCart(productToBuy));
                                navigate("/payment");
                            }}
                        >
                            ⚡ Buy Now
                        </button>

                        <span className="text-xl font-semibold">
                            ${product.price ? product.price.toFixed(2) : "0.00"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold">| Product Description</h3>
                    <div className="flex gap-4 mt-4 border-b pb-2">
                        <span className="font-semibold border-b-2 border-black pb-1">Description</span>
                        <span className="text-gray-500">User comments (5)</span>
                        <span className="text-gray-500">Question & Answer (3)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        {product.description ||
                            "This product is crafted with high-quality material, offering style and comfort for everyday wear."}
                    </p>
                </div>
                <div className="relative">
                    <img src={mainImage} alt="Video" className="rounded-lg w-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle
                            className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full cursor-pointer"
                            onClick={() => alert("Play product video here")}
                        />
                    </div>
                </div>
            </div>

            {/* Categories For Women */}
            <div className="w-full bg-white rounded-lg shadow-lg p-6 mt-12">
                <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-black mr-2"></div>
                    <h2 className="text-2xl font-semibold italic text-gray-800">Categories for Women</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {productCards.map((image, index) => (
                        <Card
                            key={index}
                            imageSrc={image}
                            title="Black Sweatshirt ..."
                            brand="Jhanvi's Brand"
                            showTitle={true}
                            showBrand={true}
                            showPrice={true}
                            showHeart={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
