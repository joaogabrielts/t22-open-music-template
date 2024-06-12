/* Script Global */
import {applyInputRangeStyle} from './inputRange.js'
import { albumList } from './albumsDatabase.js'



function routine(){
    applyInputRangeStyle()
}
routine()

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

       priceValue.innerText = index.price
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
}

createAlbuns()


