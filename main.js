const  prevBtn = document.querySelector('.btn__prev');
const  nextBtn = document.querySelector('.btn__next');
const  testimonials = document.querySelectorAll('.testimonial');
let curridx = 0;
function reset(){
    if(curridx < 0 || curridx > testimonials.length){
        curridx = testimonials.length -1;
    }
    if(curridx > testimonials.length - 1){
        curridx = 0;
    }
    testimonials.forEach((el)=>{
        el.classList.add('hide');
        el.classList.remove('show');
    })
}
function showEl(){
    testimonials[curridx].classList.remove('hide');
    testimonials[curridx].classList.add('show');
}
function showNextTestimonial(){
    reset();
    curridx++;
    reset();
    showEl()
}
function showPreviousTestimonial(){
    reset();
    curridx--;
    reset();
    showEl();
}

prevBtn.addEventListener('click', showPreviousTestimonial);
nextBtn.addEventListener('click', showNextTestimonial);


