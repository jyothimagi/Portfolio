$(document).ready(function(){
$(window).scroll(function(){
    if(this.scroll>20){
        $('.navbar').addClass("stiicky");
    }else{
        $('.navbar').removeClass("stiicky");
    }

})
});