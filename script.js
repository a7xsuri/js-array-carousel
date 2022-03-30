const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
let currentIndex = 0;
const slideArray = document.getElementsByClassName("slide");
const up = document.getElementById("up");
const down = document.getElementById("down");
console.log(currentIndex)
console.log(slideArray[0])
up.addEventListener("click", function () {
    if (currentIndex == 0) {
        slideArray[currentIndex].classList.remove("active");
        currentIndex = 4
        slideArray[currentIndex].classList.add("active")
    }
    else {
        slideArray[currentIndex].classList.remove("active");
        currentIndex = currentIndex - 1;
        slideArray[currentIndex].classList.add("active")
    }
})

down.addEventListener("click", function () {
    if (currentIndex == 4) {
        slideArray[currentIndex].classList.remove("active");
        currentIndex = 0
        slideArray[currentIndex].classList.add("active")
    }
    else {
        slideArray[currentIndex].classList.remove("active");
        currentIndex += 1;
        slideArray[currentIndex].classList.add("active")
    }
})