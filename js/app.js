(function(){

    $sidebarBoard = $('#sidebarBoard');
    $('#showBoard').on('click', function(){        
        $sidebarBoard.animate({
            left: '0'
        });
    });
    $('#closeBoard').on('click', function(){
        $sidebarBoard.animate({
            left: '-100%'
        })
    });
})();