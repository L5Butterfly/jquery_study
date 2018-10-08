/**
 * 开始编写js文件
 */

$(document).ready(function(){
    demo1();
    demo2();
    demo3();

});


function demo1(){
    $("#but2").click(function(e){
        // 获取输入框的元素值
        phone=$("#test").val();
        alert(phone);
        console.log("phone: " +phone);
    });
}

function demo2(){
    $("#but3").click(function(e){
        // 获取输入框的元素值
        var elm=$(".foo");
        //$("#test2").attr("value",elm.text());
        $("#test2").val(elm.text());
        console.log(elm.text());
    });

    //清除输入框值
    $("#clear").click(function (e) {
        $("#test2").val("");
    });
}

function demo3(){
    $("#but1").click(function(e){
        //jq 对象列表
        var pe=$("p");
        console.log(pe);
        console.log(pe[0],pe[1]);
        //pe.slideToggle();
        // i 循环里面的索引
        pe.each(function(i){
            console.log("item"+i+":"+$(this).text());
        });
    });
}


/**
 * 获取元素的内容
 * @param x
 */
function load_info(x) {
    var tip=$("#myDiv").text();
    console.log(tip);
    alert(tip);
    console.log(x);
    
}