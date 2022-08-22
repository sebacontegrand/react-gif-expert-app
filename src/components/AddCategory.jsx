import React from "react";

export const AddCategory = ({onNewCategory}) => {
  const [input, setInput] = React.useState('');
  
  const handleChange = (e) => {
    
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length<=1) return;

    
    onNewCategory(input.trim());
    setInput('');
  }

  return (
    
    <form onSubmit={handleSubmit} >
        <input
      type="text"
      placeholder="find gif..."
      value={input}
      onChange={handleChange}
    />
    </form>
    
  );
};
