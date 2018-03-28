// Page3
Room.Page3 = {};
Room.Page3.dom = ()=>{

    $$("#HBoxMenu3 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper3.HBox.activeIndex)-id)*260+260;
        Dom.swiper3.HBox.slideTo(id, time, false);

        $("#Page3 .YearMenu").removeClass("act");
        $("#Page3 .YearMenuId"+id).addClass("act");

        Dom.swiper3.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu3 .bot").click(()=>{
        let time = parseInt(Dom.swiper3.HBox.activeIndex)*260+260;

        Dom.swiper3.HBox.slideTo(0, time, false);
        $("#Page3 .YearMenu").removeClass("act");
        $("#Page3 .YearMenuId0").addClass("act");

        Dom.swiper.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page3 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper3.DBList[id].slidePrev();
    });

    $$("#Page3 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper3.DBList[id].slideNext();
    });

    $$("#Page3 .pagebox3").click(function(){
        let id = $(this).data("id");
        Room.Page3.ppt(id);
    });

    $$("#Page3 ._back").click(function(){
        Room.Page3.ppt_back();
    });

    $$(".Page3_Info .cls").click(function(){
        let id = $(this).data("id");
        Room.Page3_Info.ppt(id);
    });

    $$(".Page3_Info .bgx").click(function(){
        let id = $(this).data("id");
        Room.Page3_Info.ppt(id);
    });

};

Room.Page3.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Page3_Info"+id, "X", "Page3_Info"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Page3_Info"+id].show().velocity({ opacity: [1,0] }, 100);
    });

};

Room.Page3.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page3.come_before = (next)=>{

    Dom.swiper3.HBox.slideTo(0, 0, false);

    $$("#Page3 .Head").hide();
    $$("#Page3>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page3 #HBox3").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page3 #HBoxMenu3").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page3 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page3.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page3>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*5} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page3 #HBox3").velocity({ translateY:-30 }, {duration: time, delay:delay*6} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page3 #HBoxMenu3").velocity({ translateY:-30 }, {duration: time, delay:delay*7} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page3 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*8} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page3 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page3.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page3 .Head").hide();
    $$("#Page3>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page3 #HBox3").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page3 #HBoxMenu3").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page3 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page3 .Head").show();
        }});

};


Room.Page3_Info = {};
Room.Page3_Info.come_before = (next)=>{
    let $box = cc.m[cc.id].find(".box");
    $box.velocity({ translateY: 940 }, { duration: 0});
    next();
};
Room.Page3_Info.coming = ()=>{
    let $box = cc.m[cc.id].find(".box");
    $box.velocity({ translateY: 0 }, { duration: 220, complete:function(){
            Dom._unable.hide();
        }});
};

Room.Page3_Info.going= ()=>{
    let $box = cc.m[cc.old].find(".box");
    $box.velocity({ translateY: 940 }, { duration: 220});
};

Room.Page3_Info.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Page3", "Page3_Info", "X"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 300, display:"none", complete:()=>{
                Dom._unable.hide();
            }});
    });
};