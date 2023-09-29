import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
galleryContainer.append(...galleryMarkup);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
            <img src="${largeImageUrl}" width="800" height="600">
        `);

    instance.show();
  }
});

console.log(galleryItems);
