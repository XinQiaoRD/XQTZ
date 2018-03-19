//page4
init.page4 = ()=>{

    let year = Base.page4.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox4").html());
    let View_PageBox = _.template($("#View_PageBox4").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox4 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page_html = init.page4_box(View_PageBox, y);
        $("#Page4 .DBList"+y+" .swiper-wrapper").html(page_html);

        let ids = Base.page4.year_id[y];
        let menu_li = "";
        for(let it in ids){
            menu_li+= '<li data-id="'+i+'" data-y="'+y+'">' + Base.page4.work[ids[it]].nm + '</li>';
        }
        $("#Page4 ._Page4_Swiper_Titles"+y+" ul").html(menu_li);
        $("#Page4 ._Page4_Swiper_Titles"+y+" ul li:first").addClass("act");

        let img_ids = Base.page4.year_img_id[y];
        let menu_img_li = "";
        for(let i in img_ids){
            menu_img_li+= '<div class="swiper-slide"><img src="../../uploads/page4/'+Base.page4.work_img[img_ids[i]].img+'" alt=""></div>';
        }
        $("#Page4 .ImgList"+y+" .swiper-wrapper").html(menu_img_li);

    }

    $("#HBoxMenu4").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page4 .YearMenuId0").addClass("act");


};

init.page4_box = (_view, y)=>{
    let html="";
    let year = Base.page4.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page4.work[id];
        html+= _view(json);
    }

    return html;
};

init.swiper4 = ()=>{
    let year = Base.page4.year;
    if(!year.length) return;

    Dom.swiper4 = {};
    cc.m["Page4"].show();
    Dom.swiper4.HBox = new Swiper('#HBox4', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page4 .YearMenu").removeClass("act");
                $("#Page4 .YearMenuId"+ids).addClass("act");
                Dom.swiper4.DBList[ids].slideTo(0, 0, false);

            }
        },
    });
    //
    Dom.swiper4.DBList = [];
    for(let i in year){
        Dom.swiper4.DBList[i] = new Swiper('#Page4 .DBList'+year[i], {
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            on:{
                slideChangeTransitionEnd: function(){
                    let ids = this.activeIndex;
                    $("#Page4 ._Page4_Swiper_Titles"+year[i]+" ul li").removeClass("act");
                    $("#Page4 ._Page4_Swiper_Titles"+year[i]+" ul li:eq("+ids+")").addClass("act");
                    $("#Page4 ._Page4_Swiper_Titles"+year[i]+" ul").css("margin-left", ids*-150);
                }
            },
        });

        new Swiper('#Page4 .ImgList'+year[i], {
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            pagination: {
                el: '#Page4 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    new Swiper('#Page4 ._PageWord4 .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '#Page4 ._PageWord4 .swiper-scrollbar',
        },
        mousewheel: true
    });



    cc.m["Page4"].hide();

};