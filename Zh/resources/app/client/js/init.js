var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");

    zh.server(init.view);

    // for(var i=1; i<=7; i++){
    //     Dis.view(i);
    // }
    //
    // zh.ini();
    // zh.do();
    // setTimeout(Room.Loader.ppt , 500);
};

init.view = ()=>{
    init.index();

    init.run();
};

init.index = ()=>{

    let year = Base.year;
    if(!year.length) return;

    let year_word = Base.year_word;
    let word = Base.word;

    let View_HBox = _.template($("#View_HBox").html());
    let HBox_html = "";
    let HBoxMenu_html = "";

    for(let i in year){

        let y = year[i];
        let json = {year:y};
        HBox_html+= View_HBox(json);

        HBoxMenu_html+= '<div class="box HammerYearMenu HammerYearMenuId'+i+'">'+y+'</div>';
    }

    $("#HBox").html(HBox_html);
    $("#HBoxMenu").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');

    $(".HammerYearMenuId0").addClass("act");

    for(let i in year){
        $$(".HammerYearMenuId"+i).click(()=>{
            Dom.HammerHBox.go(i);
        })
    }

    setTimeout(function(){
        Dom.HammerHBox = new HammerYear("#HBox","#HBoxMenu", 880, year.length);
    },200);

    //


    // var html_m = "",
    //     html_menu = "",
    //     html_case = "";
    //
    // for(var i in page){
    //
    //     var p1 = page[i];
    //     p1.id = id;
    //     p1.i = parseInt(i)+1;
    //     html_case = "";
    //     for(var c in p1.case){
    //         html_case+= '<li><img src="../../uploads/page1/'+p1.case[c]+'"></li>';
    //     }
    //     p1.caseLi = html_case;
    //
    //     html_m += View_page1_m(p1);
    //     html_menu += View_page1_menu(p1);
    //
    // }

    // var json = {m:html_m};
    // var html = View_page1(json);
    // $("#CC").append(html);


};

init.run = ()=>{
    zh.ini();
    zh.do();
    setTimeout(Room.Loader.ppt , 500);
};