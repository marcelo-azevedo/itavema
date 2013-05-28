<!-- //Efeitos Formulários (Exibir e ocultar dica de texto)// -->
$(document).ready(function() {
    $('input[type="text"]').addClass("idleField");
    $('input[type="text"]').focus(function() {
        $(this).removeClass("idleField").addClass("focusField");
        if (this.value == this.defaultValue){ 
            this.value = '';
        }
        if(this.value != this.defaultValue){
            this.select();
        }
    });
    $('input[type="text"]').blur(function() {
        $(this).removeClass("focusField").addClass("idleField");
        if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
        }
    });
});

// INDEX

<!--  //Abas// -->
$(function() { $( "#tabs" ).tabs(); });

<!--  //EasySlider (Promoções)// -->
$(document).ready(function(){
	$("#slider").easySlider({
		auto: true,
		continuous: true,
		numeric:true
	});
});

<!-- //Orbit slider (Slider principal - home)// -->
$(window).load(function() {
	$('#featured').orbit();
});

<!-- //Tooltip marcas// -->
jQuery(document).ready(function() {
    jQuery('#select-volks-link').mouseenter(function() { jQuery('#sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sVolks').show(); });
    jQuery('#select-chev-link').mouseenter(function() { jQuery('#sVolks, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sChev').show(); });
    jQuery('#select-peugeot-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sPeugeot').show(); });
    jQuery('#select-mv-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sMV').show(); });
    jQuery('#select-jeep-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sJeep').show(); });
    jQuery('#select-mercedez-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sMercedez').show(); });
    jQuery('#select-dodge-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sDodge').show(); });
    jQuery('#select-dafra-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sDafra').show(); });
    jQuery('#select-seminovos-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sSeminovos').show(); });
    jQuery('#select-volvo-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sVolvo').show(); });
    jQuery('#select-fiat-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sFiat').show(); });
    jQuery('#select-ford-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sFord').show(); });
    jQuery('#select-toyota-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sToyota').show(); });
    jQuery('#select-renault-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sRenault').show(); });
    jQuery('#select-land-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sLand').show(); });
    jQuery('#select-nissan-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sNissan').show(); });
    jQuery('#select-hyundai-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sCitroen, #sChrysler, #sMitsubishi').hide(); jQuery('#sHyundai').show(); });
    jQuery('#select-citroen-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sChrysler, #sMitsubishi').hide(); jQuery('#sCitroen').show(); });
    jQuery('#select-chrysler-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sMitsubishi').hide(); jQuery('#sChrysler').show(); });
    jQuery('#select-mitsubishi-link').mouseenter(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler').hide(); jQuery('#sMitsubishi').show(); });
    //jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler').mouseleave(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler').hide(); });
    jQuery('#select-volks-link, #select-chev-link, #select-peugeot-link, #select-mv-link, #select-jeep-link, #select-mercedez-link, #select-dodge-link, #select-dafra-link, #select-seminovos-link, #select-volvo-link, #select-fiat-link, #select-ford-link, #select-toyota-link, #select-renault-link, #select-land-link, #select-nissan-link, #select-hyundai-link, #select-citroen-link, #select-chrysler-link, #select-mitsubishi-link').mouseleave(function() { jQuery('#sVolks, #sChev, #sPeugeot, #sMV, #sJeep, #sMercedez, #sDodge, #sDafra, #sSeminovos, #sVolvo, #sFiat, #sFord, #sToyota, #sRenault, #sLand, #sNissan, #sHyundai, #sCitroen, #sChrysler, #sMitsubishi').hide(); });

});

function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
	  e.style.display = 'none';
	else
	  e.style.display = 'block';
}

<!-- //Carrossel destaques seminovos// -->
$(function() {
    //	Scrolled by user interaction
    $('#slide-carros').carouFredSel({
        prev: '#prev2',
        next: '#next2',
        pagination: "#pager2",
        auto: false
    });
});


// Lojas

$(function() {
    $( "#article-tabela-serv dl, #article-lojas dl, #article-vendas-diretas dl" ).accordion({
      active: false,
      collapsible: true,
      heightStyle: "content",
      header: 'dt'
    });
});

$(document).ready(function() {
    $("a.abreFoto").fancybox({
        'overlayShow'   : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'zoomSpeedIn'       :   500,
        'zoomSpeedOut'      :   500
    });
});








