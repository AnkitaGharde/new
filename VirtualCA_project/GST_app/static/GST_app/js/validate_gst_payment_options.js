 $(".pay_acordian .panel-custom .inner_acordian").on('click', function(e) {
     var expand_val = $(this).find('a').attr('aria-expanded');
     if (expand_val == 'false') {
         $(".fix_footer_amount").show();
     } else {
         $(".fix_footer_amount").hide();
     }
 });

 $("#net_banking .bank-rect").on('click', function(e) {

     $("#net_banking .bank-rect").css("border", "1px solid #c9c9c9");

     $("#net_banking .bank-rect input").attr('checked', false);

     var nb_selected_value = $(this).attr('data-id');

     if (nb_selected_value != "" && nb_selected_value != undefined)

     {

         $("#netbanking_select").val(nb_selected_value);

     }

     $(this).css("border", "2px solid #00adf2");

     $(this).find('input').prop('checked', true);

 });

 $("#netbanking_select").on('change', function(e) {

     $("#net_banking .bank-rect").css("border", "1px solid #c9c9c9");

     $("#net_banking .bank-rect input").attr('checked', false);

     var netbanking_select = $(this).val();

     if (netbanking_select == "AXIB")

     {

         $("#bank-rect-id-1").css("border", "2px solid #00adf2");

         $("#bank-rect-id-1 input").prop('checked', true);

     } else if (netbanking_select == "HDFB")

     {

         $("#bank-rect-id-2").css("border", "2px solid #00adf2");

         $("#bank-rect-id-2 input").prop('checked', true);

     } else if (netbanking_select == "ICIB")

     {

         $("#bank-rect-id-3").css("border", "2px solid #00adf2");

         $("#bank-rect-id-3 input").prop('checked', true);

     } else if (netbanking_select == "SBIB")

     {

         $("#bank-rect-id-4").css("border", "2px solid #00adf2");

         $("#bank-rect-id-4 input").prop('checked', true);

     } else {}

 });



 function validate_payment_method()

 {

     var order_id = $('#payment_order_id').val();
     var gst_business_type = $('#gst_business_type').val();

     var payment_type = $('#payment_type_select_container .left_list_pay li.active').attr('data-payment_type');

     var payment_method = $('#payment_type_select_container .left_list_pay li.active').attr('data-payment_method');



     $('.model_payment_type_error').html('');

     if (payment_method == "nb")

     {

         var flag = 1;

         var netbanking_select = $('#netbanking_select').val();

         if (netbanking_select == "" || netbanking_select == undefined)

         {

             flag = 0;

             $('#net_banking .model_payment_type_error').html('Please select bank');

         } else {

             $('#net_banking .model_payment_type_error').html('');

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#net_banking .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#net_banking .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#net_banking .model_payment_url').attr('href', 'javascript:void(0);');
                 }



             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#net_banking .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=" + netbanking_select + "&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#net_banking .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=" + netbanking_select + "&order_id=" + order_id);
                 } else {
                     $('#net_banking .model_payment_url').attr('href', 'javascript:void(0);');
                 }


             } else

             {

                 $('#net_banking .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "cc")

     {

         var flag = 1;

         if (payment_type == 'payu')

         {

             /* var credit_card_select = $('#credit_card_select').val();

             if(credit_card_select=="" || credit_card_select==undefined)

             	{

             		flag=0;

             		$('#credit_card .model_payment_type_error').html('Please select bank');

             	}

             else {

             		$('#credit_card .model_payment_type_error').html('');	

             	} */

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#credit_card .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('#credit_card .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#credit_card .model_payment_url').attr('href', 'javascript:void(0);');
                 }



             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {

                     $('#credit_card .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#credit_card .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('#credit_card .model_payment_url').attr('href', 'javascript:void(0);');
                 }


             } else

             {

                 $('#credit_card .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "dc")

     {

         var flag = 1;

         if (payment_type == 'payu')

         {

             /*

				var debit_card_select = $('#debit_card_select').val();

				if(debit_card_select=="" || debit_card_select==undefined)

					{

						flag=0;

						$('#debit_card .model_payment_type_error').html('Please select bank');

					}

				else {

						$('#debit_card .model_payment_type_error').html('');	

					} */

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#debit_card .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('#debit_card .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#debit_card .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {

                 if (gst_business_type == 'proprieter') {

                     $('#debit_card .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#debit_card .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('#debit_card .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('#debit_card .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "rmdc")

     {

         var flag = 1;

         /* var mestro_rupay_debit_card_select = $('#mestro_rupay_debit_card_select').val();

         if(mestro_rupay_debit_card_select=="" || mestro_rupay_debit_card_select==undefined)

         {

         	flag=0;

         	$('#rupemestro .model_payment_type_error').html('Please select bank');

         }

         else {

         	$('#rupemestro .model_payment_type_error').html('');	

         }	*/

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#rupemestro .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('#rupemestro .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#rupemestro .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {

                     $('#rupemestro .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=dc&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#rupemestro .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=dc&bankcode=&order_id=" + order_id);
                 } else {
                     $('#rupemestro .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('#rupemestro .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "paypal")

     {

         var flag = 1;

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#paypal .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('#paypal .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#paypal .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#paypal .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#paypal .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('#paypal .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('#paypal .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "upi")

     {

         var flag = 1;

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#upi .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('#upi .model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('#upi .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('#upi .model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('#upi .model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('#upi .model_payment_url').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('#upi .model_payment_url').attr('href', 'javascript:void(0);');

             }

         }

     } else {

         if (payment_type == 'paypal')

         {
             if (gst_business_type == 'proprieter') {
                 $('.model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

             } else if (gst_business_type == 'firm') {
                 $('.model_payment_url').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
             } else {
                 $('.model_payment_url').attr('href', 'javascript:void(0);');
             }

         } else if (payment_type == 'payu')

         {
             if (gst_business_type == 'proprieter') {
                 $('.model_payment_url').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
             } else if (gst_business_type == 'firm') {
                 $('.model_payment_url').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
             } else {
                 $('.model_payment_url').attr('href', 'javascript:void(0);');
             }

         } else {

             $('.model_payment_url').attr('href', 'javascript:void(0);');

         }

     }

 }

 function show_mobile_make_payment(select_opt)

 {

     if (select_opt == 'paypal' || select_opt == 'dc' || select_opt == 'cc') {
         $(".partial_pay.promotion_txt").show();
     } else {
         $(".partial_pay.promotion_txt").hide();
     }

     $(".model_payment_url_mobile").hide();

     $(".model_payment_url_mobile").removeClass("active");

     $(".model_payment_url_" + select_opt).show();

     $(".model_payment_url_" + select_opt).addClass("active");

 }





 function validate_payment_method_mobile(select_opt)

 {



     var order_id = $('#payment_order_id').val();
     var gst_business_type = $('#gst_business_type').val();

     var payment_type = $(".model_payment_url_" + select_opt).attr('data-payment_type');

     var payment_method = $(".model_payment_url_" + select_opt).attr('data-payment_method');



     $('.model_payment_type_error').html('');

     if (payment_method == "nb")

     {

         var flag = 1;

         var netbanking_select = $('#netbanking_select_mobile').val();

         if (netbanking_select == "" || netbanking_select == undefined)

         {

             flag = 0;

             $('.netbanking_options_container_mobile .model_payment_type_error').html('Please select bank');

         } else {

             $('.netbanking_options_container_mobile .model_payment_type_error').html('');

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=" + netbanking_select + "&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=" + netbanking_select + "&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_nb.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('.model_payment_url_nb.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "cc")

     {

         var flag = 1;

         if (payment_type == 'payu')

         {

             /* var credit_card_select_mobile = $('#credit_card_select_mobile').val();

             if(credit_card_select_mobile=="" || credit_card_select_mobile==undefined)

             	{

             		flag=0;

             		$('#credit_card_mobile .model_payment_type_error').html('Please select bank');

             	}

             else {

             		$('#credit_card_mobile .model_payment_type_error').html('');	

             	} */

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_cc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('.model_payment_url_cc.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "dc")

     {

         var flag = 1;

         if (payment_type == 'payu')

         {

             /*

				var debit_card_select_mobile = $('#debit_card_select_mobile').val();

				if(debit_card_select_mobile=="" || debit_card_select_mobile==undefined)

					{

						flag=0;

						$('#debit_card_mobile .model_payment_type_error').html('Please select bank');

					}

				else {

						$('#debit_card_mobile .model_payment_type_error').html('');	

					} */

         }

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {
                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {
                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_dc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }


             } else

             {

                 $('.model_payment_url_dc.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "rmdc")

     {

         var flag = 1;

         /* var mestro_rupay_debit_card_select_mobile = $('#mestro_rupay_debit_card_select_mobile').val();

         if(mestro_rupay_debit_card_select_mobile=="" || mestro_rupay_debit_card_select_mobile==undefined)

         {

         	flag=0;

         	$('.rupemestro_mobile .model_payment_type_error').html('Please select bank');

         }

         else {

         	$('.rupemestro_mobile .model_payment_type_error').html('');	

         }	*/

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=dc&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=dc&bankcode=&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('.model_payment_url_rmdc.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "paypal")

     {

         var flag = 1;

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('.model_payment_url_paypal.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else if (payment_method == "upi")

     {

         var flag = 1;

         if (flag == 1)

         {

             if (payment_type == 'paypal')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
                 } else {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else if (payment_type == 'payu')

             {


                 if (gst_business_type == 'proprieter') {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else if (gst_business_type == 'firm') {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
                 } else {
                     $('.model_payment_url_upi.model_payment_url_mobile').attr('href', 'javascript:void(0);');
                 }

             } else

             {

                 $('.model_payment_url_upi.model_payment_url_mobile').attr('href', 'javascript:void(0);');

             }

         }

     } else {

         if (payment_type == 'paypal')

         {

             if (gst_business_type == 'proprieter') {
                 $('.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/prop?order_id=" + order_id);

             } else if (gst_business_type == 'firm') {
                 $('.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/paypal_payment/firm?order_id=" + order_id);
             } else {
                 $('.model_payment_url_mobile').attr('href', 'javascript:void(0);');
             }

         } else if (payment_type == 'payu')

         {
             if (gst_business_type == 'proprieter') {
                 $('.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_prop?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
             } else if (gst_business_type == 'firm') {
                 $('.model_payment_url_mobile').attr('href', Base_URL + "finance/gst/payment_firm?pg=" + payment_method + "&bankcode=&order_id=" + order_id);
             } else {
                 $('.model_payment_url_mobile').attr('href', 'javascript:void(0);');
             }

         } else {

             $('.model_payment_url_mobile').attr('href', 'javascript:void(0);');

         }

     }

 }



 $("#net_banking_mobile .bank-rect").on('click', function(e) {

     $("#net_banking_mobile .bank-rect").css("border", "1px solid #c9c9c9");

     $("#net_banking_mobile .bank-rect input").attr('checked', false);

     var nb_selected_value = $(this).attr('data-id');

     if (nb_selected_value != "" && nb_selected_value != undefined)

     {

         $("#netbanking_select_mobile").val(nb_selected_value);

     }

     $(this).css("border", "2px solid #00adf2");

     $(this).find('input').prop('checked', true);

 });

 $("#netbanking_select_mobile").on('change', function(e) {

     $("#netbanking_select_mobile .bank-rect").css("border", "1px solid #c9c9c9");

     $("#netbanking_select_mobile .bank-rect input").attr('checked', false);

     var netbanking_select = $(this).val();

     if (netbanking_select == "AXIB")

     {

         $("#bank-rect-id-1_m").css("border", "2px solid #00adf2");

         $("#bank-rect-id-1_m input").prop('checked', true);

     } else if (netbanking_select == "HDFB")

     {

         $("#bank-rect-id-2_m").css("border", "2px solid #00adf2");

         $("#bank-rect-id-2_m input").prop('checked', true);

     } else if (netbanking_select == "ICIB")

     {

         $("#bank-rect-id-3_m").css("border", "2px solid #00adf2");

         $("#bank-rect-id-3_m input").prop('checked', true);

     } else if (netbanking_select == "SBIB")

     {

         $("#bank-rect-id-4_m").css("border", "2px solid #00adf2");

         $("#bank-rect-id-4_m input").prop('checked', true);

     } else {}

 });





 $(function() {



     function toggleChevron(e) {

         $(e.target)

             .prev('.panel-heading')

             .find("i")

             .toggleClass('rotate-icon');

         $('.panel-body.animated').toggleClass('zoomIn zoomOut');

     }



     $('#accordion').on('hide.bs.collapse', toggleChevron);

     $('#accordion').on('show.bs.collapse', toggleChevron);

 })

 $(document).ready(function() {

     $(".model_payment_btn_mobile").hide();
     // $(".fix_footer_amount").hide();
     // $('#headingOne').on('click', function () {
     // 	$(".fix_footer_amount").toggle();
     // });

     $("#payment_model_close").on('click', function() {
         $(".mobile_accordian").css('display', 'none');
     });

     $("#mob_close").on('click', function() {
         $(".mobile_accordian").css('display', 'none');
     });


     $(".model_popup_btn_mobile").click(function(argument) {
         $(".mobile_accordian").css("display", "block");
     });


 });

 $(function() {
     $('.inner_acordian').click(function() {
         $(this).parent().siblings().children().removeClass('bg_change_ac');
         $(this).addClass('bg_change_ac');
     });
 });