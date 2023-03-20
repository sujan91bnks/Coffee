function buy(){
    alert("This item has been added to cart");
}

const $ = document.querySelector.bind(document);
const titleBTn = $('#leftButton');
const changeHeader = $('#header');
const pop = $('#popUp');

titleBTn.addEventListener('click', foo);
changeHeader.addEventListener('click', ()=>{console.log("clicked on Header")});

function foo(){
        titleBTn.classList.add('glassOnion');
        //titleBTn.classList.remove() This function removes the class name and returns function in initial form
        console.log("Button clicked");
        changeHeader.style.background = 'white';
        pop.style.display = 'block';

}
   
//const clickBtn = $('.coffee-item');
// clickBtn.addEventListener('click',buy);