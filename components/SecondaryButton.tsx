"use client";
import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick, href }) => {
  const buttonContent = (
    <>
      {/* Background fill on hover */}
      <span className='
        absolute inset-0 bg-neutral-900
        scale-x-0 group-hover:scale-x-100
        origin-left
        transition-transform duration-300 ease-out
      '/>
      {/* Button content */}
      <span className='
        relative flex items-center gap-2
        transition-colors duration-300
        group-hover:text-white
      '>
        {children}
        <svg
          className='w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
        </svg>
      </span>
    </>
  );

  const className = `
    group relative overflow-hidden
    bg-transparent text-neutral-900
    px-5 py-2 rounded-xl
    font-medium text-sm tracking-wide
    border-2 border-neutral-900
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

export default SecondaryButton;
