$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
    .append($("<div>").addClass("col-12")
        .append($("<div>").addClass("row")
            .append($("<h2>").text("Projects").addClass("bodoni-moda-sc"))
        )
        // .append($("<div>").addClass("row")
        //     .append($("<h4>").text("Shoe Tracker").addClass("bodoni-moda-sc"))
        //     .append($("<p>").text("[Information about the project goes here]"))

        //     .append($("<p>").text("The application can be found ").append($("<a>").attr("href", "[Project link]").attr("target","_blank").text("here")).append(", and the code can be viewed on github ").append($("<a>").attr("href", "https://github.com/emilysaunders28/shoe-tracker").attr("target","_blank").text("here")).append("."))
        // )
        .append($("<div>").addClass("row")
            .append($("<h4>").text("Colorpedia").addClass("bodoni-moda-sc"))
            .append($("<p>").text("Colorpedia is a web application for learning color theory terminology. The front end of the application was built using React and the back end was built using Flask with a SQLite database. The application is hosted on Heroku."))
            .append($("<p>").text("The application is designed to be a fun and interactive way to learn about color theory. It includes a quiz feature that allows users to test their knowledge of color theory terminology."))
            .append($("<p>").text("The application can be found ").append($("<a>").attr("href", "https://www.colorpedia.net/").attr("target","_blank").text("here")).append(", and the code can be viewed on github ").append($("<a>").attr("href", "https://github.com/emilysaunders28/Colorpedia").attr("target","_blank").text("here")).append("."))
        )
    )

    $("#content")
        .append(content)
});