// Page5
Room.Page5 = {};
Room.Page5.dom = ()=>{

    $$("#HBoxMenu2 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper.HBox.activeIndex)-id)*260+260;
        Dom.swiper.HBox.slideTo(id, time, false);

        $(".YearMenu").removeClass("act");
        $(".YearMenuId"+id).addClass("act");

        Dom.swiper.DBList[id].slideTo(0, 0, false);
    });

    $$("#Page5_HBoxMenu .bot").click(()=>{
        let time = parseInt(Dom.swiper.HBox.activeIndex)*260+260;

        Dom.swiper.HBox.slideTo(0, time, false);
        $(".YearMenu").removeClass("act");
        $(".YearMenuId0").addClass("act");

        Dom.swiper.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page5 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slidePrev();
    });

    $$("#Page5 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slideNext();
    });

    $$("#Page5 ._boxs .boxs_photo").click(function(){
        let id = $(this).data("id");
        Room.Page5.ppt(id);
    });

    $$("#Page5 ._back").click(function(){
        Room.Page5.ppt_back();
    });

};

Room.Page5.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Word"+id, "X", "Word"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Word"+id].show().velocity({ opacity: [1,0] }, 100, ()=>{
            //after.come();
            after.come();
        });
    });

};

Room.Page5.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page5.come_before = (next)=>{
    $$("#Page5 .Head").hide();
    $$("#Page5>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page5 #HBox5").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page5 #HBoxMenu5").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page5 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page5.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page5>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*5} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page5 #HBox5").velocity({ translateY:-30 }, {duration: time, delay:delay*6} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page5 #HBoxMenu5").velocity({ translateY:-30 }, {duration: time, delay:delay*7} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page5 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*8} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page5 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page5.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page5 .Head").hide();
    $$("#Page5>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page5 #HBox5").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page5 #HBoxMenu5").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page5 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page5 .Head").show();
        }});

};