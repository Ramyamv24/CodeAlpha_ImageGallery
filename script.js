const galleryData = [
  {
    id: 1,
    title: "Misty Mountain Lake",
    category: "nature",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Misty lake surrounded by evergreen mountains"
  },
  {
    id: 2,
    title: "Forest Sun Trail",
    category: "nature",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlight shining through a green forest trail"
  },
  {
    id: 3,
    title: "Golden Desert Ridge",
    category: "nature",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm sunlight across a quiet natural landscape"
  },
  {
    id: 4,
    title: "Ocean Cliffside",
    category: "nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Blue ocean waves beside a soft sandy shore"
  },
  {
    id: 5,
    title: "Wild Red Fox",
    category: "animals",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80",
    alt: "Red fox looking through grass"
  },
  {
    id: 6,
    title: "Majestic Lion",
    category: "animals",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    alt: "Lion resting in warm grass"
  },
  {
    id: 7,
    title: "Colorful Macaw",
    category: "animals",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright macaw bird perched on a branch"
  },
  {
    id: 8,
    title: "Gentle Sea Turtle",
    category: "animals",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    alt: "Sea turtle swimming underwater"
  },
  {
    id: 9,
    title: "Glass City Tower",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern glass skyscraper against the sky"
  },
  {
    id: 10,
    title: "Minimal Interior",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant modern interior with soft daylight"
  },
  {
    id: 11,
    title: "Historic Stone Bridge",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural exterior with geometric building details"
  },
  {
    id: 12,
    title: "Urban Geometry",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Stylish building facade with strong geometric lines"
  },
  {
    id: 13,
    title: "Paris Morning",
    category: "travel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWMCLaQq8Fwpsc_QU3xbhJp79CyR2rR8f20m3CNu9XQ&s=10",
    alt: "Eiffel Tower in Paris under a bright sky"
  },
  {
    id: 14,
    title: "Venice Canal",
    category: "travel",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=80",
    alt: "Canal view with boats and old buildings"
  },
  {
    id: 15,
    title: "Coastal Escape",
    category: "travel",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Beautiful travel landscape beside calm water"
  },
  {
    id: 16,
    title: "Santorini Steps",
    category: "travel",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    alt: "White buildings and blue sea in Santorini"
  }
];


const dom = {
  grid: document.querySelector("#gallery-grid"),
  filters: document.querySelectorAll(".filter-button"),
  search: document.querySelector("#search-input"),
  imageCount: document.querySelector("#image-count"),
  emptyState: document.querySelector("#empty-state"),
  shuffleButton: document.querySelector("#shuffle-button"),
  themeToggle: document.querySelector("#theme-toggle"),
  themeIcon: document.querySelector(".theme-icon"),
  lightbox: document.querySelector("#lightbox"),
  backdrop: document.querySelector("#lightbox-backdrop"),
  closeButton: document.querySelector("#close-button"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
  downloadButton: document.querySelector("#download-button"),
  lightboxImage: document.querySelector("#lightbox-image"),
  lightboxTitle: document.querySelector("#lightbox-title"),
  lightboxCategory: document.querySelector("#lightbox-category"),
  lightboxCounter: document.querySelector("#lightbox-counter")
};


const state = {
  items: [...galleryData],
  filteredItems: [...galleryData],
  activeFilter: "all",
  searchTerm: "",
  currentIndex: 0,
  favorites: loadFavorites()
};


const icons = {
  moon: '<svg viewBox="0 0 24 24" role="img"><path d="M21 13.1A8.5 8.5 0 0 1 10.9 3a7 7 0 1 0 10.1 10.1Z"></path></svg>',
  sun: '<svg viewBox="0 0 24 24" role="img"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>',
  heart: '<svg viewBox="0 0 24 24" role="img"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"></path></svg>'
};

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem("modern-gallery-favorites")) || [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem("modern-gallery-favorites", JSON.stringify(state.favorites));
}


function filterItems() {
  const query = state.searchTerm.trim().toLowerCase();

  state.filteredItems = state.items.filter((item) => {
    const matchesCategory = state.activeFilter === "all" || item.category === state.activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}


function renderGallery() {
  filterItems();
  dom.grid.innerHTML = "";
  dom.emptyState.hidden = state.filteredItems.length > 0;
  dom.imageCount.textContent = `${state.filteredItems.length} image${state.filteredItems.length === 1 ? "" : "s"}`;

  const fragment = document.createDocumentFragment();

  state.filteredItems.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.style.animationDelay = `${Math.min(index * 60, 420)}ms`;

    const isFavorite = state.favorites.includes(item.id);
    card.innerHTML = `
      <div class="image-wrap">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
      </div>
      <button class="favorite-button ${isFavorite ? "active" : ""}" type="button" aria-label="Add ${item.title} to favorites">
        ${icons.heart}
      </button>
      <div class="card-content">
        <span class="category-pill">${item.category}</span>
        <h2>${item.title}</h2>
      </div>
    `;

    const image = card.querySelector("img");
    const favoriteButton = card.querySelector(".favorite-button");

    image.addEventListener("load", () => image.classList.add("loaded"));
    if (image.complete) image.classList.add("loaded");

    favoriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(item.id, favoriteButton);
    });

    card.addEventListener("click", () => openLightbox(index));
    fragment.appendChild(card);
  });

  dom.grid.appendChild(fragment);
}

function toggleFavorite(id, button) {
  const isFavorite = state.favorites.includes(id);
  state.favorites = isFavorite
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.favorites, id];

  button.classList.toggle("active", !isFavorite);
  saveFavorites();
}

function setFilter(category) {
  state.activeFilter = category;
  dom.filters.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
  renderGallery();
}

function shuffleGallery() {
  state.items = [...state.items].sort(() => Math.random() - 0.5);
  renderGallery();
}


function openLightbox(index) {
  if (!state.filteredItems.length) return;

  state.currentIndex = index;
  updateLightbox();
  dom.lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  dom.lightbox.hidden = true;
  document.body.style.overflow = "";
}


function updateLightbox() {
  const item = state.filteredItems[state.currentIndex];
  dom.lightboxImage.style.animation = "none";
  dom.lightboxImage.offsetHeight;
  dom.lightboxImage.style.animation = "";
  dom.lightboxImage.src = item.image;
  dom.lightboxImage.alt = item.alt;
  dom.lightboxTitle.textContent = item.title;
  dom.lightboxCategory.textContent = item.category;
  dom.lightboxCounter.textContent = `${state.currentIndex + 1} / ${state.filteredItems.length}`;
}

function showPrevious() {
  state.currentIndex = (state.currentIndex - 1 + state.filteredItems.length) % state.filteredItems.length;
  updateLightbox();
}

function showNext() {
  state.currentIndex = (state.currentIndex + 1) % state.filteredItems.length;
  updateLightbox();
}

function downloadCurrentImage() {
  const item = state.filteredItems[state.currentIndex];
  const link = document.createElement("a");
  link.href = item.image;
  link.download = `${item.title.toLowerCase().replaceAll(" ", "-")}.jpg`;
  link.target = "_blank";
  link.rel = "noopener";
  link.click();
}


function toggleTheme() {
  const html = document.documentElement;
  const nextTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = nextTheme;
  dom.themeIcon.innerHTML = nextTheme === "dark" ? icons.sun : icons.moon;
  localStorage.setItem("modern-gallery-theme", nextTheme);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("modern-gallery-theme") || "light";
  document.documentElement.dataset.theme = savedTheme;
  dom.themeIcon.innerHTML = savedTheme === "dark" ? icons.sun : icons.moon;
}

dom.filters.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

dom.search.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderGallery();
});

dom.shuffleButton.addEventListener("click", shuffleGallery);
dom.themeToggle.addEventListener("click", toggleTheme);
dom.closeButton.addEventListener("click", closeLightbox);
dom.backdrop.addEventListener("click", closeLightbox);
dom.prevButton.addEventListener("click", showPrevious);
dom.nextButton.addEventListener("click", showNext);
dom.downloadButton.addEventListener("click", downloadCurrentImage);

document.addEventListener("keydown", (event) => {
  if (dom.lightbox.hidden) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPrevious();
  if (event.key === "ArrowRight") showNext();
});

applySavedTheme();
renderGallery();
