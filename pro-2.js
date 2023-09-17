// const modals = document.querySelector(".modal");
// const Overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModal = document.querySelectorAll(".show-modal");

// btnOpenModal.addEventListener("click",function(){
//   modals.classList.remove("hidden");
//   Overlay.classList.remove("hidden");
// });

// // for (let i = 0; i < btnOpenModal.length; i++) {
// //   btnOpenModal[i].addEventListener("click", function () {
// //     modals.classList.remove("hidden");
// //     Overlay.classList.remove("hidden");
// //   });
// // }


// let CloseModal = function () {
//   modals.classList.add("hidden");
//   Overlay.classList.add("hidden");
// };

// Overlay.addEventListener("click", CloseModal);
// btnCloseModal.addEventListener("click", CloseModal);



const show1=document.querySelector('.show-modal1');
const show2=document.querySelector('.show-modal2');
const show3=document.querySelector('.show-modal3');
const modal1=document.querySelector('.modal1');
const modal2=document.querySelector('.modal2');
const modal3=document.querySelector('.modal3');
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnCloseModal3 = document.querySelector(".close-modal3");

const over=document.querySelector('.overlay');
console.log(show2);
console.log(modal1);
console.log(modal2);
console.log(modal3);

// modal1, modal2, modal3
show1.addEventListener('click',function(){
  modal1.classList.remove('hidden');
  over.classList.remove('hidden');
    
})

show2.addEventListener('click',function(){
  modal2.classList.remove('hidden');
  over.classList.remove('hidden');
})

show3.addEventListener('click',function(){
  modal3.classList.remove('hidden');
  over.classList.remove('hidden');
})

// close-model
let c=function(){
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    over.classList.add('hidden');
}
btnCloseModal1.addEventListener('click',c);
btnCloseModal2.addEventListener('click',c);
btnCloseModal3.addEventListener('click',c);

over.addEventListener('click',c);