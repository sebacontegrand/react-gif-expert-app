export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=c9Sze09pM7CHWoDYUDDZHKZMnQj4KJqB&q=${ category }&limit=9`;
  try {
    const resp = await fetch(url);

    const { data = [] } = await resp.json();
    console.log(data)
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
   
    return gifs;
  } catch (error) {
    console.log(error);
  }
  
};
