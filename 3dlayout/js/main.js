$(document).ready(function(){
 // .btnMenu 버튼 클릭시 실행
    $( '.btnMenu' ).on( 'click', function () {
    
        // .btnMenu 서서히 사라짐 (this == .btnMenu)
        $( this ).fadeOut();    
        
        // section 에 클래스 on 을 추가시킨다.
        $( 'section' ).addClass('on');  
        
        // 메뉴에 클래스 on 을 추가시킨다.
        $( 'nav' ).addClass('on');
        
    } );
    
    
    // nav 의 메뉴 선택시 실행
    $( 'nav li' ).on( 'click', function () {
        
        // .btnMenu 서서히 보이기(.fadeIn())
        $( '.btnMenu' ).fadeIn();
        
        // section과 nav 의 on 클래스 제거
        $( 'section' ).removeClass( 'on' );
        $( 'nav' ).removeClass( 'on' );
        
        // 클릭한 li 의 인덱스(index) 번호를 가져와 저장
        var i = $( this ).index();
        
        // div의 기존 on 클래스 제거 후 선택한 li에 on 클래스 부여
        $( 'section > div' ).removeClass( 'on' )
                            .eq( i ).addClass( 'on' );
        
    } );

	
});















