"use client";
import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, href }) => {
  const buttonContent = (
    <>
      {/* Shine effect */}
      <span className='
        absolute inset-0 
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700 ease-out
      '/>
      {/* Button content */}
      <span className='relative flex items-center gap-2'>
        {children}
        <svg 
          className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' 
          fill='none' 
          viewBox='0 0 24 24' 
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
        </svg>
      </span>
    </>
  );

  const className = `
    group relative overflow-hidden
    bg-[#3AD51C] text-neutral-900
    px-7 py-3.5 rounded-full
    font-medium text-sm tracking-wide
    shadow-[0_4px_20px_rgba(58,213,28,0.4)]
    hover:shadow-[0_8px_30px_rgba(58,213,28,0.6)]
    transition-all duration-300 ease-out
    hover:scale-105 active:scale-95
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;
