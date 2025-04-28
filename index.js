$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
        .append($("<div>").addClass("col-12")
            .append($("<div>").addClass("row")
                .append($("<h3>").text("About me"))
            )
            .append($("<div>").addClass("row")
                .append($("<p>").text("I am a PhD student in the Department of Mathematics at Columbia University, supervised by Professor Andrew Blumberg. My research interests are in the field of topological data analysis, specifically generalizations of persistent homology. I am expected to graduate in May 2025."))
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