
 /*
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});*/

 $(document).ready(function(){

 $('a[href^="#"]').click(function(e) {

    $('#main').animate({ scrollTop: $(this.hash).offset().top-50}, 1000);

    return false;

    e.preventDefault();

});

});
/*
function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("id");
      // Scroll
    $('#main').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

$("#sidebar > ul > li > a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});*/