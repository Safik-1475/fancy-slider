
const images = [
    './images/slider1.jpg',
    './images/slider2.jpg',
    './images/slider3.jpg',
    './images/slider4.jpg',
    './images/slider5.jpg',
    './images/slider6.jpg',
    './images/slider7.jpg',
    './images/slider8.jpg',
    './images/slider9.jpg',
    './images/slider10.jpg'
];

let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    sliderImg.setAttribute('src', imgUrl)
    imgIndex++
}, 1500)