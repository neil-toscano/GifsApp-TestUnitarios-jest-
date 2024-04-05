import { useState } from 'react';
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/gifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  //    const onAddCategory=(event)=>{
  //     if(event.key==='Enter')
  //     setCategories([...categories,event.target.value]);

  //    }

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);

    console.log(newCategory);

    // if(event.key==='Enter')
    // setCategories([...categories,event.target.value]);
  };
  return (
    <>
      <h1 key="titulo">GifExpertApp</h1>
      {/* {input} */}
      <AddCategory
        //setCatego={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
