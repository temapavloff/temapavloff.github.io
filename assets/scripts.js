const imgsToLoad = Array.from(document.querySelectorAll('.js-img'))

const loadImg = img => {
    const loader = new Image();
    loader.onload = () => {
        img.classList.remove('blur')
        img.src = loader.src;
    }
    loader.src = img.dataset.src;
}

for (const i of imgsToLoad) {
    loadImg(i)
}
