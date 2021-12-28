function social_login_loader() {
    $('.loader_fetch_bill_text').html('Please wait...');
    $('.loader_fetch_bill_main').show();
    $('#signup').modal('hide');
    $('#signin').modal('hide');
}
$("form#RegisterForm").submit(function(e) {
    e.preventDefault();
    var register_flag = 1;
    var u_name = $("form#RegisterForm input[name=u_name]").val();
    var u_email = $("form#RegisterForm input[name=u_email]").val();
    var u_mobile = $("form#RegisterForm input[name=u_mobile]").val();
    var u_password = $("form#RegisterForm input[name=u_password]").val();
    var focus_flag = false;
    var focus_selector = '';
    $("form#RegisterForm input").removeClass("inpt_border_error");
    if (u_name == "" || u_name == undefined) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_name]";
        }
        $("form#RegisterForm input[name=u_name]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_name').html("Enter name");
    } else if (!(/^[a-zA-Z ]*$/.test(u_name))) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_name]";
        }
        $("form#RegisterForm input[name=u_name]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_name').html("Only alphabates and space are allowed.");
    } else if (u_name.length < 3 || u_name.length > 50) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_name]";
        }
        $("form#RegisterForm input[name=u_name]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_name').html("Only 3-50 Characters are allowd.");
    } else {
        $("form#RegisterForm input[name=u_name]").removeClass("inpt_border_error");
        $('form#RegisterForm .error_u_name').html("");
    }
    if (u_email == "" || u_email == undefined) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_email]";
        }
        $("form#RegisterForm input[name=u_email]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_email').html("Enter email");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(u_email))) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_email]";
        }
        $("form#RegisterForm input[name=u_email]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_email').html('Please provide valid email.');
    } else {
        $("form#RegisterForm input[name=u_email]").removeClass("inpt_border_error");
        $('form#RegisterForm .error_u_email').html("");
    }
    if (u_mobile == "" || u_mobile == undefined) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_mobile]";
        }
        $("form#RegisterForm input[name=u_mobile]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_mobile').html("Enter mobile");
    } else if (!(/^\d{10,10}$/.test(u_mobile))) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_mobile]";
        }
        $("form#RegisterForm input[name=u_mobile]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_mobile').html('Please enter valid mobile number.');
    } else {
        $("form#RegisterForm input[name=u_mobile]").removeClass("inpt_border_error");
        $('form#RegisterForm .error_u_mobile').html("");
    }
    if (u_password == "" || u_password == undefined) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_password]";
        }
        $("form#RegisterForm input[name=u_password]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_password').html("Enter password");
    } else if (u_password.length < 5 || u_password.length > 15) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_password]";
        }
        $("form#RegisterForm input[name=u_password]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_password').html("Password length should be 5-15 char and numbers");
    } else if (!(/^(?=.*\d).{5,15}$/.test(u_password))) {
        register_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#RegisterForm input[name=u_password]";
        }
        $("form#RegisterForm input[name=u_password]").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_password').html("Password should contain least one numeric digit");
    } else {
        $("form#RegisterForm input[name=u_password]").removeClass("inpt_border_error");
        $('form#RegisterForm .error_u_password').html("");
    }
    if (!$('#u_check').is(':checked')) {
        register_flag = 2;
        $("#u_check").addClass("inpt_border_error");
        $('form#RegisterForm .error_u_check').html("Check Terms and conditions");
    } else {
        $("#u_check").removeClass("inpt_border_error");
        $('form#RegisterForm .error_u_check').html("");
    }
    if (focus_flag == true) {
        $(focus_selector).focus();
    }
    if (register_flag == 1) {
        $('.loader_fetch_bill_text').html('Please wait...');
        $('.loader_fetch_bill_main').show();
        $.ajax({
            type: 'POST',
            url: Base_URL + "user/register",
            data: {
                'u_name': u_name,
                'u_email': u_email,
                'u_mobile': u_mobile,
                'u_password': u_password
            },
            success: function(data) {
                var obj_register = JSON.parse(data);
                $('.error_u_check').html('');
                if (obj_register.error_code == 200) {
                    $('.loader_fetch_bill_text').html(obj_register.message);
                    window.location.reload();
                } else {
                    $('.loader_fetch_bill_main').hide();
                    $('form#RegisterForm .error_u_check').html(obj_register.message);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('.loader_fetch_bill_main').hide();
                $('form#RegisterForm .error_u_check').html("Error! Try again Later");
            }
        });
    }
});

$("form#LoginForm").submit(function(e) {
    e.preventDefault();
    var login_flag = 1;
    var u_email = $("form#LoginForm input[name=u_email]").val();
    var u_password = $("form#LoginForm input[name=u_password]").val();
    var focus_flag = false;
    var focus_selector = '';
    $("form#LoginForm input").removeClass("inpt_border_error");
    if (u_email == "" || u_email == undefined) {
        login_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#LoginForm input[name=u_email]";
        }
        $("form#LoginForm input[name=u_email]").addClass("inpt_border_error");
        $('form#LoginForm .error_u_email').html("Enter email");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(u_email))) {
        login_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#LoginForm input[name=u_email]";
        }
        $("form#LoginForm input[name=u_email]").addClass("inpt_border_error");
        $('form#LoginForm .error_u_email').html('Please provide valid email.');
    } else {
        $("form#LoginForm input[name=u_email]").removeClass("inpt_border_error");
        $('form#LoginForm .error_u_email').html("");
    }

    if (u_password == "" || u_password == undefined) {
        login_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#LoginForm input[name=u_password]";
        }
        $("form#LoginForm input[name=u_password]").addClass("inpt_border_error");
        $('form#LoginForm .error_u_password').html("Enter password");
    } else {
        $("form#LoginForm input[name=u_password]").removeClass("inpt_border_error");
        $('form#LoginForm .error_u_password').html("");
    }
    if (focus_flag == true) {
        $(focus_selector).focus();
    }
    if (login_flag == 1) {
        $('.loader_fetch_bill_text').html('Please wait...');
        $('.loader_fetch_bill_main').show();
        $.ajax({
            type: 'POST',
            url: Base_URL + "user/login",
            data: {
                'u_email': u_email,
                'u_password': u_password
            },
            success: function(data) {
                var obj_register = JSON.parse(data);
                $('.error_login_error').html('');
                if (obj_register.error_code == 200) {
                    window.location.reload();
                } else {
                    $('.loader_fetch_bill_main').hide();
                    $('form#LoginForm .error_login_error').html(obj_register.message);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('.loader_fetch_bill_main').hide();
                $('form#LoginForm .error_login_error').html("Error! Try again Later");
            }
        });
    }
});
$("form#ForgetPasswordForm").submit(function(e) {
    e.preventDefault();
    var forget_password_flag = 1;
    var u_email = $("form#ForgetPasswordForm input[name=u_email]").val();
    var focus_flag = false;
    var focus_selector = '';
    $("form#ForgetPasswordForm input").removeClass("inpt_border_error");
    if (u_email == "" || u_email == undefined) {
        forget_password_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#ForgetPasswordForm input[name=u_email]";
        }
        $("form#ForgetPasswordForm input[name=u_email]").addClass("inpt_border_error");
        $('form#ForgetPasswordForm .error_u_email').html("Enter email");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(u_email))) {
        forget_password_flag = 2;
        if (focus_flag == false) {
            focus_flag = true;
            focus_selector = "form#ForgetPasswordForm input[name=u_email]";
        }
        $("form#ForgetPasswordForm input[name=u_email]").addClass("inpt_border_error");
        $('form#ForgetPasswordForm .error_u_email').html('Please provide valid email.');
    } else {
        $("form#ForgetPasswordForm input[name=u_email]").removeClass("inpt_border_error");
        $('form#ForgetPasswordForm .error_u_email').html("");
    }
    if (focus_flag == true) {
        $(focus_selector).focus();
    }
    if (forget_password_flag == 1) {
        $('.loader_fetch_bill_text').html('Please wait...');
        $('.loader_fetch_bill_main').show();
        $.ajax({
            type: 'POST',
            url: Base_URL + "user/generate_forget_password_token",
            data: {
                'u_email': u_email
            },
            success: function(data) {
                var obj_forget_password = JSON.parse(data);
                $('.error_forget_pass_error').html('');
                if (obj_forget_password.error_code == 200) {
                    $("form#ForgetPasswordForm input[name=u_email]").val('');
                    $('#forget_password').modal('hide');
                    $('.loader_fetch_bill_main').hide();
                    $('.signin_top_right').show();
                    $('#info_title').html('Thanks!');
                    $('#info_description').html(obj_forget_password.message);
                    $('#info_popup').modal('show');
                } else {
                    $('.loader_fetch_bill_main').hide();
                    $('form#ForgetPasswordForm .error_forget_pass_error').html(obj_forget_password.message);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('.loader_fetch_bill_main').hide();
                $('form#ForgetPasswordForm .error_forget_pass_error').html("Error! Try again Later");
            }
        });
    }
});