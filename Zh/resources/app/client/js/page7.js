// Page7
Room.Page7 = {};
Room.Page7.dom = ()=>{

    $$("#HBoxMenu7 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper7.HBox.activeIndex)-id)*260+260;
        Dom.swiper7.HBox.slideTo(id, time, false);

        $("#Page7 .YearMenu").removeClass("act");
        $("#Page7 .YearMenuId"+id).addClass("act");

        Dom.swiper7.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu7 .bot").click(()=>{
        let time = parseInt(Dom.swiper7.HBox.activeIndex)*260+260;

        Dom.swiper7.HBox.slideTo(0, time, false);
        $("#Page7 .YearMenu").removeClass("act");
        $("#Page7 .YearMenuId0").addClass("act");

        Dom.swiper7.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page7 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper7.DBList[id].slidePrev();
    });

    $$("#Page7 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper7.DBList[id].slideNext();
    });

    $("._Page7_Swiper_Titles li").each(function(i){
        $(this).click(function(){
            let id = $(this).data("id");
            let y = $(this).data("y");
            Dom.swiper7.DBList[id].slideTo(i, 200, false);
            $("#Page7 ._Page7_Swiper_Titles"+y+" ul li").removeClass("act");
            $("#Page7 ._Page7_Swiper_Titles"+y+" ul li:eq("+i+")").addClass("act");
            $("#Page7 ._Page7_Swiper_Titles"+y+" ul").css("margin-left", i*-150);
        })
    });

    $$("#Page7 ._back").click(function(){
        Room.Page7.ppt_back();
    });

};


Room.Page7.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page7.come_before = (next)=>{

    Dom.swiper7.HBox.slideTo(0, 0, false);

    $$("#Page7 .Head").hide();
    $$("#Page7>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page7 #HBox7").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page7 #HBoxMenu7").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page7 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page7.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page7>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*9} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page7 #HBox7").velocity({ translateY:-30 }, {duration: time, delay:delay*10} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page7 #HBoxMenu7").velocity({ translateY:-30 }, {duration: time, delay:delay*11} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page7 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*12} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page7 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page7.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page7 .Head").hide();
    $$("#Page7>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page7 #HBox7").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page7 #HBoxMenu7").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page7 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page7 .Head").show();
        }});

};