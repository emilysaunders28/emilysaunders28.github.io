$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
    .append($("<div>").addClass("col-12")
        .append($("<div>").addClass("row")
            .append($("<h1>").text("Emily Saunders").addClass("bodoni-moda-sc"))
        )
        .append($("<div>").addClass("row")
            .append($("<h2>").text("Projects").addClass("bodoni-moda-sc"))
        )
        .append($("<div>").addClass("row")
            .append($("<p>").text("[List of projects]"))
        )
    )

    $("#content")
        .append(content)
});