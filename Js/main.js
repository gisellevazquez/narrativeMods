const btnswitch= document.querySelector('#switch');

btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');

    if(document.body.classList.contains ('darkmode')){
        localStorage.setItem('dark-mode', 'true');
    }
    else{
        localStorage.setItem('dark-mode', 'false');

    }
});
//comprobar darkmode
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('darkmode');
}
else {
    document.body.classList.remove('darkmode');
}

let galleryimg = document.querySelectorAll(".gridItem__productItem--smallimg")


if(galleryimg){
    galleryimg.forEach(function(image){
        image.onclick = function(){
               alert("Nada más que ver")
               
            }

    });
}

