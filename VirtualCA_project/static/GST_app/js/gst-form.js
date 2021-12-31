	$(document).ready(function() {
	    $("#listone,#listtwo").click(function() {
	        $("#listthree a").attr("href", "JavaScript:Void(0)");
	    });


	    $("#listone").click(function() {
	        $("#listtwo a").attr("href", "JavaScript:Void(0)");
	    });

	    $(".nav-tabs li a").on('click', function() {
	        var litabid = $(this).parent().attr('id');
	        var p = $('#' + litabid + ' a').attr('href');

	        if (p != 'JavaScript:Void(0)') {
	            $(".nav-tabs li").removeClass('active');
	            $(".nav-tabs li a").removeClass('active');
	            $('#' + litabid + ' a').addClass('active');
	        }
	    });

	    $("#doformation_prop").keyup(function() {
	        if ($(this).val().length == 2) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length == 5) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length > 10) {
	            var pprt = $(this).val().substr(0, 10);
	            $(this).val(pprt);
	        }
	    });

	    $("#prop_dob").keyup(function() {
	        if ($(this).val().length == 2) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length == 5) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length > 10) {
	            var pprt = $(this).val().substr(0, 10);
	            $(this).val(pprt);
	        }
	    });


	    $("#doformation_firm").keyup(function() {

	        if ($(this).val().length == 2) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length == 5) {
	            $(this).val($(this).val() + "-");
	        } else if ($(this).val().length > 10) {
	            var pprt = $(this).val().substr(0, 10);
	            $(this).val(pprt);
	        }
	    });




	});


	function gst_business_type(elem) {

	    //alert(elem.value);

	    if (elem.value == 'proprieter') {
	        window.location.href = Base_URL + 'gst-registration-for-proprietor';
	        $('#proprieter_div').show();
	        $('#firm_div').hide();
	    } else if (elem.value == 'firm') {
	        window.location.href = Base_URL + 'gst-registration-for-partnership-firm';
	        $('#proprieter_div').hide();
	        $('#firm_div').show();
	    } else if (elem.value == 'opc') {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-for-opc';

	    } else if (elem.value == 'llp') {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-for-llp';
	    } else if (elem.value == 'society') {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-for-society';
	    } else if (elem.value == 'plc') {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-for-company';
	    } else if (elem.value == 'huf') {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-for-huf';
	    } else {
	        $('.loader_upload_overlay').show();
	        window.location.href = Base_URL + 'gst-registration-online';
	    }

	}


	/* ******************** START:: *************************** */
	$(document).ready(function() {


	    $(document).on("click", "#view_more_partners", function() {
	        $(".display_none").show('slow');
	        $("#view_more_partners").hide();
	        $("#view_less_partners").show();


	    });

	    $(document).on("click", "#view_less_partners", function() {
	        $(".display_none").hide('slow');
	        $("#view_more_partners").show();
	        $("#view_less_partners").hide();


	    });
	});




	/* ******************** END:: *************************** */