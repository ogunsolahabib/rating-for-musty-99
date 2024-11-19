// const ratingItem1 = document.querySelector('.rating-item--1');
// const ratingItem2 = document.querySelector('.rating-item--2');

// ratingItem1.addEventListener("click", function () {

//     // // check current active item and remove active class
//     // Old way of doing it
//     // if (ratingItem1.classList.contains('active')) {
//     //     // check current active item and remove active class
//     //     ratingItem1.classList.remove('active');

//     // }
//     // New way of doing it
//     document.querySelector('.active')?.classList.remove('active');

//     // change the color by adding the active class
//     ratingItem1.classList.add('active');

//     // change color of submit button
//     document.querySelector('#submit').classList.add('active');
// })

// ratingItem2.addEventListener("click", function () {
//     // check current active item and remove active class
//     document.querySelector('.active').classList.remove('active');

//     // change the color by adding the active class
//     ratingItem2.classList.add('active');

//     // change color of submit button
//     document.querySelector('#submit').classList.add('active');
// })

let isSubmitActive=false;




function activateItem(number) {

    const ratingItem = document.querySelector('.rating-item--' + number);


    // // check current active item and remove active class
    // Old way of doing it
    // if (ratingItem1.classList.contains('active')) {
    //     // check current active item and remove active class
    //     ratingItem1.classList.remove('active');

    // }
    // New way of doing it
    document.querySelector('.active')?.classList.remove('active');


    // change the color by adding the active class
    ratingItem.classList.add('active');

    // change color of submit button
    document.querySelector('#submit').classList.add('active');
    document.querySelector('#submit').disabled = false;

    isSubmitActive=true;

    document.querySelector(".selection").textContent = number;




}

function handleSubmitClick(){
    // check if submit button is active
    if(isSubmitActive){
         // 1. hide ratings selection
    document.querySelector('.ratings-wrapper').style.display = "none";

    // 2. show thank you
    document.querySelector('.success').style.display = "flex"
    }
   
   
}
