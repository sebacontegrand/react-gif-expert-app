import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "the Office",
  ]);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);}

    return (
      <>
        <h1>Find giph... you love</h1>
        <h5>developers.giphy.com</h5>
        <AddCategory onNewCategory={onAddCategory}/>
       
        
          {categories.map((category) => (
             <GifGrid key={category} category={category}/>
          
        ))}
        
        
      </>
    );
  ;
};
