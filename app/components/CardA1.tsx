import React from 'react';

interface CardA1Props {
  name: string;
  setname: (name: string) => void;
}

const CardA1: React.FC<CardA1Props> = (props) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <input 
        type="text" 
        placeholder="Enter value" 
        className="border p-2 rounded mb-2"
        onChange={(e) => props.setname(e.target.value)} 
      />
      <p className="text-gray-700 mt-2">Card: {props.name}</p>
    </div>
  );
};

export default CardA1;
