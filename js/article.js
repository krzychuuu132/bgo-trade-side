
const gates = document.querySelectorAll('.article__gate');

document.addEventListener('scroll',()=>{

const scrollY = window.scrollY /3;

if(scrollY < 400){

    const device_width = window.innerWidth < 1200 ? 300: 170;
gates[0].style.transform = `translateY(270px) translateX(${scrollY +device_width}px)`;
gates[1].style.transform = `translateY(270px) translateX(${scrollY *-1 -device_width}px)`;
}

})