let nbrSlide = 1;
const nbrSlides = 5;

$('#suivant').click(function(){
    $('#slide'+ nbrSlide).fadeOut(1000);
    nbrSlide= nbrSlide+1;
    if(nbrSlide>nbrSlides){
    nbrSlide=1
}
$('#slide'+nbrSlide).fadeIn(1000)

})
$('#precedent').click(function(){
    $('#slide'+ nbrSlide).fadeOut(1000);
    nbrSlide= nbrSlide-1;
    if(nbrSlide<1){
    nbrSlide=5
}
$('#slide'+nbrSlide).fadeIn(1000)

})