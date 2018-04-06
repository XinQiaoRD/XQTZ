// Page1
Room.Page1 = {};
Room.Page1.dom = ()=>{

    $$("#HBoxMenu .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper.HBox.activeIndex)-id)*260+260;
        Dom.swiper.HBox.slideTo(id, time, false);

        $("#Page1 .YearMenu").removeClass("act");
        $("#Page1 .YearMenuId"+id).addClass("act");

        Dom.swiper.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu .bot").click(()=>{
        let time = parseInt(Dom.swiper.HBox.activeIndex)*260+260;

        Dom.swiper.HBox.slideTo(0, time, false);
        $("#Page1 .YearMenu").removeClass("act");
        $("#Page1 .YearMenuId0").addClass("act");

        Dom.swiper.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page1 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slidePrev();
    });

    $$("#Page1 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slideNext();
    });

    $$("#Page1 ._boxs .boxs_photo").click(function(){
        let id = $(this).data("id");
        Room.Page1.ppt(id);
    });

    $$("#Page1 ._boxs .boxs_tit").click(function(){
        let id = $(this).data("id");
        Room.Page1.ppt(id);
    });

    $$("#Page1 ._boxs .boxs_desc").click(function(){
        let id = $(this).data("id");
        Room.Page1.ppt(id);
    });

    $$("#Page1 ._back").click(function(){
        Room.Page1.ppt_back();
    });

};

Room.Page1.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Word"+id, "X", "Word"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Word"+id].show().velocity({ opacity: [1,0] }, 100, ()=>{
            //after.come();
            after.come();
        });
    });

};

Room.Page1.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page1.come_before = (next)=>{

    Dom.swiper.HBox.slideTo(0, 0, false);

    $$("#Page1 .Head").hide();
    $$("#Page1>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page1 #HBox").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page1 #HBoxMenu").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page1 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page1.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page1>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*9} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page1 #HBox").velocity({ translateY:-30 }, {duration: time, delay:delay*10} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page1 #HBoxMenu").velocity({ translateY:-30 }, {duration: time, delay:delay*11} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page1 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*12} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page1 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page1.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page1 .Head").hide();
    $$("#Page1>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page1 #HBox").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page1 #HBoxMenu").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page1 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page1 .Head").show();
        }});

};