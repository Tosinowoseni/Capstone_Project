let searchbar = document.queryselector('#search-bar');
let searchbox = document.queryselector('.search-box');
let shop = document.queryselector('#shop-cart');
let shopcart = document.queryselector('.shopping-cart');






searchbar.onclick = () =>{
    searchbox.classlist.toggle('active')
}
shop.onclick = () =>{
    shopcart.classlist.toggle('active');
}