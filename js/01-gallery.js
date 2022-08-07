import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

const createGalleryMarkup = galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item"><a class = "gallery__link" href="${original}"><img class ="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`
}).join("")
// console.log(galleryMarkup)

galleryContainer.innerHTML = createGalleryMarkup;
galleryContainer.addEventListener("click", onClickGalleryItem)
window.addEventListener("keydown", onPressToEscape)

function onClickGalleryItem (event) {
        event.preventDefault()
        if (event.target.nodeName !== "IMG") {return}
        const modalWindow = basicLightbox.create(`<img src=${event.target.dataset.source}>`)
        modalWindow.show();
        console.log(modalWindow.visible())  
        window.addEventListener("keydown", onPressToEscape)
        function onPressToEscape(event) {
            if (event.code !== "Escape") {return}
            if (modalWindow.visible()){
                modalWindow.close()
            }
        }

}

console.log(galleryItems);
