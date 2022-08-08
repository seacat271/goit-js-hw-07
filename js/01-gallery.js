import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");


const createGalleryMarkup = galleryItems.map(({preview, original, description}) => {
return `<div class="gallery__item"><a class = "gallery__link" href="${original}"><img class ="gallery__image lazyload" data-src="${preview}" data-source="${original}" alt="${description}" loading="lazy"></a></div>`
}).join("")

galleryContainer.innerHTML = createGalleryMarkup;

if ("loading" in HTMLImageElement.prototype){
    const lazyImages = document.querySelectorAll(".gallery__image")
    console.log(lazyImages)
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
const scriptLazyLib = document.createElement("script");
scriptLazyLib.src = src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
scriptLazyLib.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
scriptLazyLib.crossOrigin = "anonymous";
scriptLazyLib.referrerPolicy = "no-referrer";
}

galleryContainer.addEventListener("click", onClickGalleryItem);

let modalWindow;

function createModalWindow(url) {
 modalWindow = basicLightbox.create(`<img src=${url}>`)
}

function callbackForEvent(event) {onPressToEscape(modalWindow)} 

function onClickGalleryItem (event) {
        event.preventDefault()
        if (event.target.nodeName !== "IMG") {return}
        createModalWindow(event.target.dataset.source)
        modalWindow.show(window.addEventListener("keydown", callbackForEvent));     
}

function onPressToEscape(closedEl) {
    if (event.code !== "Escape") {return}
        closedEl.close(window.removeEventListener("keydown", callbackForEvent))
}



console.log(galleryItems);


