let intro = document.querySelector('.intro');
let mark = document.querySelector('.Mark-header');
let MarkSpan = document.querySelectorAll('.Mark');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        MarkSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)*400)
        });

        setTimeout(()=>{
            MarkSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1)* 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh';;
        }, 2300);
    })
})