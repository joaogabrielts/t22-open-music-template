/* Script Global */
import {applyInputRangeStyle} from './inputRange.js'
import { albumList } from './albumsDatabase.js'


function routine() {
    applyInputRangeStyle()
}
routine()



document.addEventListener('DOMContentLoaded', () => {
    // Cria os álbuns após o DOM ser carregado
    
    // Função para filtrar os álbuns com base no preço máximo definido pelo input range
    const filterAlbumsByPrice = (maxPrice) => {
        console.log(maxPrice);
        const albuns = document.querySelectorAll('.album'); // Seleciona todos os álbuns
        const priceValue = document.querySelectorAll('.price-value'); // Seleciona todos os elementos de preço
     console.log(albuns,);
        const albumSun = document.querySelectorAll(".album-sun")
       const priceValueSun = document.querySelectorAll('.price-value__sun')
       console.log(albumSun,priceValueSun);

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
  
  const createAlbuns = () => {
    const SectionAlbuns = document.querySelector(".albuns-section")
    const divSection = document.createElement('div')
    divSection.classList.add('albuns-section__details')
   
    albumList.forEach((index) => {
        const divAlbum = document.createElement("div")
        const AlbumImg = document.createElement('img') 
        const titleAlbum = document.createElement('p')
        const divDetails = document.createElement('div')
        const paragrafoDetails = document.createElement('p')
        const paragrafoDetailsAlbum = document.createElement('p')
        const divPrice = document.createElement('div')
        const priceValue = document.createElement('p')
        const button = document.createElement('button')
      
        divAlbum.classList.add('album')
        titleAlbum.classList.add('album-title')
        divDetails.classList.add('album-details')
        divPrice.classList.add('album-price')
        priceValue.classList.add('price-value')
        button.classList.add('buy-button')
      
        AlbumImg.src = index.img
        AlbumImg.alt = 'Capa de Album'
        AlbumImg.classList.add('album-img')
      
        titleAlbum.innerText = index.title
         
        paragrafoDetails.innerText = index.band
        paragrafoDetailsAlbum.innerText = index.genre
        divDetails.appendChild(paragrafoDetails)
        divDetails.appendChild(paragrafoDetailsAlbum)
      
        priceValue.innerText = `R$ ${index.price}` // Certifique-se de que o preço está no formato correto
        divPrice.appendChild(priceValue)
        button.innerText = 'Comprar'
        divPrice.appendChild(button)
         
        divAlbum.appendChild(AlbumImg)
        divAlbum.appendChild(titleAlbum)
        divAlbum.appendChild(divDetails)
        divAlbum.appendChild(divPrice)
     
        divSection.appendChild(divAlbum)
    })
  
    SectionAlbuns.appendChild(divSection) 
    albuns() // Inicializa as funções relacionadas aos álbuns, incluindo temas
  }
  
  const albuns = () => {
    const buttonIcons = document.querySelector('.button-icons')
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const buttonGenre = document.querySelectorAll('.item-button')
    const buttonDestaque = document.querySelector('.item-button__destaque')
    const titulos = document.querySelectorAll('.titulos, .titulos-sun')
    const albuns = document.querySelectorAll('.album')
    const titleAlbum = document.querySelectorAll('.album-title')
    const priceValue = document.querySelectorAll(".price-value")
    const priceRange = document.querySelector('#volume');
    
    const applySunTheme = () => {
      buttonIcons.classList.remove('button-icons');
      buttonIcons.classList.add('button-sun');
    
      body.classList.add('body');
      header.classList.add('header');
    
      buttonGenre.forEach((button) => {
          button.classList.remove("item-button");
          button.classList.add("item-button__sun");
      });
      buttonDestaque.classList.remove('item-button__destaque');
      buttonDestaque.classList.add('item-button');
    
      albuns.forEach((album) => {
          album.classList.remove('album');
          album.classList.add("album-sun");
      });
    
      titulos.forEach((titulo) => {
          titulo.classList.remove('titulos');
          titulo.classList.add('titulos-sun'); 
      });
    
      titleAlbum.forEach((title) => {
          title.classList.remove('album-title');
          title.classList.add('album-title__sun');
      });
    
      priceValue.forEach((value) => {
          value.classList.remove('price-value');
          value.classList.add('price-value__sun');
      });
    
      localStorage.setItem('theme', 'sun');
      
    };
    
    const applyDefaultTheme = () => {
      buttonIcons.classList.remove('button-sun');
      buttonIcons.classList.add('button-icons');
    
      body.classList.remove('body');
      header.classList.remove('header');
    
      buttonGenre.forEach((button) => {
          button.classList.remove('item-button__sun');
          button.classList.add('item-button');
      });
      buttonDestaque.classList.add('item-button__destaque');
      buttonDestaque.classList.remove('item-button');
    
      titulos.forEach((titulo) => {
          titulo.classList.remove('titulos-sun');
          titulo.classList.add('titulos');
      });
    
      albuns.forEach((album) => {
          album.classList.add('album');
          album.classList.remove("album-sun");
      });
    
      titleAlbum.forEach((title) => {
          title.classList.add('album-title');
          title.classList.remove('album-title__sun');
      });
    
      priceValue.forEach((value) => {
          value.classList.add('price-value');
          value.classList.remove('price-value__sun');
      });
    
      localStorage.setItem('theme', 'default');
    };
    
    buttonIcons.addEventListener('click', (event) => {
        if(buttonIcons.classList.contains('button-icons')){
            applySunTheme('sun');
        } else if(buttonIcons.classList.contains('button-sun')){
            applyDefaultTheme('default');
        }
    });
      
    document.addEventListener('DOMContentLoaded', (event) => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'sun') {
            applySunTheme();
        } else {
            applyDefaultTheme();
        }
    });
  }

  createAlbuns()