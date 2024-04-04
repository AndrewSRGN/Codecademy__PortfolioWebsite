let ProcessCards =document.getElementsByClassName('process__card');
let ProcessCardTitle = document.getElementsByClassName('process__card-title');

for (let i = 0; i < ProcessCards.length; i++) {
    let text = ProcessCardTitle[i].innerHTML;
    ProcessCardTitle[i].innerHTML = i+1 + '. ' + text;

    if (i % 2 === 0)  {
        ProcessCards[i].style.top = '-2em';
    }
}

let TestimonialsPosition = document.getElementsByClassName('testimonials__card-position');

for (let i = 0; i < TestimonialsPosition.length; i++) {
    let text = TestimonialsPosition[i].innerHTML;
    TestimonialsPosition[i].innerHTML = '[' + text + ']';
}