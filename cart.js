//Gets the cart list element
var cartList = document.getElementById('cart-list');
let success_shop = document.querySelector('.success_shop');
//Get the success_shop element
//A message indicating that an item has been successfully added to the cart

// Gets all item items in the item list
var commodityListItems = document.getElementById('listOfProducts').getElementsByTagName('li');

for (var i = 0; i < commodityListItems.length; i++) {//for loop, going through each item.
    var addToCartLink = commodityListItems[i].querySelector('a[href="javascript:"]');

    addToCartLink.addEventListener('click', function(event) {
//Added a click event listener that executes the following function when the user clicks on the link
        event.preventDefault();//Blocking default behavior
        success_shop.style.display = 'flex';
        setTimeout(function() {
            success_shop.style.display = 'none';
        }, 1000);
//After one second to hide the success of the shopping prompt box


        // Get the name, price, and picture of the item
        var productName = this.closest('li').querySelector('p').textContent.trim();
        var productPrice = this.closest('li').querySelector('.price span').textContent.trim();
        var productImg = this.closest('li').querySelector('img').src;

        // Create a new item in shopping cart
        var newCartItem = document.createElement('li');//A new entry in the shopping cart list
        //The HTML content of the new li element
        newCartItem.innerHTML = `
            <div class="img">
                <img src="${productImg}" alt="">
                <p>${productName}</p>
            </div>
            <div class="text">
                <h4>${productName}</h4>
                <p>Qty</p>
                <select name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <span class="price">${productPrice}</span>
                <a href="javascript:void(0);" class="remove-from-cart">Remove</a>
            </div>
        `;

        cartList.querySelector('ul').appendChild(newCartItem);

        // Removed function
        newCartItem.querySelector('.remove-from-cart').addEventListener('click', function(event) {
            event.preventDefault();//Blocking default behavior
            cartList.querySelector('ul').removeChild(newCartItem);
            //Removes the newly created shopping cart entry (li element) from ul
        });
    });
}

