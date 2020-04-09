$(document).ready(function(){
    /**Menu Toggle */
    $('.burgerMenu').click(function(){
        $('.menuWrapper').css('right','0%')
    })
    $('.menuClose').click(function(){
        $('.menuWrapper').css('right','-100%')
    })
    /**Genre Button Toggle */
    $('.genreButton').click(function(){
        thisId = $(this).attr('id'); 
        $(`#${thisId}`).toggleClass(`${thisId}Active`)
    })

})