
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .top .container',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

function mobile_info_open(){
    var mobile_info= document.getElementById('mobile_info');
    mobile_info.classList.add('open');
}
function mobile_info_close(){
    mobile_info.classList.remove('open');
}

let tab_box = document.querySelectorAll('.tab_box');
let content_section = document.querySelectorAll('.content_section');
for(let i=0; i<tab_box.length; i++){
    tab_box[i].addEventListener('click', function(){
        for(let i=0; i<content_section.length; i++){
            content_section[i].className= 'content_section';
        }
        document.getElementById(this.dataset.id).className = 'content_section active';
        for(let i=0; i<tab_box.length; i++){
            tab_box[i].className= 'tab_box';
            this.className = 'tab_box active';
        }
    })
}

var owl = $('#testi-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav:true,
     navText: [
         ("<img src='images/arrow1.png' />"),
         ("<img src='images/arrow2.png' />")
     ],
     autoplay:false,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
             margin: 0,
         },
         1000:{
             items: 1
         }
     }
 });


/*Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });*/



