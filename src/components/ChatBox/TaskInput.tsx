import React, { useState } from 'react';

interface InputComponentProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    handler: () => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ value, onChange, placeholder, handler }) => {
    console.log('0000',value)
    return (
        <div className='w-full flex h-[38px] justify-between items-center rounded-[25px] pl-4 pr-2 py-4 bg-[#EAEAEA]'>
            <input
                type="text"
                className="bg-[#EAEAEA] focus:outline-none w-5/6 text-xs text-[#3e3e3f]"
                value={value}
                placeholder={placeholder ? placeholder : ''}
                onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={handler} className='h-[30px] bg-black rounded-[25px] px-6 py-2 text-white text-xs flex items-center justify-center'>Verify</button>
        </div>

    );
};

export default InputComponent;
