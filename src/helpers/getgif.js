export const getGrid = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ukZOP6CTl3rknyGF4HkyZoiUsc2VQyE4&q=${category}&limit=5`;
  const resp = await fetch(url);
  const dato = await resp.json();
  const resArray = dato.data.map((dato) => {
    const objeto = {
      url: dato.images.original.url,
      id: dato.id,
      titulo: dato.title,
    };
    return objeto;
  });
  console.log(resArray);
  return resArray;
};
