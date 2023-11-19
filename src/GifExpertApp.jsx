import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddcategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>Gift Expert App</h1>

        <AddCategory onNewCategory = { onAddcategory } />

        <ol>
          { categories.map( category => 
              (
                <GifGrid key={ category } category={ category } />
              ))
          }
        </ol>
    </>
  )
}
