import { fetchMusics } from "./api.js";
import { createAlbums } from "./theme.js";

export function albums() {
  const buttonIcons = document.querySelector(".button-icons");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const buttonGenre = document.querySelectorAll(".item-button");
  const buttonDestaque = document.querySelector(".item-button__destaque");
  const titulos = document.querySelectorAll(".titulos, .titulos-sun");
  const albuns = document.querySelectorAll(".album");

  const titleAlbum = document.querySelectorAll(".album-title");
  const priceValue = document.querySelectorAll(".price-value");

  buttonGenre.forEach((list) => {
    list.addEventListener("click", () => {
      if (list.innerText.toLowerCase() === "MPB".toLowerCase()) {
        document.querySelectorAll(".album").forEach((el) => {
          el.innerHTML = "";
        });

        console.log("mpm");
      }
    });
  });

  const applySunTheme = () => {
    buttonIcons.classList.remove("button-icons");
    buttonIcons.classList.add("button-sun");

    body.classList.add("body");
    header.classList.add("header");

    buttonGenre.forEach((button) => {
      button.classList.remove("item-button");
      button.classList.add("item-button__sun");
    });
    buttonDestaque.classList.remove("item-button__destaque");
    buttonDestaque.classList.add("item-button");

    albuns.forEach((album) => {
      album.classList.remove("album");
      album.classList.add("album-sun");
    });

    titulos.forEach((titulo) => {
      titulo.classList.remove("titulos");
      titulo.classList.add("titulos-sun");
    });

    titleAlbum.forEach((title) => {
      title.classList.remove("album-title");
      title.classList.add("album-title__sun");
    });

    priceValue.forEach((value) => {
      value.classList.remove("price-value");
      value.classList.add("price-value__sun");
    });

    localStorage.setItem("theme", "sun");
  };

  const applyDefaultTheme = () => {
    buttonIcons.classList.remove("button-sun");
    buttonIcons.classList.add("button-icons");
    body.classList.remove("body");
    header.classList.remove("header");

    buttonGenre.forEach((button) => {
      button.classList.remove("item-button__sun");
      button.classList.add("item-button");
    });
    buttonDestaque.classList.add("item-button__destaque");
    buttonDestaque.classList.remove("item-button");

    titulos.forEach((titulo) => {
      titulo.classList.remove("titulos-sun");
      titulo.classList.add("titulos");
    });

    albuns.forEach((album) => {
      album.classList.add("album");
      album.classList.remove("album-sun");
    });

    titleAlbum.forEach((title) => {
      title.classList.add("album-title");
      title.classList.remove("album-title__sun");
    });

    priceValue.forEach((value) => {
      value.classList.add("price-value");
      value.classList.remove("price-value__sun");
    });

    localStorage.setItem("theme", "default");
  };

  buttonIcons.addEventListener("click", () => {
    if (buttonIcons.classList.contains("button-icons")) {
      applySunTheme();
    } else if (buttonIcons.classList.contains("button-sun")) {
      applyDefaultTheme();
    }
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "sun") {
    applySunTheme();
  } else {
    applyDefaultTheme();
  }
}
