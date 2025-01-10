import React from 'react';

interface SelectFieldProps {
  placeholder: string;
  options: string[];
  label:string;
  value:string|null;
  onChange: (value: string) => void;
}

// const SelectFieldInvestment: React.FC<SelectFieldProps> = ({ placeholder, options = [], onChange,value,label }) => {
const SelectFieldInvestment: React.FC<SelectFieldProps> = ({ placeholder, options = [], onChange}) => {
  const styles = {
    select: {
      border: 'none',
      borderBottom: '2px solid',
      borderImage: 'linear-gradient(to right, #C980FF, #C980FF) 1',
      background: 'transparent',
      color: 'white',
      width: '100%',
      padding: '0.75rem',
      boxSizing: 'border-box',
      marginBottom: '1rem',
    },
  };

  return (
    <div className="relative w-full">
      <select
        style={styles.select as React.CSSProperties}
        className="placeholder-grey-200 text-black appearance-none focus:outline-none focus:ring-0"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option className='text-black' key={index} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectFieldInvestment;
