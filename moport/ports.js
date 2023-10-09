window.onload = pageload;

function pageload()
{
    var ass4 = document.getElementById("as4");
    ass4.onclick = linkas4;

    var ass5 = document.getElementById("as5");
    ass5.onclick = linkas5;

    var ass6 = document.getElementById("as6");
    ass6.onclick = linkas6;

    var ass7 = document.getElementById("as7");
    ass7.onclick = linkas7;

    var np =document.getElementById("next page");
    np.onclick= Next_page;

    var p =document.getElementById("pic");
    p.onclick= picture;

}
function linkfacebook()
{
    location.href = "https://www.facebook.com/sattaphon.mo";
}
function linkig()
{
    location.href = "https://www.instagram.com/sattaphon.mo/";
}
function linkgh()
{
    location.href = "https://github.com/Moji1043";
}
function linkas4()
{
    location.href = "https://moji1043.github.io/as4/recipe.html";
}
function linkas5()
{
    location.href = "https://moji1043.github.io/as5/";
}
function linkas6()
{
    location.href = "https://moji1043.github.io/as6/register.html";
}
function linkas7()
{
    location.href = "https://moji1043.github.io/as7/";
}
function Next_page()
{
    location.href="project.html";
}
function picture()
{
    location.href="pic.html";
}
