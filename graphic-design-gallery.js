const galleryItems = [
  {
    src: "./assets/WiCS First Meeting 26.png",
    alt: "Women in Computer Science first meeting poster",
  },
  {
    src: "./assets/Career & Internship Fair '26 (big poster).png",
    alt: "Career and Internship Fair poster",
  },
  {
    src: "./assets/LeetCode Night.png",
    alt: "LeetCode Night event poster",
  },
  {
    src: "./assets/Valentines dya post.png",
    alt: "Valentine's Day graphic for Women in Computer Science",
  },
  {
    src: "./assets/TFA Ignite Applications '26.png",
    alt: "Teach For America Ignite Fellowship applications poster",
  },
  {
    src: "./assets/1.png",
    alt: "The MJ Companies information table poster",
  },
];

const gallery = document.querySelector(".graphic-carousel");
const previousSlide = gallery.querySelector(".gallery-slide--previous");
const currentSlide = gallery.querySelector(".gallery-slide--current");
const nextSlide = gallery.querySelector(".gallery-slide--next");
const galleryStatus = document.querySelector(".gallery-status");
let currentIndex = 0;

function updateGallery() {
  const previousIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
  const nextIndex = (currentIndex + 1) % galleryItems.length;

  const previousImage = previousSlide.querySelector("img");
  previousImage.src = galleryItems[previousIndex].src;
  previousImage.alt = galleryItems[previousIndex].alt;

  const currentImage = currentSlide.querySelector("img");
  currentImage.src = galleryItems[currentIndex].src;
  currentImage.alt = galleryItems[currentIndex].alt;

  const nextImage = nextSlide.querySelector("img");
  nextImage.src = galleryItems[nextIndex].src;
  nextImage.alt = galleryItems[nextIndex].alt;

  galleryStatus.textContent = `${currentIndex + 1} of ${galleryItems.length}`;
}

gallery.querySelector(".gallery-previous").addEventListener("click", () => {
  currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
  updateGallery();
});

gallery.querySelector(".gallery-next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateGallery();
});

updateGallery();
