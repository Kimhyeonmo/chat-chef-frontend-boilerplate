import React from "react";

const Title = ({ title, description }) => {
    return (
        <div className="px-6 pt-12 relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {title}
            </h1>
            <span className="block text-sm mt-3 text-white break-keep max-w-xl">
                {description}
            </span>
        </div>
    );
};

export default Title;
