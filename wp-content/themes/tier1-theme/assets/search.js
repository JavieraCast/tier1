document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchOverlay = document.querySelector(".search-overlay");
    const closeSearch = document.querySelector(".close-search");

    searchIcon.addEventListener("click", function () {
        searchOverlay.classList.add("active");
    });

    closeSearch.addEventListener("click", function () {
        searchOverlay.classList.remove("active");
    });

    // Cerrar con tecla ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            searchOverlay.classList.remove("active");
        }
    });
});
