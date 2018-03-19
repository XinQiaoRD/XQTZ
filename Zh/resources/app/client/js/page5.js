// Page5
Room.Page5 = {};
Room.Page5.dom = ()=>{

    $$("#HBoxMenu5 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper5.HBox.activeIndex)-id)*260+260;
        Dom.swiper5.HBox.slideTo(id, time, false);

        $("#Page5 .YearMenu").removeClass("act");
        $("#Page5 .YearMenuId"+id).addClass("act");

        Dom.swiper5.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu5 .bot").click(()=>{
        let time = parseInt(Dom.swiper5.HBox.activeIndex)*260+260;

        Dom.swiper5.HBox.slideTo(0, time, false);
        $("#Page5 .YearMenu").removeClass("act");
        $("#Page5 .YearMenuId0").addClass("act");

        Dom.swiper5.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page5 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper5.DBList[id].slidePrev();
    });

    $$("#Page5 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper5.DBList[id].slideNext();
    });

    $$("#Page5 ._back").click(function(){
        Room.Page5.ppt_back();
    });

    $$("#Page5 .pagebox5").click(function(){
        let id = $(this).data("id");
        Room.Page5.ppt(id);
    });

    $$(".Page5_Info .cls").click(function(){
        let id = $(this).data("id");
        Room.Page5_Info.ppt(id);
    });

    $$(".Page5_Info .bgx").click(function(){
        let id = $(this).data("id");
        Room.Page5_Info.ppt(id);
    });

};

Room.Page5.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Page5_Info"+id, "X", "Page5_Info"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Page5_Info"+id].show().velocity({ opacity: [1,0] }, 100);
    });

};

Room.Page5.ppt_back = ()=>{
    console.log(cc.id);
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


Room.Page5_Info = {};
Room.Page5_Info.come_before = (next)=>{
    let $box = cc.m[cc.id].find(".box");
    $box.velocity({ translateY: 940 }, { duration: 0});
    next();
};
Room.Page5_Info.coming = ()=>{
    let $box = cc.m[cc.id].find(".box");
    $box.velocity({ translateY: 0 }, { duration: 220, complete:function(){
            Dom._unable.hide();
        }});
};

Room.Page5_Info.going= ()=>{
    let $box = cc.m[cc.old].find(".box");
    $box.velocity({ translateY: 940 }, { duration: 220});
};

Room.Page5_Info.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Page5", "Page5_Info", "X"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 300, display:"none", complete:()=>{
                Dom._unable.hide();
            }});
    });
};