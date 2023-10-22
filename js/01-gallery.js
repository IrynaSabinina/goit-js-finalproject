import { galleryItems } from './gallery-items.js';

// Додатковий імпорт стилів


const galleryRef = document.querySelector('.gallery');

const itemsMarkup = createGalleryItemsMarkup(galleryItems);


galleryRef.insertAdjacentHTML('afterbegin', itemsMarkup);
galleryRef.addEventListener("click", handlerClick);

function createGalleryItemsMarkup(items){
return items.map(({ preview, description, original }) => {
    return `<li class="gallery__item">
    <a  class="gallery__link" href=${original}>
      <img  class="gallery__image" src=${preview} alt=${description} data-source=${original}/>
    </a>
    </li>`;
  }).join(' ');

} 


const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function handlerClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  // console.log(datasetSource)
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}




/////////// Var 2 forbidden ... why?/////////////////
// function handlerClick(evt) {
//   evt.preventDefault()
//   if (evt.currentTarget === evt.target) {
//     return;
//   }
//   const currentImage = evt.target.closest(".gallery__image");
//   const imageHref = String(currentImage.dataset.source);
//   const image = galleryItems.find(({ original }) => original === imageHref);
  
//   // createModal(image);
//   const instance = basicLightbox.create(`
  
//   <img src="${imageHref}" />
  
//   `);
//   console.log(imageHref)

//   instance.show();

// }



// console.log(galleryItems);
