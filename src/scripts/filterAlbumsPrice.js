export function filterAlbumsByPrice(maxPrice){
    const albums = document.querySelectorAll('.album');
    const priceValue = document.querySelectorAll('.price-value'); 

    const albumSun = document.querySelectorAll(".album-sun")
   const priceValueSun = document.querySelectorAll('.price-value__sun')
   
   
 albumSun.forEach((album, index) => {
    const priceSun = parseFloat(priceValueSun[index].textContent.replace('R$', '').replace(',','.'));
    if(priceSun <= maxPrice){
       album.style.display = ''
    } else{
        album.style.display = 'none'; 
    }

 })
    albums.forEach((album, index) => {
        const price = parseFloat(priceValue[index].textContent.replace('R$ ', '').replace(',', '.')); 
        if (price <= maxPrice) {
            album.style.display = ''; 
        } else {
            album.style.display = 'none'; 
        }
    });
};