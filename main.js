const progress = document.querySelector('.progress');
console.log(progress);


window.addEventListener('scroll', progressBar);

function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll/windowHeight*100;
    console.log(per);
    progress.style.width = per +'%';

}