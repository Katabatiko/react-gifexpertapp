import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = (value) =>{
  //   setCategories( [ ...categories, value ] );
  //   // setCategories( catgs => [ ...catgs, value ]); EQUIVALENTE: puede ser un callback cuyo argumento es el estado anterior y regresa el nuevo estado
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* <AddCategory addCategory={ handleAdd } /> */}
      <AddCategory setCategories={ setCategories } />
      <hr/>

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
