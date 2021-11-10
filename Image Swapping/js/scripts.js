//      Andy Kolb           
//      Image Swapping      
//      scripts.js          
//      11/09/2021          


// Index for film array
var index = 0;

// Array of films and screenshot files
var films = [
    {
        'title' : 'Blade Runner 2049',
        'images' : ['bladerunner01.jpg','bladerunner02.jpg','bladerunner03.jpg','bladerunner04.jpg']
    },
    {
        'title' : 'Alien',
        'images' : ['alien01.jpg','alien02.jpg','alien03.jpg','alien04.jpg']
    },
    {
        'title' : 'The Empire Strikes Back',
        'images' : ['empire01.jpg','empire02.jpg','empire03.jpg','empire04.jpg']
    },
    {
        'title' : 'Twin Peaks: Fire Walk With Me',
        'images' : ['twinpeaks01.jpg','twinpeaks02.jpg','twinpeaks03.jpg','twinpeaks04.jpg']
    }
];

// Function that replaces large image
function swapImage(element) {
    var src = element.src;
    document.getElementById('imgLarge').src = src;
}

// Function that loads large image and thumbnails for film
function loadImages() {
    document.getElementById('filmTitle').innerText = films[index].title;
    document.getElementById('imgLarge').src = './images/' + films[index].images[0];
    for(var i=0; i<4; i++) {
        var thumb = 'thumb' + i;
        document.getElementById(thumb).src = './images/' + films[index].images[i];
    }
}

// On window load, load first array of images
window.onload = function() {
    loadImages()
}

// On doubleclick of large image, increment film index and load new images
document.getElementById("imgLarge").addEventListener("dblclick", function () {
    index++;
    if(index >= films.length) { index = 0; }
    loadImages();
});

// Cycle through thumbnail images and add function to change large image
var thumbnails = document.getElementsByClassName("thumb");
for(var i=0; i<thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
        swapImage(this);
    });
}