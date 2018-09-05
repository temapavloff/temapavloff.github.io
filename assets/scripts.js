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

const cover = document.querySelector('.js-cover');

if (cover) {
    const loader = new Image();
    loader.onload = () => {
        cover.classList.remove('blur');
        cover.style.backgroundImage = `url(${loader.src})`;
    };
    loader.src = cover.dataset.cover;
}
