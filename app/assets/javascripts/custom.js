$(document).ready(function () {

    /*
    $('map area').click(function () {
        var link = $(this).attr("href");
        alert(link);
        $.ajax({url: '/pictures/1',
            data: 'selected=' + this.value,
            dataType: 'script',
            contentType: 'text/javascript'
        })
    });       */

    var rowsAndColumns = 15;    //Number of rows and columns of picture tiles

    var divWidth = $('.picture-container').width(); //We determine the div's width in pixel (which should embark approx. 80% of the screen)
    var divHeight = $(window).height();     //We determine the browser's window height


    /* In order for each respective tile to appear next to each other (and avoid sub-pixel rendering), we decrease the div's width
        and height until both are divisible by the number of rows and columns of picture tiles
     */
    var differenceHeight = 0;  //Store the difference between the container's div width and the picture div's width
    var differenceWidth = 0;  //Store the difference between the container's div height and the picture div's height

    while (divWidth % rowsAndColumns != 0) {
        divWidth--;
        differenceWidth++;
    }

    while (divHeight % rowsAndColumns != 0) {
        divHeight--;
        differenceHeight++;
    }

    $('.picture').width(divWidth); //Set the picture div's width
    $('.picture').height(divHeight); //Set the picture div's height
    $('.picture').css('margin-top', Math.floor(differenceHeight/2));  //Set the picture div's margin top to the height difference divided by two and then rounded down
    $('.picture').css('margin-right', Math.floor(differenceWidth/2)); //Set the picture div's margin left to the height difference divided by two and then rounded down


    var tileWidth = divWidth / rowsAndColumns;
    var tileHeight = divHeight / rowsAndColumns;


    $('.tile').width(tileWidth);   //Set each picture tile to the necessary width
    $('.tile').height(tileHeight);  //Set each picture tile to the necessary height

    if ("MozAppearance" in document.documentElement.style) {  //If the browser is Mozilla, add an image hack so that images are properly rendered
        $('.tile').addClass('image-scale-hack');
    }



    /*
     * Javascript for the accordion menu in the sidebar
     */
    var textPanels = $('.accordion-menu > .accordion-text').hide();
    $('.accordion-menu > .accordion-header').click(function () {
        var textPanelChosen = $(this).next();

        if (!textPanelChosen.hasClass('active')) {
            textPanels.removeClass('active').slideUp('slow');
            textPanelChosen.addClass('active').slideDown('slow');
        }

    });

    /*
     * Javascript for when the user clicks a picture tile, show a box around it
     */
    $('.tile-link').click(function() {
        var leftOffset = $(this).children('img').offset().left;
        var topOffset = $(this).children('img').offset().top;
        $('.image-border').css({

            "width": tileWidth,
            "height": tileHeight,
            "margin-top": topOffset,
            "margin-left": leftOffset,
            "border-color": "yellow",
            "border-width":"1px",
            "border-style":"solid"});
    });


    $(window).load(function() {
        if(!Modernizr.cssfilters && !Modernizr.svgfilters){
            grayscale ( $('.grayscale') );
            //$('.grayscale').grayScale();
        }

    });





});