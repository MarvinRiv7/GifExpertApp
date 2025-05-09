import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push(newCategory)
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

// MkfvSoRoXM2lNtLv3aNo06PLdqiWij4g
