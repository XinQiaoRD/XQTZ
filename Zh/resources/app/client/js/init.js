var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");
    zh.server(init.view);
};


init.view = ()=>{
    zh.ini();

    let year = Base.year;
    if(!year.length) return;

    let year_word = Base.year_word;

    let View_HBox = _.template($("#View_HBox").html());
    let View_boxs = _.template($("#View_boxs").html());

    let HBox_html = "";
    let HBoxMenu_html = "";
    $("#HBox .swiper-wrapper").html(HBox_html);
    let $HBox = $("#HBox .swiper-wrapper");

    for(let i in year){

        let y = year[i];
        let json = {id:i, year:y};
        HBox_html = View_HBox(json);
        $HBox.append(HBox_html);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';

        let boxs_html = init.box(View_boxs);
        $("#Index .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $(".YearMenuId0").addClass("act");

    init.word();

    setTimeout(function(){
        init.swiper(year);

        zh.ini();
        zh.do();
        setTimeout(Room.Loader.ppt , 500);
    },300);



};

//处理每年的提案
init.box = (_view)=>{
    let html="";
    let json = {};
    for(let i=1; i<=8; i++){
        html+= _view(json)
    }
    return html;
};

//处理提案
init.word = ()=>{
    let word = Base.word;
    let View_Word = _.template($("#View_Word").html());
    let $CC = $("#CC");

    for(let i in word){
        let json = word[i];
        let Word_cc = View_Word(json);
        $CC.append(Word_cc);
    }

    setTimeout(()=>{
        $(".Word").show();

        Dom.Word_content = {};
        Dom.Word_back = {};
        Dom.Word_news = {};
        for(let i in word){
            Dom.Word_content["Word"+i] = new Swiper('#Word'+i+' .content .swiper-container', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '#Word'+i+' .content .swiper-scrollbar',
                },
                mousewheel: true,
            });

            Dom.Word_back["Word"+i] = new Swiper('#Word'+i+' .back .swiper-container', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '#Word'+i+' .back .swiper-scrollbar',
                },
                mousewheel: true,
            });

            Dom.Word_news["Word"+i] = new Swiper('#Word'+i+' .news .swiper-container', {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '#Word'+i+' .news .swiper-scrollbar',
                },
                mousewheel: true,
            });
        }

        $(".Word").hide();
    },200);



};

init.swiper = (year)=>{
    Dom.swiper = {};
    cc.m["Index"].show();
    Dom.swiper.HBox = new Swiper('#HBox', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $(".YearMenu").removeClass("act");
                $(".YearMenuId"+ids).addClass("act");
                Dom.swiper.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper.DBList = [];
    for(let i in year){
        Dom.swiper.DBList[i] = new Swiper('.DBList'+year[i], {
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Index"].hide();

};