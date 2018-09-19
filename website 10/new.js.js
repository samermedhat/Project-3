$(document).ready(function(){

$(".head .learn").mouseenter(function(){
$(".head .head2").animate({
width:260
});
});
$(".head .learn").mouseleave(function(){
$(".head .head2").animate({
width:0,  
});    
});

$(".why .learn").mouseenter(function(){
$(".why .head2").animate({
width:240,   
});      
});
$(".why .learn").mouseleave(function(){
$(".why .head2").animate({
width:0,  
});    
});

$(".set .learn").mouseenter(function(){
$(".set .head2").animate({width:270},function(){
$(".set .learn2").fadeIn() 
});  
});
$(".set .learn").mouseleave(function(){
$(".set .head2").animate({width:0},function(){  
$(".set .learn2").fadeOut(0)   
});  
});

$(".team .learn").mouseenter(function(){
$(".team .head2").animate({
width:200,   
});      
});
$(".team .learn").mouseleave(function(){
$(".team .head2").animate({
width:0,  
});    
});

jssor_1_slider_init = function() {
var jssor_1_options = {
$AutoPlaySteps: 4,
$SlideDuration: 160,
$SlideWidth: 200,
$SlideSpacing: 3,
$Cols: 4,
$ArrowNavigatorOptions: {
$Class: $JssorArrowNavigator$,
$Steps: 4
},
$BulletNavigatorOptions: {
$Class: $JssorBulletNavigator$,
$SpacingX: 1,
$SpacingY: 1
}
};
var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
function ScaleSlider() {
var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
if (refSize) {
refSize = Math.min(refSize, 809);
jssor_1_slider.$ScaleWidth(refSize);
}
else {
window.setTimeout(ScaleSlider, 30);
}
}
ScaleSlider();
$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", ScaleSlider);
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);

};    
jssor_1_slider_init(); 
    
$(".chil1 .learn").mouseenter(function(){
$(".chil1 .head2").animate({
width:280,   
});      
});
$(".chil1 .learn").mouseleave(function(){
$(".chil1 .head2").animate({
width:0,  
});    
});

$(".chil2 .learn").mouseenter(function(){
$(".chil2 .head2").animate({
width:280,   
});      
});
$(".chil2 .learn").mouseleave(function(){
$(".chil2 .head2").animate({
width:0,  
});    
});

$(".chil3 .learn").mouseenter(function(){
$(".chil3 .head2").animate({
width:280,   
});      
});
$(".chil3 .learn").mouseleave(function(){
$(".chil3 .head2").animate({
width:0,  
});    
});

$(".chil4 .learn").mouseenter(function(){
$(".chil4 .head2").animate({
width:280,   
});      
});
$(".chil4 .learn").mouseleave(function(){
$(".chil4 .head2").animate({
width:0,  
});    
});

$("form .learn").mouseenter(function(){
$("form .head2").animate({
width:200,   
});      
});
$("form .learn").mouseleave(function(){
$("form .head2").animate({
width:0,  
});    
});

$("form input").blur(function(){
$("form input").css("outline","none")    
});   
$("form input").focus(function(){
$("form input").css("outline","none")    
});   

$("form textarea").blur(function(){
$("form textarea").css("outline","none")    
});   
$("form textarea").focus(function(){ 
$("form textarea").css("outline","none")    
});   

$(".en4 .learn").mouseenter(function(){
$(".en4 .head2").animate({
width:200,   
});      
});
$(".en4 .learn").mouseleave(function(){
$(".en4 .head2").animate({
width:0,  
});    
});

$(".en4 input").blur(function(){
$(".en4 input").css("outline","none")    
});   
$(".en4 input").focus(function(){
$(".en4 input").css("outline","none")    
});   

    
    
    
    
    
 $(window).scroll(function(){
    
console.log($(this).scrollTop()) 


if($(window).scrollTop() >= 100){
    $(".top").animate({ 
       opacity: 1 
    });  
}
     
else if($(window).scrollTop() === 0)
    {
    $(".top").animate({ 
       opacity: 0 
    });   
    }
   
     
     
$(".top").click(function(){
    
 $("html,body").animate({
     
    scrollTop:0 
     
 });   
    
});     
     
     

 }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});   