
document.addEventListener("DOMContentLoaded", function () {
    var menuBox = document.querySelector('header .header_left');
    var cartLink1 = document.querySelector('header a.cart1');
    var cartLink2 = document.querySelector('header a.cart2');
    var shoppingCart = document.querySelector('.shoppingCart');
    var menu_hezi_box = document.querySelector('.menu_hezi_box');

    // Click to show shopping cart
    cartLink1.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        shoppingCart.style.display = 'block';
    });

    cartLink2.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        shoppingCart.style.display = 'block';
    });
    // Click elsewhere to hide the cart
    document.addEventListener('click', function (event) {
        var isClickInsideCart = shoppingCart.contains(event.target);
        var isClickInsideCart2 = menu_hezi_box.contains(event.target);
        var isClickInsideCartIcon = cartLink1.contains(event.target);
        var isClickInsideCartIcon = cartLink2.contains(event.target);
    
        if (!isClickInsideCart && !isClickInsideCartIcon && !isClickInsideCart2) {
            shoppingCart.style.display = 'none';
            menu_hezi_box.style.display = 'none';
        }
    });
    
    menuBox.addEventListener('click', function (event) {
        console.log(7272);
        event.preventDefault();
        event.stopPropagation();
        menu_hezi_box.style.display = 'block';
    });

    ///////////////////
// Shortcut search term
var searchHistory = ['Cranberry', 'Honey', 'seafood', 'chill', 'BBQ'];

//search input box
//Use focus to help run the following script if the user's focus is on the search bar
document.getElementById('searchInput').addEventListener('focus', function () {
    var datalist = document.getElementById('searchHistory');
    datalist.innerHTML = '';

    searchHistory.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item;
        datalist.appendChild(option);
    });
});
document.getElementById('searchInput_mobile').addEventListener('focus', function () {
    var datalist = document.getElementById('searchHistory_mobile');
    datalist.innerHTML = '';

    searchHistory.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item;
        datalist.appendChild(option);
    });
});
// document.getElementById('searchInput').addEventListener('input', function () {
//     var datalist = document.getElementById('searchHistory');
//     datalist.innerHTML = '';

//     searchHistory.forEach(function (item) {
//         if (item.includes(this.value)) {
//             var option = document.createElement('option');
//             option.value = item;
//             datalist.appendChild(option);
//         }
//     }, this);
// });

// Search button click events
document.querySelector('.search button').addEventListener('click', function () {//Execute when the button is clicked
    var input = document.getElementById('searchInput');//Gets the input box element with id searchInput.
    var searchTerm = input.value.trim();//Delete the Spaces before and after it

    //Check that the search term is valid (not empty) and not in the search history.
    if (searchTerm && !searchHistory.includes(searchTerm)) {
        searchHistory.unshift(searchTerm);
        //If the number of records in the search history exceeds 10, the oldest record (i.e. the last record) is deleted.
        if (searchHistory.length > 10) {
            searchHistory.pop();
        }
        //Clear the search box so that the user can enter a new search term the next time.
        var datalist = document.getElementById('searchHistory');
        datalist.innerHTML = '';
        searchHistory.forEach(function (item) {
            var option = document.createElement('option');
            option.value = item;
            datalist.appendChild(option);
        });

        input.value = '';
    }
});


var anniu1 = document.querySelector('.mobile_box .anniu1');
var anniu2 = document.querySelector('.mobile_box .anniu2');
var anniu3 = document.querySelector('.mobile_box .anniu3');
var thisNavs = document.querySelectorAll('.mobile_box .this_nav');
anniu1.addEventListener('click', function () {
    thisNavs[0].style.display = (thisNavs[0].style.display === 'block') ? 'none' : 'block';
    thisNavs[1].style.display = 'none';
    thisNavs[2].style.display = 'none';
});
anniu2.addEventListener('click', function () {
    thisNavs[0].style.display = 'none';
    thisNavs[1].style.display = 'block';
    thisNavs[2].style.display = 'none';
});
anniu3.addEventListener('click', function () {
    thisNavs[0].style.display = 'none';
    thisNavs[1].style.display = 'none';
    thisNavs[2].style.display = 'block';
});
})