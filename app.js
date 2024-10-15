let lists = [...document.getElementsByTagName("li")];
let images = [...document.getElementsByTagName("img")];

lists.map(list => {
    list.addEventListener("click", () => {
        images.map(image => {
            image.style.display = "none"
            if(list.textContent.toLowerCase() == image.getAttribute("data-filter").toLowerCase() || list.textContent == "All"){
                image.style.display = "block"
            }
        })
    });
});