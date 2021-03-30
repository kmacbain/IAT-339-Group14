if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
	var removeCartItemButtons = document.getElementsByClassName('remove_item')
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i]
		button.addEventListener('click', removeCartItem)
	}

	var quantityInputs = document.getElementsByClassName('cart_quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add_to_shop')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        console.log('added')
    }
}

function removeCartItem() {
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
	updateCartTotal()
}

function quantityChanged(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop_item_title')[0].innerText
    var price = shopItem.getElementsByClassName('shop_item_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop_item_image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price) {
}


function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('shopping_container')[0]
	var cartRows = cartItemContainer.getElementsByClassName('shopping_row')
	var total = 0
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('cart_price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart_quantity')[0]
		// reference from https://stackoverflow.com/questions/3205730/javascript-parsefloat-500-000-returns-500-when-i-need-500000 
		var priceEdit = priceElement.innerText.replace(',','')
		var price = parseFloat(priceEdit.replace('$', ''))
		var quantity = quantityElement.value
		total = total + (price * quantity)
	}
	document.getElementsByClassName('cart_total_price')[0].innerText = '$' + total
	document.getElementsByClassName('price_final')[0].innerText = '$' + total
}

function getInput() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var provence = document.getElementById("provence").value;
  var zip = document.getElementById("zip").value;
  var cname = document.getElementById("cname").value;
  var ccnum = document.getElementById("ccnum").value;
  var expmonth = document.getElementById("expmonth").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;
  document.getElementById("fnamelabel").innerHTML = "Name:  " + fname;
  document.getElementById("emaillabel").innerHTML = "Email:  " + email;
  document.getElementById("adrlabel").innerHTML = "Address:  " + adr;
  document.getElementById("citylabel").innerHTML = "City:  " + city;
  document.getElementById("provencelabel").innerHTML = "Provence:  " + provence;
  document.getElementById("ziplabel").innerHTML = "Zip:  " + zip;
  document.getElementById("cnamelabel").innerHTML = "Credit Card Name:  " + cname;
  document.getElementById("ccnumlabel").innerHTML = "Credit Card Number:  " + ccnum;
  document.getElementById("expmonthlabel").innerHTML = "Expiration Month:  " + expmonth;
  document.getElementById("expyearlabel").innerHTML = "Expiration Year:  " + expyear;
  document.getElementById("cvvlabel").innerHTML = "CVV:  " + cvv;

  var whitedesk = document.getElementById("whitedesk").innerText;
  var copperdesk = document.getElementById("copperdesk").innerText;
  var blackcabinet = document.getElementById("blackcabinet").innerText;
  var brownchair = document.getElementById("brownchair").innerText;
  var whitedeskprice = document.getElementById("whitedeskprice").innerText;
  var copperdeskprice = document.getElementById("copperdeskprice").innerText;
  var blackcabinetprice = document.getElementById("blackcabinetprice").innerText;
  var brownchairprice = document.getElementById("brownchairprice").innerText;
  document.getElementById("white_desk").innerHTML = whitedesk;
  document.getElementById("copper_desk").innerHTML = copperdesk;
  document.getElementById("black_cabinet").innerHTML = blackcabinet;
  document.getElementById("brown_chair").innerHTML = brownchair;
  
  document.getElementById("whitedesk_price").innerHTML = whitedeskprice;
  document.getElementById("copperdesk_price").innerHTML = copperdeskprice;
  document.getElementById("blackcabinet_price").innerHTML = blackcabinetprice;
  document.getElementById("brownchair_price").innerHTML = brownchairprice;
  
}