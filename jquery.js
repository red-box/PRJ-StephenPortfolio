$(document).ready(function(){
    $('.genreButton').click(function(){
        thisId = $(this).attr('id'); 
        $(`#${thisId}`).toggleClass(`${thisId}Active`)
    })
})