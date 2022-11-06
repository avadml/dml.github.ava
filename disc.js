$(function() {
    $('ul#items li').click(function(){
        var item = $('.elem[data-item="' + $(this).attr('data-item') + '"]');
        if($(this).attr('data-item') == 'all') {
            $('div.elem').show();
            return;
        }
        item.show();                                     
        $('div.elem[data-item!="'+item.attr('data-item')+'"]').hide();
    });
});