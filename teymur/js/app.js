var mybtn = document.getElementById("myBtn");

window.onscroll = function(){
    scrollFunc()
};

function scrollFunc(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybtn.style.display = "block"
    }
else{
    mybtn.style.display = "none"
}
}

function MyFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(function(){
    $(window).on("scroll",function(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            $(".header").addClass("active")
        }
        else{
            $(".header").removeClass("active")
        }
    })
})