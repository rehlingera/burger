$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var justDevoured = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: justDevoured
        }).then(function() {
            console.log ("Burger " + id + " has been devoured");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerText").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log ("Burger has been created");
            location.reload();
        });
    });
});

