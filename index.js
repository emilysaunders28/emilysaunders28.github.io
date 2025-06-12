$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
        .append($("<div>").addClass("col-12")
            .append($("<div>").addClass("row")
                .append($("<h3>").text("About me"))
            )
            .append($("<div>").addClass("row")
                .append($("<p>").text("I recently completed a PhD in Mathematics at Columbia University, where I was advised by Professor Andrew Blumberg. My research focused on topological data analysis, with an emphasis on generalizations of persistent homology. I am currently seeking opportunities in industry where I can apply my skills in mathematics, data analysis, and software development to real-world problems."))
                .append($("<p>").append("Click ").append($("<a>").attr("href", "media/cv.pdf").attr("target","_blank").text("here")).append(" to view my CV."))
            )
        )

    const image = $("<div>")
        .addClass("col-md-4 col-sm-5 col-6")
        .append($("<img>")
            .attr("src", "media/headshot.jpg")
            .addClass("header-image")
        )

    const header = $("<div>")
        .addClass("col-md-8 col-sm-7 col-6 header")   
        .append($("<row>")
            .append($("<h1>")
                .text("Emily Saunders")
                .addClass("bodoni-moda-sc")))
        .append($("<row>")
            .append($("<div>")
                .attr("id", "email")
                .text("Email: emilysaunders28 [at] gmail [dot] com")))

    const header_row = $("<div>")
        .addClass("row header-row")
        .append(image)
        .append(header)



    $("#content")
        .append(header_row)
        .append(content)
});