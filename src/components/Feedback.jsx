import React from 'react';

const Feedback = ({ image, alt, name, rating, feedback }) => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg p-4 border">
            <img src={image} alt={alt} className="w-16 h-16 rounded-full object-cover mb-4" />
            <h3 className="font-semibold text-xl">{name}</h3>
            <div className="flex items-center mb-2">
                <span className="text-yellow-400">{rating}</span>
            </div>
            <p className="text-gray-600">{feedback}</p>
        </div>
    );
};

export default Feedback;
