

export const getGifs = async ( category )=>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=7MwXGjTlnjdmNI4O77QG9VQtl4K1v0jV`
  const resp = await fetch( url )
  const { data } = await resp.json();

  const gifs = data.map( img =>{
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url // la interrogación es por si no viene images
    }
  })

  return gifs;
}
