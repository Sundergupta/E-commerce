import React from 'react';

const Title = ({ title }) => {
    return (
        <div className="flex items-center">
            <div className="w-1 h-6 bg-black mr-2"></div>
            <h2 className="text-2xl font-semibold italic text-gray-800">{title}</h2>
        </div>
    );
};

export default Title;
