function iconsLoading() {

   $("head").append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />');

   $("head").append("<style>.material-symbols-outlined {font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24} .filled-icon {font-variation-settings:'FILL' 1}</style>");
  
   $(".mso").each(function() {
      
      $(this).addClass("material-symbols-outlined");
   });
   
   $(".msf").each(function() {
      
      $(this).addClass("material-symbols-outlined").addClass("filled-icon");
   });
}

$(document).ready(function () {

   iconsLoading();
});