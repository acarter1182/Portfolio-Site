// shorthand for jQuery is $
// jQuery(document).ready(function(){});
$(document).ready(function(){
    // hook to the burgermenu class, and on a click, execute the function
    $('.burgermenu').on('click', function(){
        // the function toggles the mobile-nav class
        $('.mobile-nav').toggle('slow');  
    })
});