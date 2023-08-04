/*버튼 연결 - nav.js*/
$( function () {
    
   $('#themeChange li').on('click',function(){
	   var clsName = $(this).children('a').attr('title');
	   //alert(clsName);
	   $('#themeChange li').removeClass();
	   
	   $(this).addClass('on');
	   $('#wrap').removeClass();
	   $('#wrap').addClass(clsName);
	   
	   
   });
   
   
   
    
} );

