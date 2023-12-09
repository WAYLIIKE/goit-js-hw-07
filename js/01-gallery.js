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
    img.dataset.source = original;
    img.alt = description;
    img.src = preview;
    a.append(img);
    li.append(a);
    return li;
  });
  galleryContainer.append(...markup);
}

galleryMarkup(galleryItems);

galleryContainer.addEventListener("click", handleLink);

function handleLink(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  //Finding clicked photo
  const currentPhoto = event.target.closest(".gallery__image");
  //Finding clicked photo value of data attribute
  const galleryElement = currentPhoto.dataset.source;
  //Getting current photo object
  const photo = galleryItems.find(
    ({ original }) => galleryElement === original
  );

  const instance = basicLightbox.create(`
          <img src="${photo.original}" alt="${photo.description}">
    `);

  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
