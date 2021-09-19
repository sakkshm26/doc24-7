
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//     
//     }
//   }


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
// (function($) { 
//   $(function() { 
//     $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       $('.dropdown').not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//     });
//     $('#nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//     });
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//     });
//   }); 
// })(jQuery);


let responsive = document.querySelector('.toggle');
let view = document.querySelector('.nav ul');

responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block'


  }
  else{
    view.style.display = 'none'

  }
});
