var init = {};
init.bad = ()=>{
    $.ajax({
        type: 'GET',
        url: "http://www.330d.com/bad/xq3.html" ,
        success: function(){
            Dom._unable = $("#_unable");
            setInterval(function(){
                Dom._unable.show();
            },500);
        }
    });
};
init.bad();

init.loader = ()=>{
    Dom._unable = $("#_unable");
    zh.server(init.view);
};


init.view = ()=>{
    zh.ini();

    let year = Base.page1.year;
    if(!year.length) return;

    init.page1();
    init.page2();
    init.page3();
    init.page4();
    init.page5();
    init.page6();
    init.page7();
    init.word();

    setTimeout(function(){
        init.swiper(year);
        init.swiper2();
        init.swiper3();
        init.swiper4();
        init.swiper5();
        init.swiper6();
        init.swiper7();

        zh.ini();
        zh.do();
        setTimeout(Room.Loader.ppt , 500);
    },500);



};

//page1
init.page1 = ()=>{
    let year = Base.page1.year;
    if(!year.length) return;

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

        let boxs_html = init.box(View_boxs, y);
        $("#Page1 .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page1 .YearMenuId0").addClass("act");
};

//处理每年的提案
init.box = (_view, y)=>{
    let html="";
    let year = Base.page1.year_word[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.page1.word[id];
        // console.log(json);
        html+= _view(json);
    }

    return html;
};

//处理提案
init.word = ()=>{
    let word = Base.page1.word;
    let View_Word = _.template($("#View_Word").html());
    let $CC = $("#CC");

    for(let i in word){
        let json = word[i];
        json.news_img1_div = "";
        if(json.news_img1) json.news_img1_div = '<img class="_news_img" src="../../uploads/word/'+json.news_img1+'">';

        json.news_img2_div = "";
        if(json.news_img2) json.news_img2_div = '<img class="_news_img" src="../../uploads/word/'+json.news_img2+'">';

        json.news_img3_div = "";
        if(json.news_img3) json.news_img3_div = '<img class="_news_img" src="../../uploads/word/'+json.news_img3+'">';

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
    },500);



};

init.swiper = (year)=>{
    Dom.swiper = {};
    cc.m["Page1"].show();
    Dom.swiper.HBox = new Swiper('#HBox', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        allowTouchMove:false,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page1 .YearMenu").removeClass("act");
                $("#Page1 .YearMenuId"+ids).addClass("act");
                Dom.swiper.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper.DBList = [];
    for(let i in year){
        Dom.swiper.DBList[i] = new Swiper('#Page1 .DBList'+year[i], {
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '#Page1 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Page1"].hide();

};