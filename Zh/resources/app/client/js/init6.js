//page6
init.page6 = ()=>{

    let year = Base.page6.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox6").html());
    let View_PageBox = _.template($("#View_PageBox6").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox6 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page_html = init.page6_box(View_PageBox, y);
        $("#Page6 .DBList"+y+" .swiper-wrapper").html(page_html);
        //
        // let ids = Base.page6.year_id[y];
        // let menu_li = "";
        // for(let it in ids){
        //     menu_li+= '<li data-id="'+i+'" data-y="'+y+'">' + Base.page6.work[ids[it]].nm + '</li>';
        // }
        // $("#Page6 ._Page6_Swiper_Titles"+y+" ul").html(menu_li);
        // $("#Page6 ._Page6_Swiper_Titles"+y+" ul li:first").addClass("act");
        //
        let img_ids = Base.page6.year_id[y];
        let menu_img_li = "";
        for(let i in img_ids){

            let imgs = Base.page6.lead[img_ids[i]].imgs;
            menu_img_li = "";
            for(let it in imgs){
                menu_img_li+= '<div class="swiper-slide"><img width="620" height="450" src="../../uploads/page6/'+imgs[it]+'" alt=""></div>';
            }
            $("#Page6 .ImgList"+y+"_"+Base.page6.lead[img_ids[i]].id+" .swiper-wrapper").html(menu_img_li);
        }


    }

    $("#HBoxMenu6").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page6 .YearMenuId0").addClass("act");


};

init.page6_box = (_view, y)=>{
    let html="";
    let year = Base.page6.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page6.lead[id];
        html+= _view(json);
    }

    return html;
};

init.swiper6 = ()=>{
    let year = Base.page6.year;
    if(!year.length) return;

    Dom.swiper6 = {};
    cc.m["Page6"].show();
    Dom.swiper6.HBox = new Swiper('#HBox6', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page6 .YearMenu").removeClass("act");
                $("#Page6 .YearMenuId"+ids).addClass("act");
                Dom.swiper6.DBList[ids].slideTo(0, 0, false);

            }
        },
    });
    //
    Dom.swiper6.DBList = [];
    for(let i in year){
        Dom.swiper6.DBList[i] = new Swiper('#Page6 .DBList'+year[i], {
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            // allowTouchMove:false
            // on:{
            //     slideChangeTransitionEnd: function(){
            //         let ids = this.activeIndex;
            //         $("#Page6 ._Page6_Swiper_Titles"+year[i]+" ul li").removeClass("act");
            //         $("#Page6 ._Page6_Swiper_Titles"+year[i]+" ul li:eq("+ids+")").addClass("act");
            //         $("#Page6 ._Page6_Swiper_Titles"+year[i]+" ul").css("margin-left", ids*-150);
            //     }
            // },
        });

        for(let it in Base.page6.year_id[year[i]]){
            let id = Base.page6.year_id[year[i]][it];
            new Swiper('#Page6 .ImgList'+year[i]+"_"+id, {
                longSwipesRatio:0.3,
                // spaceBetween: 30,
                pagination: {
                    el: '#Page6 .ImgListPag'+year[i]+"_"+id,
                    clickable: true,
                },
                on: {
                    touchStart: function(event){
                        event.preventDefault();
                        event.stopPropagation();
                    },
                }
            });
        }


    }

    // new Swiper('#Page6 ._PageWord4 .swiper-container', {
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     scrollbar: {
    //         el: '#Page6 ._PageWord4 .swiper-scrollbar',
    //     },
    //     mousewheel: true
    // });



    cc.m["Page6"].hide();

};