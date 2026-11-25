const galleryItems = [
  {
    src: "./assets/WiCS First Meeting 26.png",
    alt: "Women in Computer Science first meeting poster",
    title: "Women in Computer Science — First Meeting",
    description: "Event poster created for a Women in Computer Science first meeting.",
  },
  {
    src: "./assets/Career & Internship Fair '26 (big poster).png",
    alt: "Career and Internship Fair poster",
    title: "Career & Internship Fair",
    description: "Promotional poster for the Career & Internship Fair.",
  },
  {
    src: "./assets/Valentines dya post.png",
    alt: "Valentine's Day graphic for Women in Computer Science",
    title: "Valentine's Day",
    description: "Seasonal social media graphic created for Women in Computer Science.",
  },
  {
    src: "./assets/TFA Ignite Applications '26.png",
    alt: "Teach For America Ignite Fellowship applications poster",
    title: "Teach For America Ignite Fellowship",
    description: "Promotional poster advertising Teach For America Ignite Fellowship applications.",
  },
];

const gallery = document.querySelector(".graphic-carousel");
const galleryImage = gallery.querySelector("#gallery-image");
const galleryTitle = gallery.querySelector("#gallery-title");
const galleryDescription = gallery.querySelector("#gallery-description");
const galleryStatus = gallery.querySelector(".gallery-status");
let currentIndex = 0;

function updateGallery() {
  const item = galleryItems[currentIndex];
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryTitle.textContent = item.title;
  galleryDescription.textContent = item.description;
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

gallery.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
    updateGallery();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateGallery();
  }
});

let touchStartX = null;
gallery.querySelector(".graphic-carousel-stage").addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

gallery.querySelector(".graphic-carousel-stage").addEventListener("touchend", (event) => {
  if (touchStartX === null) {
    return;
  }

  const touchDistance = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;

  if (Math.abs(touchDistance) < 50) {
    return;
  }

  currentIndex = (currentIndex + (touchDistance < 0 ? 1 : -1) + galleryItems.length) % galleryItems.length;
  updateGallery();
}, { passive: true });

updateGallery();
