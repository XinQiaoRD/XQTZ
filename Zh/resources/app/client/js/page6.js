// Page6
Room.Page6 = {};
Room.Page6.dom = ()=>{

    $$("#HBoxMenu6 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper6.HBox.activeIndex)-id)*260+260;
        Dom.swiper6.HBox.slideTo(id, time, false);

        $("#Page6 .YearMenu").removeClass("act");
        $("#Page6 .YearMenuId"+id).addClass("act");

        Dom.swiper6.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu6 .bot").click(()=>{
        let time = parseInt(Dom.swiper6.HBox.activeIndex)*260+260;

        Dom.swiper6.HBox.slideTo(0, time, false);
        $("#Page6 .YearMenu").removeClass("act");
        $("#Page6 .YearMenuId0").addClass("act");

        Dom.swiper6.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page6 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper6.DBList[id].slidePrev();
    });

    $$("#Page6 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper6.DBList[id].slideNext();
    });

    $("._Page6_Swiper_Titles li").each(function(i){
        $(this).click(function(){
            let id = $(this).data("id");
            let y = $(this).data("y");
            Dom.swiper6.DBList[id].slideTo(i, 200, false);
            $("#Page6 ._Page6_Swiper_Titles"+y+" ul li").removeClass("act");
            $("#Page6 ._Page6_Swiper_Titles"+y+" ul li:eq("+i+")").addClass("act");
            $("#Page6 ._Page6_Swiper_Titles"+y+" ul").css("margin-left", i*-150);
        })
    });

    $$("#Page6 ._back").click(function(){
        Room.Page6.ppt_back();
    });

};


Room.Page6.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page6.come_before = (next)=>{

    Dom.swiper6.HBox.slideTo(0, 0, false);

    $$("#Page6 .Head").hide();
    $$("#Page6>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page6 #HBox6").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page6 #HBoxMenu6").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page6 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page6.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page6>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*9} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page6 #HBox6").velocity({ translateY:-30 }, {duration: time, delay:delay*10} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page6 #HBoxMenu6").velocity({ translateY:-30 }, {duration: time, delay:delay*11} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page6 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*12} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page6 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page6.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page6 .Head").hide();
    $$("#Page6>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page6 #HBox6").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page6 #HBoxMenu6").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page6 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page6 .Head").show();
        }});

};