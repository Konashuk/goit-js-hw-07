import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryEl = document.querySelector(".gallery");
const markup = createMarkup();
galeryEl.insertAdjacentHTML("beforeend", markup);
function createMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: `alt`,
});
