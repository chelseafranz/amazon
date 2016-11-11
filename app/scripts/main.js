$(".showBtn").on('click', function(){
    $(".showMore").removeClass('hide');
    $(".showBtn").addClass("hide");
});

$(".hideBtn").on('click', function(){
    $(".showMore").addClass("hide");
    $(".showBtn").removeClass("hide");
});


//add line numbers to code blocks
(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();

$(".previous").attr('href','index.html');
$(".next").attr('href','index.html');
