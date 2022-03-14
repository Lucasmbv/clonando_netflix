$('.owl-carousel').owlCarousel({
    loop:true,
    //Habilita e desabilita o carrosel infinito.
    margin:10,
    //Margem entre os elementos do carrosel.
    nav:true,
    //Habilita e desabilita as setas que permite percorrer imagem por imagem.
    responsive:{
        //RESPONSIVIDADE
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
            //Quando a tela tiver 1000px, será mostrado 5 elementos.
        }
    }
})