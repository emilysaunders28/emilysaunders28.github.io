$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
    .append($("<div>").addClass("col-12")
        .append($("<div>").addClass("row")
            .append($("<h2>").text("Research").addClass("bodoni-moda-sc"))
        )
        .append($("<div>").addClass("row")
            .append($("<p>").text("My PhD research focused on persistent homology, a tool in topological data analysis that identifies features in data by applying topological methods at different scales and examining their persistence across varying parameter values."))
            .append($("<p>").text("My work specifically focused on introducing a multi-parameter generalization of zig-zag persistent homology. This construction was motivated by the need for a scale parameter in many applications of zig-zag persistent homology."))
            .append($("<p>").text("In my thesis work, I established a metric on the space of multi-parameter zig-zag persistence modules. I then prove foundational results such as stability with respect to the Gromov-Hausdorff distance on compact metric spaces, and convergence under the topological bootstrap sampling regime. Additionally I discussed possibilities for useful invariants on the space of multi-parameter zig-zag persistence modules and explore applications of density sensitive bifiltrations to zig-zag sequences of point clouds."))
            .append($("<p>").text("A preliminary version of my thesis can be found ").append($("<a>").attr("href", "media/thesis.pdf").attr("target","_blank").text("here")).append("."))
        )

    )

    $("#content")
        .append(content)
});