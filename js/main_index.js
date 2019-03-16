$(".login").click(function(){

    $('.usd1').bPopup({

            speed: 650,
            transition: 'slideIn',
            transitionClose: 'slideBack',

            onOpen: function() {  },
            onClose: function() { }
        },
        function() {
            // alert('Callback fired');
        });
});


$(".mainb").click(function(){

    $('.usd2').bPopup({

            speed: 650,
            transition: 'slideIn',
            transitionClose: 'slideBack',

            onOpen: function() {  },
            onClose: function() { }
        },
        function() {
            // alert('Callback fired');
        });
});

// $( ".menuitem" ).eq(1).addClass("ulli");
// $(window).scroll(function(){
//   var sticky = $('.menuitem'),
//       scroll = $(window).scrollTop();

//     if (scroll >= $(window).height()) 
//         {
//             $( ".menuitem" ).eq(1).removeClass("ulli");
//             $( ".menuitem" ).eq(2).addClass("ulli");
//         }
//     });