// Создание и рендер разметки по массиву данных galleryItems
//  и предоставленному шаблону элемента галереи.
// Реализация делегирования на ul.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на
// минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.Для этого
// ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.
//  Используй готовую разметку модального окна
//   с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";

const ulGallery = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
                <img class="gallery__image"
                    src="${item.preview}" 
                    data-source="${item.original}" 
                    alt="${item.description}"/>
        </li>`
    )
    .join("");
}

ulGallery.innerHTML = createGallery(galleryItems);

ulGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.dataset);
  console.log(event.target.dataset.source);
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
}
