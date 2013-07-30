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
        $('img not-sponsored').addClass("grayscale");
    });


});