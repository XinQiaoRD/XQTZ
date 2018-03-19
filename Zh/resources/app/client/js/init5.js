//page5
init.page5 = ()=>{

    let year = Base.page5.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox5").html());
    let View_PageBox = _.template($("#View_PageBox5").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox5 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page_html = init.page5_box(View_PageBox, y);
        $("#Page5 .DBList"+y+" .swiper-wrapper").html(page_html);


    }

    $("#HBoxMenu5").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page5 .YearMenuId0").addClass("act");


    //内容
    let View_Page = _.template($("#View_Page5_Info").html());
    let $CC = $("#CC");
    let project = Base.page5.project;
    let Page_html = "";
    for(let i in project){
        let json =project[i];
        Page_html = View_Page(json);
        $CC.append(Page_html);
    }
};

init.page5_box = (_view, y)=>{
    let html="";
    let year = Base.page5.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page5.project[id];
        html+= _view(json);
    }

    return html;
};

init.swiper5 = ()=>{
    let year = Base.page5.year;
    if(!year.length) return;

    Dom.swiper5 = {};
    cc.m["Page5"].show();
    Dom.swiper5.HBox = new Swiper('#HBox5', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page5 .YearMenu").removeClass("act");
                $("#Page5 .YearMenuId"+ids).addClass("act");
                Dom.swiper5.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper5.DBList = [];
    for(let i in year){
        Dom.swiper5.DBList[i] = new Swiper('#Page5 .DBList'+year[i], {
            slidesPerView: 3,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            pagination: {
                el: '#Page5 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }


    cc.m["Page5"].hide();

};