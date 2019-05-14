// Your code goes here

const navLinks =  document.querySelectorAll('.nav-link')

navLinks.forEach(link => link.onmouseover = ()=>{
    link.style.color ='white';
    link.style.backgroundColor='teal';
    link.style.width= '25%';
    link.style.height ='3rem';
    link.style.padding = '0.5rem';
    link.style.textAlign = 'center';
    link.style.margin = '2px';
    link.style.boxShadow ='0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)'
})