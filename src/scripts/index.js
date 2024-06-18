
import {applyInputRangeStyle} from './inputRange.js'
import { createAlbuns} from './theme.js';



function routine() {
    applyInputRangeStyle()
}
routine()


 function filtroPreco(){
    document.addEventListener('DOMContentLoaded', () => {
    // Cria os álbuns após o DOM ser carregado
    
    // Função para filtrar os álbuns com base no preço máximo definido pelo input range
    const filterAlbumsByPrice = (maxPrice) => {
        const albuns = document.querySelectorAll('.album'); // Seleciona todos os álbuns
        const priceValue = document.querySelectorAll('.price-value'); // Seleciona todos os elementos de preço
 
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
        albuns.forEach((album, index) => {
            const price = parseFloat(priceValue[index].textContent.replace('R$ ', '').replace(',', '.')); // Obtém o preço do álbum e converte para número
            if (price <= maxPrice) {
                album.style.display = ''; // Exibe o álbum se o preço for menor ou igual ao máximo
            } else {
                album.style.display = 'none'; // Oculta o álbum se o preço for maior que o máximo
            }
        });
    };
  
    // Seleciona o input range
    const priceRange = document.querySelector('#volume');
  
    // Adiciona um event listener para detectar mudanças no input range
    priceRange.addEventListener('input', () => {
        const maxPrice = parseInt(priceRange.value); // Obtém o valor atual do input range
        document.getElementById('priceValueDisplay').textContent = `R$ ${maxPrice}`; // Atualiza o valor exibido
        filterAlbumsByPrice(maxPrice); // Chama a função de filtro com o novo preço máximo
    });
  });

 }
 filtroPreco()


 function criaAlbum(){
    createAlbuns()
 }
criaAlbum()


 