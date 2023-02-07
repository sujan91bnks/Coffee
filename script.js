function buy(){
    alert("This item has been added to cart");
}

const $ = document.querySelector.bind(document);
const clickBtn = $('#coffee-item');
clickBtn.addEventListener('click',buy);