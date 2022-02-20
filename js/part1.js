 //Часть Первая

 //Задание 1
 setTimeout(() => {
   let greeting = document.querySelector('#greeting');
   greeting.textContent = 'Привет Виталий Валентинович!';
 }, 2000);

 //Задание 2
setTimeout(() => {
  let goYellowDiv = document.querySelector('#essentials');
  let goYellow2 = goYellowDiv.children[0];

  for(let i = 0; i < goYellow2.children.length; i++) {
    let liChild = goYellow2.children[i];
    liChild.style.backgroundColor = 'yellow';
  }
}, 2000);

//Задание 3
setTimeout(() => {
  let newImage = document.createElement('img');
  let newBr = document.createElement('br');
  newImage.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
  let greeting = document.querySelector('#greeting');
  greeting.appendChild(newBr);
  greeting.appendChild(newImage);
}, 2000);

//Задание 4
setTimeout(() => {
  let newUl = document.createElement('ul');
  newUl.setAttribute('class', 'todo-items');
  let querrysel = document.querySelector('body');
  querrysel.appendChild(newUl);
}, 2000);

//Задание 5
let liTagArray = [];
setTimeout(() => {
  let liarray = ['приготовить кофе', 'съесть салатик', 'поменять подгузник ребёнку', 'поехать на работу'];
  for (let i = 0; i < liarray.length; i++) {
    let newLi = document.createElement('li');
    newLi.textContent = liarray[i];
    liTagArray[i] = newLi;
  }
}, 2000);

//Задание 6
setTimeout(() => {
  let querrysel = document.querySelector('.todo-items');
  for (let i = 0; i < liTagArray.length; i++) {
    querrysel.appendChild(liTagArray[i]);
  }
}, 2000);

//Часть Вторая

//Задание 7

let ulElementProduct = document.querySelector("ul");
setTimeout(() => {
  let allLiElements = document.querySelectorAll('li');
  let ulElementTodo = document.querySelector(".todo-items");
  ulElementProduct.addEventListener("click", selectorProducts, false);
  ulElementTodo.addEventListener("click", selectorProducts, false);

  function selectorProducts(e) {
    if (e.target != e.currentTarget) {
      for (let i = 0; i < allLiElements.length; i++) {
        allLiElements[i].setAttribute('class', '');
      }
      let clickedItem = e.target;
      clickedItem.setAttribute('class', 'selected');
    }
    e.stopPropagation();
  }
}, 2400);

let imgProduct = document.querySelector('img');
//Задание 8

setTimeout(() => {
  ulElementProduct.addEventListener("click", imageChanger, false);
  let ulProductsdiv = document.querySelector('#essentials');
  let ulProducts = ulProductsdiv.children[0];
  let liProducts = ulProducts.children;

  function imageChanger(e) {
    
    for (let i = 0; i < ulProducts.children.length; i++) {
      if (liProducts[i].getAttribute('class') == 'selected') {
         if(liProducts[i].textContent =='молоко'){
          imgProduct.setAttribute('src','./images/milk.jpg')
         }
        else if (liProducts[i].textContent == 'мёд') {
           imgProduct.setAttribute('src', './images/honey.jpg')
         }
        else if (liProducts[i].textContent == 'вода') {
           imgProduct.setAttribute('src', './images/water.jpg')
         }
         else if (liProducts[i].textContent == 'вино') {
           imgProduct.setAttribute('src', './images/wine.jpg')
         }
         else if (liProducts[i].textContent == 'пиво') {
           imgProduct.setAttribute('src', './images/beer.jpg')
         }
      }
    }
  }
  
}, 2500);

//Задание 9
setTimeout(() => {
  let delElement = document.querySelector('#ghosting');
  delElement.addEventListener("mouseover", deleteElement, false);

  function deleteElement(e) {
    delElement.remove();
  }
}, 2000);

//Задание 10
setTimeout(() => {
  let resizeElement = document.querySelector('#resize');
  resizeElement.addEventListener("mouseover", resizeElementEv1, false);
  resizeElement.addEventListener("mouseout", resizeElementEv2, false);

  let originalSize = resizeElement.clientWidth;

  function resizeElementEv1(e) {
    resizeElement.style.width = originalSize*2 + 'px';
  }

  function resizeElementEv2(e) {
    resizeElement.style.width = originalSize + 'px';
  }
}, 2000);

//Задание 11
setTimeout(() => {
  

let reset = document.querySelector('input');
let allLiElements = document.querySelectorAll('li');
reset.addEventListener("click", resetIt, false);
function resetIt(e) {
  imgProduct.setAttribute('src', './images/panic.jpg')
  for (let i = 0; i < allLiElements.length; i++) {
    allLiElements[i].setAttribute('class', '');
  }
  
}
}, 2600);

//Задание 12
window.addEventListener("keypress", checkKeyNumber, false);
function checkKeyNumber(e) {
  if ((e.keyCode >= 48 && e.keyCode <= 57)) {
    alert("Я НЕНАВИЖУ ЧИСЛААААА!");
    
  }
}