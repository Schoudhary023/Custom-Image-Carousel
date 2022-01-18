import styles from "../Css/Image.module.css";
let slideIndex=0;
let timeOut;
export const resetTimeout = ()=>{
    if(timeOut) {
        clearTimeout(timeOut);
    }
}

export const changeImageAutomatically = (direction,duration) => {

    let i;
    let slides = document.getElementsByClassName(`${styles.Containers}`);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length-1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length-1;
    }
    slides[slideIndex].style.display = "block";
    if(direction==='Forward') {
        slideIndex++;
    }
    if(direction === 'Reverse'){
        slideIndex--;
    }
    timeOut = setTimeout(() => {
        changeImageAutomatically(direction,duration)
    }, duration * 1000);
}

export const changeImageOnClickHandler = (dir, direction, duration) => {
    if (timeOut) {
        clearTimeout(timeOut);
    }
    let i;
    let n;
    if (dir === 'for') {
        n = slideIndex + 1;
        slideIndex = slideIndex + 1;
    } else if (dir === 'rev') {
        n = slideIndex - 1;
        slideIndex = (slideIndex - 1);
    } else {
        n = slideIndex;
    }
    let slides = document.getElementsByClassName(`${styles.Containers}`);
    if (n > slides.length-1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = (slides.length)-1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    timeOut = setTimeout(() => {
        changeImageAutomatically(direction,duration);
    }, duration*1000);
}