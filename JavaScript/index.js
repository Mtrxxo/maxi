let modal = document.querySelector('.modal');
let proceed = document.querySelector('.proceed');
let navigation = document.querySelector('ul')
let hamburgerICon = document.querySelector('.bars');
let closeIcon = document.querySelector('.xmark')

window.addEventListener('load', function(){
    modal.style.display = "flex"

    proceed.addEventListener('click', function(){
        modal.style.display = "none"
    })

    this.setTimeout(() => {
        modal.style.display = "none"
    }, 10000)
});

hamburgerICon.addEventListener('click', function(){
    navigation.style.display = "flex"
    closeIcon.style.display = "flex"
});

closeIcon.addEventListener('click', function(){
    navigation.style.display = "none"
    closeIcon.style.display = "none"
});