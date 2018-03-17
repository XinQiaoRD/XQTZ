// Page3
Room.Page3 = {};
Room.Page3.dom = ()=>{

    // $$("#HBoxMenu3 .YearMenu").click(function(){
    //
    //     let id = $(this).data("id");
    //     let time = Math.abs(parseInt(Dom.swiper.HBox.activeIndex)-id)*260+260;
    //     Dom.swiper.HBox.slideTo(id, time, false);
    //
    //     $(".YearMenu").removeClass("act");
    //     $(".YearMenuId"+id).addClass("act");
    //
    //     Dom.swiper.DBList[id].slideTo(0, 0, false);
    // });
    //
    // $$("#HBoxMenu3 .bot").click(()=>{
    //     let time = parseInt(Dom.swiper.HBox.activeIndex)*260+260;
    //
    //     Dom.swiper.HBox.slideTo(0, time, false);
    //     $(".YearMenu").removeClass("act");
    //     $(".YearMenuId0").addClass("act");
    //
    //     Dom.swiper.DBList[0].slideTo(0, 0, false);
    // });
    //
    // $$("#Page3 ._yearBox .pre").click(function(){
    //     let id = $(this).data("id");
    //     Dom.swiper.DBList[id].slidePrev();
    // });
    //
    // $$("#Page3 ._yearBox .next").click(function(){
    //     let id = $(this).data("id");
    //     Dom.swiper.DBList[id].slideNext();
    // });

    $$("#Page3 ._boxs .boxs_photo").click(function(){
        let id = $(this).data("id");
        Room.Page3.ppt(id);
    });

    $$("#Page3 ._back").click(function(){
        Room.Page3.ppt_back();
    });

};

// Room.Page3.ppt = (id)=>{
//     Dom._unable.show();
//     cc.ppt([cc.id, "Word"+id, "X", "Word"] , (after)=>{
//         //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
//         cc.m["Word"+id].show().velocity({ opacity: [1,0] }, 100, ()=>{
//             //after.come();
//             after.come();
//         });
//     });
//
// };

Room.Page3.ppt_back = ()=>{
    cc.ppt([cc.id, "Nav"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*6,  display:"none"});
        cc.m["Nav"].show();
    });
};

Room.Page3.come_before = (next)=>{
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