

const navigation__links = document.querySelectorAll('.navigation__link');

navigation__links.forEach((link) =>{
    
    link.addEventListener('click',()=>{

        navigation__links.forEach(link=>link.classList.remove('navigation__link--active'));
     
        link.classList.add('navigation__link--active');
    })
})