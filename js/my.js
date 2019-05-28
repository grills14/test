//my.js

//버튼 프리셋


$(function() {
    $(".btn").css({
        
        border : "1px solid #ccc",
        "background-color" : "white",
        padding : "3px 10px",
        "border-radius" : "4px"
        
    });

    $("btn").on({
        mouseenter : function() {

            $(this).fadeOut(200)
                .fadeOut(200)
				.fadeIn(200)
				.fadeOut(200)
				.fadeIn(200)
				.fadeOut(200)
				.fadeIn(200);

            }
        }
    })
})