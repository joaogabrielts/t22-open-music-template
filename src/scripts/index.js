import { applyInputRangeStyle } from "./inputRange.js";
import { createAlbums } from "./theme.js";
import { fetchMusics } from "./api.js";
import { filterAlbumsByPrice } from "./filterAlbumsPrice.js";

function routine() {
  applyInputRangeStyle();
}
routine();

function filtroPreco() {
  const priceRange = document.querySelector("#volume");
  priceRange.addEventListener("input", () => {
    const maxPrice = parseInt(priceRange.value);
    document.getElementById("priceValueDisplay").textContent = `R$ ${maxPrice}`;
    filterAlbumsByPrice(maxPrice);
  });
}
filtroPreco();

function criaAlbum() {
  createAlbums();
}
criaAlbum();


