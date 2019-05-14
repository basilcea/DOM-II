// Your code goes here

const navLinks =  document.querySelectorAll('.nav-link')

navLinks.forEach(link => link.onmouseover = ()=>{
    link.style.height='3rem';
    link.style.width='25%';
    link.style.margin = '2px';
    link.style.textAlign = 'center';
    link.style.color ='white';
    link.style.backgroundColor='teal';
    link.style.padding = '0.8rem';
    link.style.boxShadow ='0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)'
})
navLinks.forEach(link => link.onmouseout = ()=>{
    link.style='';
})

let header = document.getElementsByClassName('intro')[0]
let headerImage = header.querySelector('img')
window.onload =() =>{
    headerImage.style.animationName ='moveHeader';
    headerImage.style.animationDuration='5s';
}
const fullhead =document.querySelector('.main-navigation')
window.onscroll =()=>{
    fullhead.style.backgroundColor ='gainsboro';
    fullhead.style.color='teal';
    navLinks.forEach(link => link.style.color ='black')
    if(window.pageYOffset=== 0){
        fullhead.style ='';
        navLinks.forEach(link => link.style.color ='')
    }
}
let lastSection = document.getElementsByClassName('content-destination')[0]
let lastImage =lastSection.querySelector('img')
lastImage.setAttribute('tabindex',0);

lastImage.onfocus = () =>{
    lastImage.src ='../img/images.jpeg'
    lastImage.style.width='100%';
    lastImage.style.height='200px';
    lastImage.style.outline ='none';
}
lastImage.onblur =()=>{
    lastImage.src='../img/destination.jpg';
    lastImage.style='';
}
let images = document.querySelectorAll('img')

images.forEach(imageDiv=>imageDiv.ondrag =()=>{
    imageDiv.style.opacity ='0'
})
let signup = document.querySelectorAll('.btn')
signup.forEach((signupButton,index) => signupButton.ondblclick = ()=>{
 const h4 = document.querySelectorAll('.destination')[index].querySelector('h4')
 console.log(h4)
 h4.style.fontFamily='Arial';
 h4.style.color= 'green';
})
window.onresize =()=>{
   console.log('You have resized window')
}