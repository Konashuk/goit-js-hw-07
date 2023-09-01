import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.addEventListener("click", openMadalWindow);

function createMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false;">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

function openMadalWindow(event) {
  const originalImg = event.target.dataset.source;
  const descriptionImg = event.target.alt;
  if (event.currentTarget === event.target) {
    return;
  }
  function pressEsc(ev) {
    if (ev.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", pressEsc);
    }
  }

  const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600" alt="${descriptionImg}">
`);
  console.log(`You open: ${descriptionImg}`);
  window.addEventListener("keydown", pressEsc);

  instance.show();
}
