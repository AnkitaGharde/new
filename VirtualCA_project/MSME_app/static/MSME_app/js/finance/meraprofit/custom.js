$(document).click(function() {
    $(".hamburger_menu, .hamburger_right").hide()
    $(".ham_left_menus li a").removeClass('tab-active');
    $(".ham_left_menus li a span").removeClass('add_minus_icon').addClass("add_plus_icon");
});
$(document).ready(function() {
    $("#open_hamgurger,.hamburger_left,.hamburger_right").click(function(e) {
        $(".hamburger_menu").show();
        if (e.target.parentNode.id != undefined && e.target.parentNode.id == 'close_hamburger') {} else {
            e.stopPropagation()
        }
    });
    $("#close_hamburger").on('click', function(e) {
        $(".hamburger_menu, .hamburger_right").hide();
        $(".ham_left_menus li a").removeClass('tab-active');
        $(".ham_left_menus li a span").removeClass('add_minus_icon').addClass("add_plus_icon");
    });

    $("#tvpassport").on('click', function() {
        if (!$(this).hasClass('tab-active')) {
            $(this).addClass('tab-active');
            $(".hamburger_right").hide();
            $(".hamburger_right").show();
        } else {
            $('.tab-active').removeClass('tab-active');
            $(".hamburger_right").hide();
        }
        $(".hamburger_right").children("div").hide();
        $(".travel_inside").show();
        $("#tvpassport span").toggleClass('add_plus_icon add_minus_icon');
        $("#egorlicences span, #business_for span, #tax_fill span, #rbill_pay span").removeClass("add_minus_icon").addClass("add_plus_icon");
    });
    $("#egorlicences").on('click', function() {
        if (!$(this).hasClass('tab-active')) {
            $(this).addClass('tab-active');
            $(".hamburger_right").hide();
            $(".hamburger_right").show();
        } else {
            $('.tab-active').removeClass('tab-active');
            $(".hamburger_right").hide();
        }
        $(".hamburger_right").children("div").hide();
        $(".egove_inside").show();
        $("#egorlicences span").toggleClass('add_plus_icon add_minus_icon');
        $("#tvpassport span, #business_for span, #tax_fill span, #rbill_pay span").removeClass("add_minus_icon").addClass("add_plus_icon");
    });
    $("#business_for").on('click', function() {
        if (!$(this).hasClass('tab-active')) {
            $(this).addClass('tab-active');
            $(".hamburger_right").hide();
            $(".hamburger_right").show();
        } else {
            $('.tab-active').removeClass('tab-active');
            $(".hamburger_right").hide();
        }
        $(".hamburger_right").children("div").hide();
        $(".business_for_inside").show();
        $("#business_for span").toggleClass('add_plus_icon add_minus_icon');
        $("#egorlicences span, #tvpassport span, #tax_fill span, #rbill_pay span").removeClass("add_minus_icon").addClass("add_plus_icon");
    });
    $("#tax_fill").on('click', function() {
        if (!$(this).hasClass('tab-active')) {
            $(this).addClass('tab-active');
            $(".hamburger_right").hide();
            $(".hamburger_right").show();
        } else {
            $('.tab-active').removeClass('tab-active');
            $(".hamburger_right").hide();
        }
        $(".hamburger_right").children("div").hide();
        $(".taxation_inside").show();
        $("#tax_fill span").toggleClass('add_plus_icon add_minus_icon');
        $("#egorlicences span, #tvpassport span, #business_for span, #rbill_pay span").removeClass("add_minus_icon").addClass("add_plus_icon");
    });
    $("#rbill_pay").on('click', function() {
        if (!$(this).hasClass('tab-active')) {
            $(this).addClass('tab-active');
            $(".hamburger_right").hide();
            $(".hamburger_right").show();
        } else {
            $('.tab-active').removeClass('tab-active');
            $(".hamburger_right").hide();
        }
        $(".hamburger_right").children("div").hide();
        $(".recharge_bill_inside").show();
        $("#rbill_pay span").toggleClass('add_plus_icon add_minus_icon');
        $("#egorlicences span, #tvpassport span, #business_for span, #business_for span").removeClass("add_minus_icon").addClass("add_plus_icon");
    });
    $("#faqs_hide").on('click', function() {
        $(".hamburger_right").hide();
        $(".hamburger_right").children("div").hide();
    });

});

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 3000);
}