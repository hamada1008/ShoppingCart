if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded' , ready)
}
else { 
  ready()
}

function ready() {

  /* NOT FUNCTION  */


var removeitem = document.getElementsByClassName('btn-danger')
for (i=0 ; i < removeitem.length ; i++) {
var  bt = removeitem[i]
bt.addEventListener('click', removeitems ) }
  

var quantinp = document.getElementsByClassName('cart-quantity-input')
for (i=0 ; i < quantinp.length ; i++) {
  var  input = quantinp[i]
input.addEventListener('change' , quantchanged) }

var addcart = document.getElementsByClassName('additem')
for (i=0 ; i < addcart.length ; i++) {
  var  add = addcart[i]
  add.addEventListener('click', additems )} 

var heartt = document.getElementsByClassName('fa-heart-o')
for (i=0 ; i < heartt.length ; i++) {
var  likes = heartt[i]
likes.addEventListener('click' , heartoggle) }


document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchased)
  
document.getElementsByClassName("lart")[0].addEventListener('click', reup)


}


/*FUNCTION*/ 

function reup() {
  Uptotal()
}

function bchanged() {
var bgg = document.getElementsByClassName("badge")[0]
var nrow = document.getElementsByClassName("cart-row")
var bradge = bgg.innerText
bradge = nrow.length - 1
document.getElementsByClassName('badge')[0].innerText = bradge
}


function heartoggle(event) {
  var ht = event.target
  ht.classList.toggle("fa-heart-o")
  ht.classList.toggle("fa-heart")

}

function purchased() {
  var cisi = document.getElementsByClassName('cart-row')
  if (cisi.length ==1 ) {alert('Please add at least one item from the shop') }
  
  else{
  alert('Thank you for your purchase') }
  var cis = document.getElementsByClassName('cart-items')[0]
  while (cis.hasChildNodes()) {
    cis.removeChild(cis.firstChild)}
  Uptotal ()
  bchanged()
}


function removeitems (event) {
  var btclicked = event.target
  btclicked.parentElement.parentElement .remove()
  Uptotal ()
  bchanged()
 
}

function quantchanged (event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  Uptotal ()
}

function additems(event) {
  var itemadded = event.target
  var shopitem = itemadded.closest('.card')
  var title = shopitem.getElementsByClassName("card-title")[0].innerText
  let price = shopitem.getElementsByClassName("pr")[0].innerText
  var image = shopitem.getElementsByClassName("item-im")[0].src
  additemtocart(title, price, image)
  bchanged()

}


function additemtocart (title, price, image) {
  var cartrowsn = document.createElement('div')
  cartrowsn.classList.add('cart-row')
  var cartitemsn = document.getElementsByClassName('cart-items')[0]
  var cartnames = cartitemsn.getElementsByClassName('cart-item-title')
  
  for (var i = 0 ; i < cartnames.length ; i++) {
    if (cartnames[i].textContent == title ) {
      alert('You have already added this item to the cart')
      return;
    }
  }
  var cartrowcont = `<div class="cart-item cart-column">
  <i class="fa fa-heart-o" style="font-size:30px"></i>
    <img class="cart-item-image" src="${image}">
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
  <input class="cart-quantity-input" type="number" value="1">
  <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`
  cartrowsn.innerHTML = cartrowcont
  cartitemsn.append(cartrowsn)
  cartrowsn.getElementsByClassName('btn-danger')[0].addEventListener('click',removeitems)
  cartrowsn.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantchanged)
  cartrowsn.getElementsByClassName('fa-heart-o')[0].addEventListener('click' , heartoggle )
} 


function Uptotal () {
    var cartcon = document.getElementsByClassName("cart-items")[0] 
    var cartrows = cartcon.getElementsByClassName("cart-row")
    var total = 0
    for (var i=0 ; i < cartrows.length ; i++ ) {
      var cartrow = cartrows[i]
      var pricee = cartrow.getElementsByClassName("cart-price")[0]
      var quante = cartrow.getElementsByClassName("cart-quantity-input")[0]
      var priced = parseFloat(pricee.innerText.replace('$',''))
      var quant = quante.value
      total = total + (priced * quant)
      }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }

  


function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}
  
    function scrollWin() {
      window.scrollTo(0,500);
    }


    