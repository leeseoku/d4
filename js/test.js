$(document).ready(function(){
    let count = 0;
    setInterval(function(){
        count++; count %=3;
        $(".slides div").eq(count).addClass("op").siblings().removeClass("op")
    },8000);
})