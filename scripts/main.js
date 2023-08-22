//Scroll the document to the <a> items href target position + the navbar height offset
function scrollDocument(container){
    //Get the navigation nav height
    var navbarHeight = $(".navbar").height();
    $(container+" a").on("click", function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        var targetPosition = $(target).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition-navbarHeight
        }, 800);
    });
}
//Scroll the document to the position target by the <a> href navbar items
$(document).ready(scrollDocument(".navbar-nav"));

/*Methos to turn the navigation bar items into a Dropdown item that
contains the navigation bar items when the window is resized*/
$(window).on('resize', function(){
    var width = $(window).width();
    if(width < 559){
        var $sections = $('.navbar-nav li');
        //Dropdown content
        var dropdownContent = '';
        $sections.each(function(){
            dropdownContent += '<a class="dropdown-item" href="'+$(this).find('a').attr('href')+'">'+$(this).text()+'</a>';
        });
        //Group items in the Dropdown
        $("#navigation-dropdown").html('<div class="dropdown"><button class="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sections</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+dropdownContent+'</div></div>');
        //Hide the sections list
        $(".navbar-nav").hide();
        //Show the Dropdown menu
        $("#navigation-dropdown").show();
        //Scroll the document to the position target by the <a> href navbar dropdown items
        scrollDocument("#navigation-dropdown");
    }else{
        //Show the sections list
        $(".navbar-nav").show();
        //Hide the Dropdown menu
        $("#navigation-dropdown").hide();
    }
});

