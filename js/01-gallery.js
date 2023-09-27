// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// console.log(galleryItems);

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
  image.dataset.source = item.largeImage;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

// Додавання елементів галереї до списку
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

// Обробник кліку на зображенні
galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(
      `<img src="${largeImageUrl}" alt="Large Image">`
    );

    instance.show();
  }
});
