// Descrizione:
// Sviluppiamo il fratello maggiore del dropdown visto oggi in classe.
// Dobbiamo copiare la nav da questo sito https://www.revolut.com/en-IT/ e sviluppare il suo dropdown.
// Mi raccomando: solo la prima parte, solo la navbar.
// In questo caso quindi lavoreremo anche lato HTML. Sviluppiamo il nostro html + css e il nostro codice jquery per far comparire o sparire il dropdown menu.



$(document).ready(function(){


  $('.navbar-main .menu .link').click(function(){
    // Chiudi tutti i dropdown
    $('.navbar-main .menu .link .dropdown-box').css('display','none');

    // Apri/chiudi menu dropdown quand link viene cliccato
    $(this).find('.dropdown-box').fadeToggle();
  })


});
