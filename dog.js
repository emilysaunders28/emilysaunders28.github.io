$(document).ready(function() {
    const content = $("<div>").addClass("row content-row")
    .append($("<div>").addClass("col-12")
        .append($("<div>").addClass("row")
            .append($("<h1>").text("Ziggy Saunders").addClass("bodoni-moda-sc"))
        )
        .append($("<div>").addClass("row")
            .append($("<p>").text("Here are some pictures of my dog Ziggy. Please enjoy."))
        )
    )



    const carousel_inner = $("<div>").addClass("carousel-inner")
    for (let i = 1; i <= 8; i++) {
        let path = "media/ziggy_images/ziggy" + i + ".jpg";
        let carousel_item = $("<div>").addClass("carousel-item").append($("<img>").attr("src", path).addClass("d-block w-100"))
        if (i == 1) {
            carousel_item.addClass("active")
        }
        carousel_inner.append(carousel_item)
    }

    const carousel_control_prev = $("<button>")
        .addClass("carousel-control-prev")
        .attr("type", "button")
        .attr("data-bs-target", "#ziggy-slideshow")
        .attr("data-bs-slide", "prev")
        .append($("<span>").addClass("carousel-control-prev-icon").attr("aria-hidden", "true"))
        .append($("<span>").addClass("visually-hidden").text("Previous"))

    const carousel_control_next = $("<button>")
        .addClass("carousel-control-next")
        .attr("type", "button")
        .attr("data-bs-target", "#ziggy-slideshow")
        .attr("data-bs-slide", "next")
        .append($("<span>").addClass("carousel-control-next-icon").attr("aria-hidden", "true"))
        .append($("<span>").addClass("visually-hidden").text("Next"))

    const carousel = $("<div>").addClass("carousel slide").attr("id", "ziggy-slideshow")
    .append(carousel_inner)
    .append(carousel_control_prev)
    .append(carousel_control_next)

    $("#content")
        .append(content)
        .append($("<div>").addClass("row").append($("<div>").addClass("col d-flex justify-content-center").append(carousel)))
});