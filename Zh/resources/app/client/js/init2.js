//page2
init.page2 = ()=>{

    let year = Base.page2.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox2").html());
    let View_PageBox = _.template($("#View_PageBox2").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox2 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page2_html = init.page2_box(View_PageBox, y);
        $("#Page2 .DBList"+y+" .swiper-wrapper").html(page2_html);

        let ids = Base.page2.year_id[y];
        let menu_li = "";
        for(let i in ids){
            menu_li+= '<li>' +
                '<span>'+Base.page2.receive[ids[i]].title+'</span>' +
                '<div class="pot"></div>' +
                '</li>';
        }
        $("#Page2 ._Page2_Swiper_Titles"+y+" ul").html(menu_li);
        $("#Page2 ._Page2_Swiper_Titles"+y+" ul li:first").addClass("act");

    }

    $("#HBoxMenu2").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page2 .YearMenuId0").addClass("act");



};

init.page2_box = (_view, y)=>{
    let html="";
    let year = Base.page2.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page2.receive[id];
        html+= _view(json);
    }

    return html;
};

init.swiper2 = ()=>{
    let year = Base.page2.year;
    if(!year.length) return;

    Dom.swiper2 = {};
    cc.m["Page2"].show();
    Dom.swiper2.HBox = new Swiper('#HBox2', {
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

    Dom.swiper2.DBList = [];
    for(let i in year){
        Dom.swiper2.DBList[i] = new Swiper('#Page2 .DBList'+year[i], {
            longSwipesRatio:0.3,
            on:{
                slideChangeTransitionEnd: function(){

                    let ids = this.activeIndex;


                    $("#Page2 ._Page2_Swiper_Titles"+year[i]+" ul li").removeClass("act");
                    $("#Page2 ._Page2_Swiper_Titles"+year[i]+" ul li:eq("+ids+")").addClass("act");
                    $("#Page2 ._Page2_Swiper_Titles"+year[i]+" ul").css("margin-left", ids*-150);

                }
            },
        });
    }

    new Swiper('#Page2 ._PageWord2 .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '#Page2 ._PageWord2 .swiper-scrollbar',
        },
        mousewheel: true
    });

    cc.m["Page2"].hide();

};