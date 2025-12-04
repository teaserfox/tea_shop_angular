new WOW().init({
    animateClass: 'animate__animated',

});

$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});

$( "#accordion" ).accordion({
    collapsible: true,
    icons: {"header": "arrow-down", "activeHeader": "arrow-up"},
    heightStyle: "content"
});

// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 1
// });

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

$(document).ready(function() {

    $('body').on('input', '#autoSizingInputIndex', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('#request').on('click', function () {
        if (!$('#autoSizingInputName').val() || !$('#autoSizingInputUsername').val() || !$('#autoSizingInputPhone').val()
            || !$('#autoSizingInputState').val() || !$('#autoSizingInputIndex').val() || !$('#autoSizingInputAddress').val()) {
            alert('Пожалуйста, заполните все поля ввода');
            return;
        }
        if ($('#autoSizingInputIndex').val().length !== 6) {
            alert('Ошибка индекса, проверьте правильность ввода');
            return;
        } else {
            $('#order').attr('class', 'd-none');
            $('#order-block-none').removeAttr('class', 'd-none');
        }
    });
});

// $('#order').toggle();
