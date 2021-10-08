const nav = document.querySelector('.nav')
const btn = document.querySelector('.btn')
const close = document.querySelector('.close')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

close.addEventListener('click', () => {
    setTimeout(() => {
        nav.classList.toggle('active')
    }, 600);
})