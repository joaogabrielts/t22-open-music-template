import { fetchMusics } from "./api.js";
import {albums} from "./albums.js"

export const createAlbums = async () => {
  const sectionAlbuns = document.querySelector(".albuns-section");
  const divSection = document.createElement("div");
  divSection.classList.add("albuns-section__details");

  try {
    const albumList = await fetchMusics();

    albumList.forEach((album) => {
      const divAlbum = document.createElement("div");
      const albumImg = document.createElement("img");
      const titleAlbum = document.createElement("p");
      const divDetails = document.createElement("div");
      const paragrafoDetails = document.createElement("p");
      const paragrafoDetailsAlbum = document.createElement("p");
      const divPrice = document.createElement("div");
      const priceValue = document.createElement("p");
      const button = document.createElement("button");

      divAlbum.classList.add("album");
      titleAlbum.classList.add("album-title");
      divDetails.classList.add("album-details");
      divPrice.classList.add("album-price");
      priceValue.classList.add("price-value");
      button.classList.add("buy-button");

      albumImg.src = album.img;
      albumImg.alt = "Capa de Album";
      albumImg.classList.add("album-img");

      titleAlbum.innerText = album.title;

      paragrafoDetails.innerText = album.band;
      paragrafoDetailsAlbum.innerText = album.genre;
   
      
     
      divDetails.appendChild(paragrafoDetails);
      divDetails.appendChild(paragrafoDetailsAlbum);

      priceValue.innerText = `R$ ${album.price}`;
      divPrice.appendChild(priceValue);
      button.innerText = "Comprar";
      divPrice.appendChild(button);

      divAlbum.appendChild(albumImg);
      divAlbum.appendChild(titleAlbum);
      divAlbum.appendChild(divDetails);
      divAlbum.appendChild(divPrice);

      divSection.appendChild(divAlbum);
    });

    sectionAlbuns.appendChild(divSection);
  } catch (error) {
    console.error("Erro ao buscar os dados dos álbuns:", error);
  }

  albums();
};


