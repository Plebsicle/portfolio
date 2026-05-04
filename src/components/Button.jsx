import React from 'react';

const Button = ({ children, className = '', variant = 'accent', ...props }) => {
  const baseStyle = "group relative inline-flex items-center justify-center overflow-hidden rounded-[2rem] font-sans font-bold tracking-tight transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] active:scale-[0.98]";
  
  const variants = {
    accent: "bg-accent text-inverse-content px-8 py-4",
    outline: "bg-transparent text-dark border border-dark/20 px-8 py-4 hover:border-dark",
    "outline-light": "bg-transparent text-inverse-content border border-inverse-content/50 px-8 py-4 hover:bg-primary/10 hover:border-inverse-content",
    dark: "bg-inverse text-inverse-content px-8 py-4"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 z-0 bg-inverse opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
    </button>
  );
};

export default Button;
