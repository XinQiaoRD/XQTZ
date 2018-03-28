// Page4
Room.Page4 = {};
Room.Page4.dom = ()=>{

    $$("#HBoxMenu4 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper4.HBox.activeIndex)-id)*260+260;
        Dom.swiper4.HBox.slideTo(id, time, false);

        $("#Page4 .YearMenu").removeClass("act");
        $("#Page4 .YearMenuId"+id).addClass("act");

        Dom.swiper4.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu4 .bot").click(()=>{
        let time = parseInt(Dom.swiper4.HBox.activeIndex)*260+260;

        Dom.swiper4.HBox.slideTo(0, time, false);
        $("#Page4 .YearMenu").removeClass("act");
        $("#Page4 .YearMenuId0").addClass("act");

        Dom.swiper4.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page4 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper4.DBList[id].slidePrev();
    });

    $$("#Page4 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper4.DBList[id].slideNext();
    });

    $("._Page4_Swiper_Titles li").each(function(i){
        $(this).click(function(){
            let id = $(this).data("id");
            let y = $(this).data("y");
            Dom.swiper4.DBList[id].slideTo(i, 200, false);
            $("#Page4 ._Page4_Swiper_Titles"+y+" ul li").removeClass("act");
            $("#Page4 ._Page4_Swiper_Titles"+y+" ul li:eq("+i+")").addClass("act");
            $("#Page4 ._Page4_Swiper_Titles"+y+" ul").css("margin-left", i*-150);
        })
    });

    $$("#Page4 ._back").click(function(){
        Room.Page4.ppt_back();
    });

};


Room.Page4.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page4.come_before = (next)=>{

    Dom.swiper4.HBox.slideTo(0, 0, false);

    $$("#Page4 .Head").hide();
    $$("#Page4>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page4 #HBox4").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page4 #HBoxMenu4").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page4 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page4.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page4>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*5} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page4 #HBox4").velocity({ translateY:-30 }, {duration: time, delay:delay*6} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page4 #HBoxMenu4").velocity({ translateY:-30 }, {duration: time, delay:delay*7} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page4 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*8} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page4 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page4.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page4 .Head").hide();
    $$("#Page4>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page4 #HBox4").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page4 #HBoxMenu4").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page4 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page4 .Head").show();
        }});

};