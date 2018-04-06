//page7
init.page7 = ()=>{

    let year = Base.page7.year;
    if(!year.length) return;

    let View_HBox = _.template($("#View_HBox7").html());
    let View_PageBox = _.template($("#View_PageBox7").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    let $HBox = $("#HBox7 .swiper-wrapper");
    $HBox.html(HBox_html);

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let page_html = init.page7_box(View_PageBox, y);
        $("#Page7 .DBList"+y+" .swiper-wrapper").html(page_html);
        //
        // let ids = Base.page7.year_id[y];
        // let menu_li = "";
        // for(let it in ids){
        //     menu_li+= '<li data-id="'+i+'" data-y="'+y+'">' + Base.page7.work[ids[it]].nm + '</li>';
        // }
        // $("#Page7 ._Page7_Swiper_Titles"+y+" ul").html(menu_li);
        // $("#Page7 ._Page7_Swiper_Titles"+y+" ul li:first").addClass("act");
        //
        let img_ids = Base.page7.year_id[y];
        let menu_img_li = "";
        for(let i in img_ids){

            let imgs = Base.page7.inspect[img_ids[i]].imgs;
            menu_img_li = "";
            for(let it in imgs){
                menu_img_li+= '<div class="swiper-slide"><img width="620" height="450" src="../../uploads/page7/'+imgs[it]+'" alt=""></div>';
            }
            $("#Page7 .ImgList"+y+"_"+Base.page7.inspect[img_ids[i]].id+" .swiper-wrapper").html(menu_img_li);
        }


    }

    $("#HBoxMenu7").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page7 .YearMenuId0").addClass("act");


};

init.page7_box = (_view, y)=>{
    let html="";
    let year = Base.page7.year_id[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page7.inspect[id];
        html+= _view(json);
    }

    return html;
};

init.swiper7 = ()=>{
    let year = Base.page7.year;
    if(!year.length) return;

    Dom.swiper7 = {};
    cc.m["Page7"].show();
    Dom.swiper7.HBox = new Swiper('#HBox7', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page7 .YearMenu").removeClass("act");
                $("#Page7 .YearMenuId"+ids).addClass("act");
                Dom.swiper7.DBList[ids].slideTo(0, 0, false);

            }
        },
    });
    //
    Dom.swiper7.DBList = [];
    for(let i in year){
        Dom.swiper7.DBList[i] = new Swiper('#Page7 .DBList'+year[i], {
            longSwipesRatio:0.3,
            // spaceBetween: 30,
            // allowTouchMove:false
            // on:{
            //     slideChangeTransitionEnd: function(){
            //         let ids = this.activeIndex;
            //         $("#Page7 ._Page7_Swiper_Titles"+year[i]+" ul li").removeClass("act");
            //         $("#Page7 ._Page7_Swiper_Titles"+year[i]+" ul li:eq("+ids+")").addClass("act");
            //         $("#Page7 ._Page7_Swiper_Titles"+year[i]+" ul").css("margin-left", ids*-150);
            //     }
            // },
        });

        for(let it in Base.page7.year_id[year[i]]){
            let id = Base.page7.year_id[year[i]][it];
            new Swiper('#Page7 .ImgList'+year[i]+"_"+id, {
                longSwipesRatio:0.3,
                // spaceBetween: 30,
                pagination: {
                    el: '#Page7 .ImgListPag'+year[i]+"_"+id,
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

    // new Swiper('#Page7 ._PageWord4 .swiper-container', {
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     scrollbar: {
    //         el: '#Page7 ._PageWord4 .swiper-scrollbar',
    //     },
    //     mousewheel: true
    // });



    cc.m["Page7"].hide();

};