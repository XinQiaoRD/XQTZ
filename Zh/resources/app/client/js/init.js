var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");
    zh.server(init.view);
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
        let json = {id:i, year:y};
        HBox_html+= View_HBox(json);

        HBoxMenu_html+= '<div class="box YearMenu YearMenuId'+i+'" data-id="'+i+'" >'+y+'</div>';
    }

    $("#HBox .swiper-wrapper").html(HBox_html);
    $("#HBoxMenu").html('<div class="tit"></div>'+HBoxMenu_html+'<div class="bot"></div>');
    $(".YearMenuId0").addClass("act");

    setTimeout(function(){
        init.swiper(year);
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

init.run = ()=>{
    zh.ini();
    zh.do();
    setTimeout(Room.Loader.ppt , 500);
};