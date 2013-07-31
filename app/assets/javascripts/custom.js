$(document).ready(function(){
    $('map area').click(function(){
        var link = $(this).attr("href");
        alert(link);
        $.ajax({url: '/pictures/1',
            data: 'selected=' + this.value,
            dataType: 'script',
            contentType: 'text/javascript'
        })
    });

    //$('img not-sponsored').addClass("grayscale");

    $(window).load(function() {
        $('img .not-sponsored').addClass("grayscale");
    });


    var textPanels = $('.accordion-menu > .accordion-text').hide();

    $('.accordion-menu > .accordion-header').click(function() {
        var textPanelChosen = $(this).next();

        if (!textPanelChosen.hasClass('active')){
            textPanels.removeClass('active').slideUp('slow');
            textPanelChosen.addClass('active').slideDown('slow');
        }

        });

});