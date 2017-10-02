$(document).ready(function()
{
    var navbar = $('nav');
    if (window.width() <= '768px') 
    {
        navbar.removeClass('navbar-fixed-top');
    }
});