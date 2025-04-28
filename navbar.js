$(document).ready(function(){
    function generate_navbar () {
        const navbar = $("<nav>").addClass("navbar navbar-light my-navbar bodoni-moda")
            .append($("<div>").addClass("container-fluid d-flex justify-content-start")
                .append($("<a>").addClass("navbar-brand bodoni-moda-sc").attr("href", "index.html").text("Home"))
                .append($("<a>").addClass("nav-link").attr("href", "research.html").text("Research"))
                .append($("<a>").addClass("nav-link").attr("href", "projects.html").text("Projects"))
                .append($("<a>").addClass("nav-link").attr("href", "dog.html").text("Dog"))
            )

        return navbar
    }
    const navbar = generate_navbar()

    $("#container")
    .prepend(navbar)
    
})