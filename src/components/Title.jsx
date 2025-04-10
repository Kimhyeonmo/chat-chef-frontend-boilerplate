import React from 'react'
/*
홈만 타이틀로 걸었는데
info에서도 타이틀 컴포넌트로 사용하기 
props활용하여 
*/


const Title = ({ title, description }) => {
    return (
        <div className="px-2 pt-6">
            <h1 className="text-4.5xl font-black text-white">{title}</h1>
            <span className="block text-sm mt-3 text-white break-keep pr-9">  {description}
            </span>
        </div>
    );
};

export default Title