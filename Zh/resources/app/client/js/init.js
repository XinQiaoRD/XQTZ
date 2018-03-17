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

    init.page1(year);
    init.page2(year);
    init.page3(year);
    init.page4(year);
    init.page5(year);
    init.word();

    setTimeout(function(){
        init.swiper(year);
        init.swiper2(year);
        init.swiper3(year);
        init.swiper4(year);
        init.swiper5(year);

        zh.ini();
        zh.do();
        setTimeout(Room.Loader.ppt , 500);
    },300);



};

//page1
init.page1 = (year)=>{
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

//page2
init.page2 = (year)=>{
    let View_HBox = _.template($("#View_HBox2").html());

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

        // let boxs_html = init.box(View_boxs, y);
        // $("#Page2 .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu2").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page2 .YearMenuId0").addClass("act");
};

//page3
init.page3 = (year)=>{
    let View_HBox = _.template($("#View_HBox3").html());

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

        // let boxs_html = init.box(View_boxs, y);
        // $("#Page2 .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu3").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page3 .YearMenuId0").addClass("act");
};

//page4
init.page4 = (year)=>{
    let View_HBox = _.template($("#View_HBox4").html());

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

        // let boxs_html = init.box(View_boxs, y);
        // $("#Page2 .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu4").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page4 .YearMenuId0").addClass("act");
};

//page5
init.page5 = (year)=>{
    let View_HBox = _.template($("#View_HBox5").html());

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

        // let boxs_html = init.box(View_boxs, y);
        // $("#Page2 .DBList"+y+" .swiper-wrapper").html(boxs_html);
    }

    $("#HBoxMenu5").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $("#Page5 .YearMenuId0").addClass("act");
};

//处理每年的提案
init.box = (_view, y)=>{
    let html="";
    let year = Base.year_word[y];
    let json = {};
    for(let i in year){
        let id = year[i];
        json = Base.word[id];
        console.log(json);
        html+= _view(json);
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
    cc.m["Page1"].show();
    Dom.swiper.HBox = new Swiper('#HBox', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
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

init.swiper2 = (year)=>{
    Dom.swiper2 = {};
    cc.m["Page2"].show();
    Dom.swiper2.HBox = new Swiper('#HBox2', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
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
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '#Page2 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Page2"].hide();

};

init.swiper3 = (year)=>{
    Dom.swiper3 = {};
    cc.m["Page3"].show();
    Dom.swiper3.HBox = new Swiper('#HBox3', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page3 .YearMenu").removeClass("act");
                $("#Page3 .YearMenuId"+ids).addClass("act");
                Dom.swiper3.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper3.DBList = [];
    for(let i in year){
        Dom.swiper3.DBList[i] = new Swiper('#Page3 .DBList'+year[i], {
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '#Page3 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Page3"].hide();

};

init.swiper4 = (year)=>{
    Dom.swiper4 = {};
    cc.m["Page4"].show();
    Dom.swiper4.HBox = new Swiper('#HBox4', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
        on:{
            slideChangeTransitionEnd: function(){

                let ids = this.activeIndex;
                $("#Page4 .YearMenu").removeClass("act");
                $("#Page4 .YearMenuId"+ids).addClass("act");
                Dom.swiper4.DBList[ids].slideTo(0, 0, false);

            }
        },
    });

    Dom.swiper4.DBList = [];
    for(let i in year){
        Dom.swiper4.DBList[i] = new Swiper('#Page4 .DBList'+year[i], {
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '#Page4 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Page4"].hide();

};

init.swiper5 = (year)=>{
    Dom.swiper5 = {};
    cc.m["Page5"].show();
    Dom.swiper5.HBox = new Swiper('#HBox5', {
        direction: 'vertical',
        spaceBetween: 80,
        longSwipesRatio:0.3,
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
            slidesPerView: 2,
            slidesPerColumn: 2,
            longSwipesRatio:0.3,
            spaceBetween: 30,
            pagination: {
                el: '#Page5 .swiper-pagination-box'+year[i],
                clickable: true,
            },
        });
    }

    cc.m["Page5"].hide();

};