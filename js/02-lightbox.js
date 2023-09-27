import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = [
    {
      smallImage: "small-image1.jpg",
      largeImage: "large-image1.jpg",
      description: "Image 1 Description",
    },
    {
      smallImage: "small-image2.jpg",
      largeImage: "large-image2.jpg",
      description: "Image 2 Description",
    },
    // Додайте інші елементи галереї за аналогією
  ];

  const galleryList = document.querySelector(".gallery");

  // Функція для створення розмітки елемента галереї
  function createGalleryItem(item) {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.largeImage;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.smallImage;
    image.alt = item.description;

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
  }

  // Додавання елементів галереї до списку
  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    galleryList.appendChild(galleryItem);
  });

  // Ініціалізація SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250, // Затримка перед відображенням підпису
  });
});
