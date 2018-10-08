

$(document).ready(function () {
    //test();
    //test2();
});


function test() {
    var f=$('ol').children();
    var e=$('ol').find("li");
    var a=$('li:first');   // 第一个元素
    var b= $('li:last');   // 最后一个元素
    console.log(a.text());
    console.log(b.text());
    $("p").addClass("select-x");

    e.each(function (i) {
        console.log($(this).text());
    });


    $.each(f,function (i) {
        console.log(i+":"+$(this).text());
    });


    var em=[];
    $("button").click(function (e) {
        $("p").addClass("select-y");
        $("p").removeClass("select-y");
    });


    e.map(function () {
        console.log("e:"+$(this).text());
        em.push($(this).text());
    });


    var aaa=e.map(function () {
        return $(this).text();
    }).get();

    console.log("type:"+typeof aaa);
    console.log("aaa:"+aaa);
    console.log("map:"+em);
}




function test2() {
    
}