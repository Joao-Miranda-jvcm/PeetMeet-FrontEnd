$(document).ready( function () {
    $(".opcional").hide();

    $(".expandir").click(function(){

        if ($(".opcional").is(":hidden")) {
            $(".opcional").delay(300).fadeIn('slow');
            $(".expandir").removeClass("btn-dark").addClass("btn-light");
        } else {
            $(".opcional").delay(300).fadeOut('slow');
            $(".expandir").removeClass("btn-light").addClass("btn-dark");
        }
    });
});