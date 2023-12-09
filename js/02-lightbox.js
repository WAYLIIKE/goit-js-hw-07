import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function galleryMarkup(arr) {
  const markup = arr.map(({ original, preview, description }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    li.classList.add("gallery__item");
    a.classList.add("gallery__link");
    a.href = original;
    img.classList.add("gallery__image");
    img.alt = description;
    img.src = preview;
    a.append(img);
    li.append(a);
    return li;
  });
  galleryContainer.append(...markup);
}

galleryMarkup(galleryItems);

let lightBox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
