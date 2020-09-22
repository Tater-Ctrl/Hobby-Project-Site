let menuSwitch = false;

window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        document.getElementById("logo").style.maxHeight = "50px";
        document.querySelector("nav").style.maxHeight = "70px";
    } else {
        document.getElementById("logo").style.maxHeight = "65px";
        document.querySelector("nav").style.maxHeight = "100px";
    }
})

const backToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener("resize", function() {
    if(window.innerWidth > 767 && menuSwitch === true) {
        menuSwitch = false;
        openMenu();
        burgerButton();
    }
})

const funcMenuSwitch = () => {
    menuSwitch = !menuSwitch;
    openMenu();
    burgerButton();
}

const openMenu = () => {
    if(menuSwitch) {
        document.getElementById("menu").style.left = '0';
    } else {
        document.getElementById("menu").style.left = '270px';
    }
    
}

const burgerButton = () => {
    if(menuSwitch) {
        document.getElementById('burger1').style.transform = 'rotateZ(45deg)';
        document.getElementById('burger1').style.top = '10px';
        document.getElementById('burger3').style.bottom = '10px';
        document.getElementById('burger2').style.left = '-35px';
        document.getElementById('burger3').style.transform = 'rotateZ(-45deg)';
    } else {
        document.getElementById('burger1').style.transform = 'rotateZ(0deg)';
        document.getElementById('burger1').style.top = '0';
        document.getElementById('burger2').style.left = '0';
        document.getElementById('burger3').style.transform = 'rotateZ(0)';
        document.getElementById('burger3').style.bottom = '0';
    }
}