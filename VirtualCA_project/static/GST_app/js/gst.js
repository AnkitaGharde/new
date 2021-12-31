/* Begin:: GST Application all data in Uppercase js  */

$('#pform .row1 input').keyup(function() {
    this.value = this.value.toUpperCase();
});

/* End:: GST Application all data in Uppercase js  */

/* Begin:: GST Footer Design js  */
$(document).ready(function() {
    $(".landing_passport_sec").next().addClass('landing_footer');
    $(".landing_footer #main-footer .upper-footer").next().addClass('landing_design_foot');


});
/* End:: GST Footer Design js  */

/* ***************** Start:: Accordian Refresh ************************* */
$(document).ready(function() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
/* ***************** End:: Accordian Refresh  ************************* */


/* Begin:: GST Partner details */

function showPartner(elem) {

    var partner = elem.value;

    var i;
    var raappen = '';
    var count = 0;
    for (i = 0; i < partner; i++) {
        count++;
        raappen = raappen + '<div class="partner_div" id="partner_div"><div class="part1 partc col-sm-12"><div class="r1head">Partner ' + count + '</div></div><div class="row1 col-sm-12"><div class="part1 partc col-sm-4"><div class="r1head">First Name<span>*</span></div><div class="r1data"><input type="text" name="firm_fname' + count + '" id="firm_fname' + count + '"><div id="firm_error_firm_fname' + count + '" class="clearfix form_rules" ><span class="error"></span></div></div></div><div class="part2 partc col-sm-4"><div class="r1head">Last name</div><div class="r1data"><input type="text" name="firm_surname' + count + '" id="firm_surname' + count + '"><div id="firm_error_firm_surname' + count + '" class="clearfix form_rules" ><span class="error"></span></div></div></div><div class="part3 partc col-sm-4"></div><div class="part1 partc col-sm-4"></div></div></div>';

        /* Priya Suman keshri BKP may 2019 */
        /* 
             <div class="r1head ">DOB <span>*</span></div>
        <div class="r1data r1date"><input type="text" name="firm_dob'+count+'" id="firm_dob'+count+'" autocomplete="off" placeholder="dd-mm-yyyy" maxlength="10"><div id="firm_error_firm_dob'+count+'" class="clearfix form_rules"><span class="error"></span></div></div>

        <div class="r1head">Father\'s Name <span>*</span></div>
        <div class="r1data"><input type="text" name="firm_fathername'+count+'" id="firm_fathername'+count+'"><div id="firm_error_firm_fathername'+count+'" class="clearfix form_rules" ><span class="error"></span></div></div>


        <div class="row1 col-sm-12"><div class="part1 partc col-sm-3"><div class="r1head">E-mail ID<span>*</span></div><div class="r1data"><input type="text" name="firm_email'+count+'" id="firm_email'+count+'"><div id="firm_error_firm_email'+count+'" class="clearfix form_rules" ><span class="error"></span></div></div></div><div class="part2 partc col-sm-3"><div class="r1head">Mobile Number<span>*</span></div><div class="input-group r1data"><span class="input-group-addon" id="basic-addon1">+91</span><input type="text" name="firm_mob'+count+'" id="firm_mob'+count+'" maxlength="10" class="form-control"><div id="firm_error_firm_mob'+count+'" class="clearfix form_rules" ><span class="error"></span></div></div></div></div>  */

        /* End: Priya suman keshri BKP 14 May 2019 */

    }
    $('#partner_div_parent').html(raappen);


    // $("#firm_dob1").keyup(function(){
    //             //alert('Hii');
    //             if ($(this).val().length == 2){
    //                 $(this).val($(this).val() + "-");
    //             }else if ($(this).val().length == 5){
    //                 $(this).val($(this).val() + "-");
    //             }else if($(this).val().length > 10){
    //                 var pprt=$(this).val().substr(0, 10);
    //                 $(this).val(pprt);
    //             }
    //         });

    //          $("#firm_dob2").keyup(function(){
    //             if ($(this).val().length == 2){
    //                 $(this).val($(this).val() + "-");
    //             }else if ($(this).val().length == 5){
    //                 $(this).val($(this).val() + "-");
    //             }else if($(this).val().length > 10){
    //                 var pprt=$(this).val().substr(0, 10);
    //                 $(this).val(pprt);
    //             }
    //         });

    //          $("#firm_dob3").keyup(function(){
    //             //alert('Hii');
    //             if ($(this).val().length == 2){
    //                 $(this).val($(this).val() + "-");
    //             }else if ($(this).val().length == 5){
    //                 $(this).val($(this).val() + "-");
    //             }else if($(this).val().length > 10){
    //                 var pprt=$(this).val().substr(0, 10);
    //                 $(this).val(pprt);
    //             }
    //         });

    //          $("#firm_dob4").keyup(function(){
    //             //alert('Hii');
    //             if ($(this).val().length == 2){
    //                 $(this).val($(this).val() + "-");
    //             }else if ($(this).val().length == 5){
    //                 $(this).val($(this).val() + "-");
    //             }else if($(this).val().length > 10){
    //                 var pprt=$(this).val().substr(0, 10);
    //                 $(this).val(pprt);
    //             }
    //         });
}


/* End :: GST Partner details */

/* Begin :: GST Document Address js */


function showAddrProofGst(elem) {
    //alert('abc');
    $(".addr_upload_section").hide();
    $("#gst_addr_val").html('');


    if (elem.value == "") {
        $(".addr_upload_section").hide();
        $(".addr_upload_section_elec").hide();
        $("#gst_addr_val").html('');
        $("#gst_addr_val_elec").html('');
    } else if (elem.value == 'rent_agreement_electricity_bill') {
        $('#address_list').removeClass('input_error');
        $('.gst_prop_addr_validate').hide();
        $(".addr_upload_section").show();
        $(".addr_upload_section_elec").show();
        $("#gst_addr_val").html('(Rent Agreement)');
        $("#gst_addr_val_elec").html('(Electricity Bill)');

    } else if (elem.value == 'electricity_bill') {
        $('#address_list').removeClass('input_error');
        $('.gst_prop_addr_validate').hide();

        $(".addr_upload_section").hide();
        $(".addr_upload_section_elec").show();
        $("#gst_addr_val").html('');
        $("#gst_addr_val_elec").html('(Electricity Bill)');


    } else if (elem.value == 'noc_electricity_bill') {
        $('#address_list').removeClass('input_error');
        $('.gst_prop_addr_validate').hide();
        $(".addr_upload_section").show();
        $(".addr_upload_section_elec").show();
        $("#gst_addr_val").html('(No Objection Certificate)<a download href="' + Base_URL + 'uploads/No-Objection-Certificate.docx" class="loa_sample"> Download : No Objection Certificate</a>');
        $("#gst_addr_val_elec").html('(Electricity Bill)');

    }
}


/* End :: GST Document Address js */