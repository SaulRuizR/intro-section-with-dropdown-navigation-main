const hambuerIcon =document.querySelector('.nav__hamburguesa');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;
let flecha1 = document.querySelector('.nav__arrow1');
let flecha2 = document.querySelector('.nav__arrow2');

hambuerIcon.addEventListener('click', ()=>{
    hambuerIcon.classList.toggle('nav__hamburguesa--open');
    navOverlay.classList.toggle('nav__overlay--show');
})

flecha1.addEventListener('click', () =>{
    flecha1.classList.toggle('nav__arrow--giro');
})
flecha2.addEventListener('click', () =>{
    flecha2.classList.toggle('nav__arrow--giro');
})

navOverlay.addEventListener('click',(e)=>{
    e.preventDefault();
    const currentElement = e.target;
 
    
    if( isActive(currentElement, 'nav__parent')){
        const subMenu = currentElement.parentElement.children[1];
        if(window.innerHeight < 768){
            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${height}px`;
        }else{
            if(!isActive(subMenu, 'nav__inner--show')){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');

            currentDropdown = subMenu;
        }
        
    }
})

function isActive(element, string){
    return element.classList.value.includes(string);
}
function closeDropdown(currentDropdown){
    if(isActive(currentDropdown, 'nav__inner--show')){
        currentDropdown.classList.remove('nav__inner--show');
    }
}

window.addEventListener('resize', ()=>{
    closeDropdown(currentDropdown);
    if(window.innerHeight > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner => {
            navInner.style.height='';
            
        });
    }
})