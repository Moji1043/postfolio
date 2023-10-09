window.onload = pageload;

function pageload()
{
    var h =document.getElementById("home");
    h.onclick= Home_page;

    var np =document.getElementById("next page");
    np.onclick= Next_page;
}

function Home_page()
{
    location.href="index.html";
}
function Next_page()
{
    location.href="project.html";
}