$(document).ready(function() {

    $.ajax({
        'url': 'database/lista_faqs.php',
        'method': 'GET',
        'success': function(faqs) {
            for (var i = 0; i < faqs.length; i++) {
                // recupero la faq corrente
                var faq = faqs[i];
                // creo un contenitore per questa faq
                var faq_container = $('<div class="faq"></div>');
                // appendo al contenitore di questa faq il titolo della domanda
                faq_container.append('<h1 class="titolo_faq">' + faq.domanda + '</h1>');
                // appendo al contenitore di questa faq il contenitore dei paragrafi
                faq_container.append('<div class="risposta_faq"></div>');
                
                // N.B.: faq.risposta è un array che contiene tutti i paragrafi
                for (var j = 0; j < faq.risposta.length; j++) {
                    var paragrafo = faq.risposta[j];
                    // inserisco questo paragrafo nel contenitore della risposta
                    faq_container.find('.risposta_faq').append('<p>' + paragrafo +'</p>');
                }

                // appendo il contenitore di questa faq alla section
                $('#faqs').append(faq_container);
            }
        },
        'error': function() {
            console.log('si è verificato un errore');
        }
    });


    $('#faqs').on('click', '.titolo_faq', function() {
        $(this).next('.risposta_faq').slideToggle();
    });

});
