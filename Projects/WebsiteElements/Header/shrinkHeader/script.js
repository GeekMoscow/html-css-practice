window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
// console.log(document.body.scrollTop);

if(document.documentElement.scrollTop > 50 || window.pageYOffset) {
    document.getElementById("header").style.fontSize = "30px";
    } else {
        document.getElementById("header").style.fontSize = "90px";
}
}