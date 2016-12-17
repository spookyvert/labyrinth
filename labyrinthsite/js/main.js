$(document).ready(function() {

     $('div.hidden').fadeIn(1000).removeClass('hidden');
    $("#genres").hide();



    $("#show").click(function() {

        $("#head1").hide();
        $("#show").hide();
        $("#genres").fadeIn(1000);
    });
});
