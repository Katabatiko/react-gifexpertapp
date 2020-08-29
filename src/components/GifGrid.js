import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: gifs, loading } = useFetchGifs( category );


  return (
    <>
    <h3 className='animate__animated animate__bounce'>{ category }</h3>

    { loading && <p className='animate__animated animate__pulse animate__infinite	infinite'>'Cargando...'</p> }
      
    <div className='cardGrid'>
        {
          gifs.map( img  => (
              <GifGridItem key={ img.id } { ...img } />
            )
          )
        }
    </div>
    </>
  )
}
