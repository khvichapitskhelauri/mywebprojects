
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
const mySearch = document.getElementById('mySearch');
icon.onclick = function () {
    search.classList.toggle('active');
}
clear.onclick = function () {
    console.log(mySearch.value);
    if (mySearch.value == '') {
        search.classList.toggle('active');
    } else {
        mySearch.value = '';
    }

}



