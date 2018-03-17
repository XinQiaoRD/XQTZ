// Page2
Room.Page2 = {};
Room.Page2.dom = ()=>{

    $$("#HBoxMenu2 .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper2.HBox.activeIndex)-id)*260+260;
        Dom.swiper2.HBox.slideTo(id, time, false);

        $("#Page2 .YearMenu").removeClass("act");
        $("#Page2 .YearMenuId"+id).addClass("act");

        Dom.swiper2.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu2 .bot").click(()=>{
        let time = parseInt(Dom.swiper2.HBox.activeIndex)*260+260;

        Dom.swiper2.HBox.slideTo(0, time, false);
        $("#Page2 .YearMenu").removeClass("act");
        $("#Page2 .YearMenuId0").addClass("act");

        Dom.swiper2.DBList[0].slideTo(0, 0, false);
    });

    $$("#Page2 ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper2.DBList[id].slidePrev();
    });

    $$("#Page2 ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper2.DBList[id].slideNext();
    });

    $$("#Page2 ._boxs .boxs_photo").click(function(){
        let id = $(this).data("id");
        Room.Page2.ppt(id);
    });

    $$("#Page2 ._back").click(function(){
        Room.Page2.ppt_back();
    });

};

Room.Page2.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Word"+id, "X", "Word"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Word"+id].show().velocity({ opacity: [1,0] }, 100, ()=>{
            //after.come();
            after.come();
        });
    });

};

Room.Page2.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page2.come_before = (next)=>{
    $$("#Page2 .Head").hide();
    $$("#Page2>.tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page2 #HBox2").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Page2 #HBoxMenu2").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Page2 ._back").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Page2.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Page2>.tit").velocity({ translateY:-30 }, {duration: time, delay:delay*5} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page2 #HBox2").velocity({ translateY:-30 }, {duration: time, delay:delay*6} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page2 #HBoxMenu2").velocity({ translateY:-30 }, {duration: time, delay:delay*7} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Page2 ._back").velocity({ translateY:-30 }, {duration: time, delay:delay*8} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            $$("#Page2 .Head").show();
            Dom._unable.hide();
        }} );

};
Room.Page2.going = function(){
    let time = 150;
    let delay = 100;
    $$("#Page2 .Head").hide();
    $$("#Page2>.tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page2 #HBox2").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0], opacity:0 }, {duration: time});
    $$("#Page2 #HBoxMenu2").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Page2 ._back").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time, complete:()=>{
            $$("#Page2 .Head").show();
        }});

};