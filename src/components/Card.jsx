import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../store/productPageSilce';
import { useNavigate } from 'react-router-dom';

const Card = ({
    imageSrc,
    title,
    brand,
    price,
    showHeart,
    showArrow,
    showTitle,
    showBrand,
    showPrice
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        // Dispatch product details to Redux store
        dispatch(setSelectedProduct({
            img: imageSrc,
            title,
            brand,
            price
        }));

        // Navigate to DetailPage
        navigate('/DetailPage');
    };

    return (
        <div onClick={handleClick} className="rounded-lg overflow-hidden relative w-64 cursor-pointer">
            <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
                {showHeart && (
                    <div className="absolute top-2 right-2">
                        <button className="text-gray-400 bg-white rounded-full p-1">❤️</button>
                    </div>
                )}
                {showArrow && (
                    <div className="absolute bottom-4 right-4">
                        <button>➡️</button>
                    </div>
                )}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        {showTitle && (
                            <p className="text-sm font-bold text-gray-800 truncate">
                                {title}
                            </p>
                        )}
                        {showBrand && (
                            <span className="text-gray-500 text-xs">{brand}</span>
                        )}
                    </div>
                    {showPrice && (
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-800">${price}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
