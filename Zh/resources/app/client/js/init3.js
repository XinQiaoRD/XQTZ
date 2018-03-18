//page3
init.page3 = ()=>{

    let year = Base.page3.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox3").html());
    let View_PageBox = _.template($("#View_PageBox3").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox3 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page_html = init.page3_box(View_PageBox, y);
        $("#Page3 .DBList"+y+" .swiper-wrapper").html(page_html);


    }

    $("#HBoxMenu3").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page3 .YearMenuId0").addClass("act");


    //内容
    let View_Page = _.template($("#View_Page3_Info").html());
    let $CC = $("#CC");
    let message = Base.page3.message;
    let Page_html = "";
    for(let i in message){
        let json =message[i];
        Page_html = View_Page(json);
        $CC.append(Page_html);
    }
};

init.page3_box = (_view, y)=>{
    let html="";
    let year = Base.page3.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page3.message[id];
        if(json.back_btn) json.back_info = "<span>>查看处理情况</span>";
        else json.back_btn = "处理中";
        html+= _view(json);
    }

    return html;
};

init.swiper3 = ()=>{
    let year = Base.page3.year;
    if(!year.length) return;

    Dom.swiper3 = {};
    cc.m["Page3"].show();
    Dom.swiper3.HBox = new Swiper('#HBox3', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page2 .YearMenu").removeClass("act");
                $("#Page2 .YearMenuId"+ids).addClass("act");
                Dom.swiper2.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper3.DBList = [];
    for(let i in year){
        Dom.swiper3.DBList[i] = new Swiper('#Page3 .DBList'+year[i], {
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            pagination: {
                el: '#Page3 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }


    cc.m["Page3"].hide();

};