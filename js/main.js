// Galereyaga talablar:
// - ixtiyoriy sondagi rasmlardan tashkil topgan rasmlar ro'yxati - ✅
// - har bir rasm bosilganda o'sha rasmning katta hajmdagisi va kichik rasmga data- bilan bog'langan description modalda ko'rinadi
// Rasmlarni topamiz
const elsGalleryImg = document.querySelectorAll('.gallery__img');

const elModal = document.querySelector('.modal');
const elModalImg = document.querySelector('.modal__img');
const elModalCaption = document.querySelector('.modal__caption');
const elModalPrevBtn = document.querySelector('.modal__prev-btn');
const elModalNextBtn = document.querySelector('.modal__next-btn');

function openModal() {
  elModal.classList.add('modal--open');
}

function closeModal() {
  elModal.classList.remove('modal--open');
}

function onGalleryImgClick(evt) {
  openModal();
  elModalImg.src = evt.target.dataset.largeImg;
  elModalCaption.textContent = evt.target.dataset.imgDescription;
}

function goToPrevImg() {
  const currentImg = Array.from(elsGalleryImg).find(item => item.dataset.largeImg === elModalImg.src);
  const prevImg = currentImg.previousElementSibling;
  if (prevImg) {
    elModalImg.src = prevImg.dataset.largeImg;
    elModalCaption.textContent = prevImg.dataset.imgDescription;
  }
}

function goToNextImg() {
  const currentImg = Array.from(elsGalleryImg).find(item => item.dataset.largeImg === elModalImg.src);
  const nextImg = currentImg.nextElementSibling;
  if (nextImg) {
    elModalImg.src = nextImg.dataset.largeImg;
    elModalCaption.textContent = nextImg.dataset.imgDescription;
  }
}

elsGalleryImg.forEach(elGalleryImg => {
  elGalleryImg.addEventListener('click', onGalleryImgClick);
});


window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' || e.code === 'KeyX')
    closeModal();
  if (e.code === 'ArrowLeft')
    goToPrevImg();
  if (e.code === 'ArrowRight')
    goToNextImg();
})

elModalPrevBtn.addEventListener('click', goToPrevImg)
elModalNextBtn.addEventListener('click', goToNextImg)

    // Bosilgan rasmning infosini modalga joylaymiz
  // - modalni modal pardasi, Esc va X tugmasini bosish bilan yopish mumkin
  // - modal ochiqligida oldingi va keyingi rasmlarga shunga mos yaratilgan tugmalarni va klaviaturadagi Chap va O'ng strelkalarni bosish bilan o'tish mumkin