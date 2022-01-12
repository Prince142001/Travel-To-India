var backToTopBtn=document.getElementById("backToTopBtn");

window.onscroll=function() {scrollBtnDispFun()};

function scrollBtnDispFun(){
    if (document.documentElement.scrollTop>300 || document.body.scrollTop>300) {
        backToTopBtn.style.display="block";
    } else {
        backToTopBtn.style.display="none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}