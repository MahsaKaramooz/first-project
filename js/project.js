let caret = document.getElementById('caret')
caret.addEventListener('click' , ()=>{
    caret.lastElementChild.classList.toggle('fa-angle-down')
    caret.lastElementChild.classList.toggle('fa-angle-up')

})