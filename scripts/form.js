$(document).ready(function(){
    get_from_data();
    demo2();
});


/**
 * 自己封装json属性
 */
(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        $(this.serializeArray()).each(function () {
            serializeObj[this.name] = this.value;
        });
        return serializeObj;
    };
    $('#btn').click(function () {
        var data = $('#form').serializeJson();
        console.log(data);
    });
})(jQuery);


function get_from_data() {
    var fm=$("form");
    console.log(fm);
}



/**
 * 将form表单元素的值序列化成对象
 * param: form jquery form对象
 */
var serializeObject = function() {
    var form=$("form");
    var o = {};
    $.each(form.serializeArray(), function(index) {
        if (this['value'] != undefined && this['value'].length > 0) {// 如果表单项的值非空，才进行序列化操作
            if (o[this['name']]) {
                o[this['name']] = o[this['name']] + "," + this['value'];
            } else {
                o[this['name']] = this['value'];
            }
        }
    });
    return o;
};


function demo(){
    $("#but1").click(function(e){
        // 获取输入框的元素值
        console.log(serializeObject());
    });
}



function demo2(){
    $("#but1").click(function(e){
        // 获取输入框的元素值
        var form=$("form").serialize();
        console.log(form);
        // 调用serializeJson方法获取表单内容
        console.log($("form").serializeJson());
    });
}