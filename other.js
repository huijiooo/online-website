
//pc device
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchBtn').addEventListener('click', function () {//Added a click event listener to the search button on the page.
        var searchValue = document.getElementById('searchInput').value;//Gets the value of the search box

        if (searchValue.toLowerCase() === 'cranberry') {//Check if the search term is "cranberry
            window.location.href = 'cranberry.html';
        } else {
            alert('Search term is null.');
        }
    });

    //mobile device
    document.getElementById('searchBtn_mobile').addEventListener('click', function () {//Added a click event listener to the search button on the page.
        var searchValue = document.getElementById('searchInput_mobile').value;//Gets the value of the search box

        if (searchValue.toLowerCase() === 'cranberry') {//Check if the search term is "cranberry
            window.location.href = 'cranberry.html';
        } else {
            alert('Search term is null.');
        }
    });
});




