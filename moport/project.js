window.onload = pageload;

function pageload()
{
    var h =document.getElementById("home");
    h.onclick= Home_page;

    var p =document.getElementById("pic");
    p.onclick= picture;
}

function Home_page()
{
    location.href="index.html";
}
function picture()
{
    location.href="pic.html";
}