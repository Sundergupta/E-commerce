import React from 'react';

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
    return (
        <div className=" rounded-lg overflow-hidden relative w-64">
            {/* Image as background */}
            <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
                {/* Conditionally Render Heart Icon at top-right */}
                {showHeart && (
                    <div className="absolute top-2 right-2">
                        <button className="text-gray-400 bg-white rounded-full p-1">
                            ❤️
                        </button>
                    </div>
                )}

                {/* Conditionally Render Arrow at bottom-right */}
                {showArrow && (
                    <div className="absolute bottom-4 right-4">
                        <button className="">
                            ➡️
                        </button>
                    </div>
                )}

                {/* Show Both if both conditions are true */}
                {showHeart && showArrow && (
                    <>
                        <div className="absolute top-2 right-2">
                            <button className="  rounded-full p-1">
                                ❤️
                            </button>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <button className="">
                                ➡️
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div className="p-4">
                {/* Conditionally Render Title, Brand, and Price */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        {showTitle && (
                            <p className="text-sm font-bold text-gray-800 truncate">{title}</p>
                        )}

                        {showBrand && (
                            <span className="text-gray-500 text-xs">{brand}</span>
                        )}
                    </div>

                    {/* Conditionally Render Price */}
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
