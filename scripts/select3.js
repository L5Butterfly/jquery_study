$(document).ready(function() {
    $('.multiselect').multiselect({
        buttonClass: 'btn',
        buttonWidth: 'auto',
        buttonText: function(options) {
            if (options.length == 0) {
                return '选择';
            }
            else {
                var selected = '';
                options.each(function() {
                    selected += $(this).text() + ',';
                });
                return selected.substr(0, selected.length -1) ;
            }
        },
    });
});