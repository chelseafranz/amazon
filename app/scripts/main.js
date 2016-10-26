$('.showBtn').on('click', function(){
    $('.showMore').removeClass('hide');
    $('.showBtn').addClass('hide');
});

$('.hideBtn').on('click', function(){
    $('.showMore').addClass('hide');
    $('.showBtn').removeClass('hide');
});
