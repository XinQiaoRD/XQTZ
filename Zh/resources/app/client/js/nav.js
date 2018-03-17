Room.Loader = {};
Room.Loader.ppt = ()=>{
    let Start = "Nav";
    cc.ppt(["Loader", Start, "", "X"] , (after)=>{
        cc.m["Loader"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000);
    })
};

// Nav
Room.Nav = {};
Room.Nav.dom = ()=>{

    $$("#Nav .btn1").click(()=>{
        Room.Nav.ppt(1);
    });
    $$("#Nav .btn2").click(()=>{
        Room.Nav.ppt(2);
    });
    $$("#Nav .btn3").click(()=>{
        Room.Nav.ppt(3);
    });
    $$("#Nav .btn4").click(()=>{
        Room.Nav.ppt(4);
    });
    $$("#Nav .btn5").click(()=>{
        Room.Nav.ppt(5);
    });

};
Room.Nav.going = ()=>{
    let time = 150;
    let delay = 100;
    $$("#Nav .tit").velocity({ translateY:[30,0] }, {duration: time}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Nav .btn1").velocity({ translateY:[30,0] }, {duration: time, delay:delay*1}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Nav .btn2").velocity({ translateY:[30,0] }, {duration: time, delay:delay*2}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Nav .btn3").velocity({ translateY:[30,0] }, {duration: time, delay:delay*3}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Nav .btn4").velocity({ translateY:[30,0] }, {duration: time, delay:delay*4}).velocity({ translateY:[-1000,0] }, {duration: time});
    $$("#Nav .btn5").velocity({ translateY:[30,0] }, {duration: time, delay:delay*5}).velocity({ translateY:[-1000,0] }, {duration: time});
};

Room.Nav.come_before = (next)=>{
    $$("#Nav .btn img").css("opacity", 0);
    $$("#Nav .tit").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Nav .btn1").velocity({ translateY:1080, opacity:1 }, {duration: 0} );
    $$("#Nav .btn2").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Nav .btn3").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Nav .btn4").velocity({ translateY:1080 }, {duration: 0} );
    $$("#Nav .btn5").velocity({ translateY:1080 }, {duration: 0, complete:function(){
            next();
        }} );
};
Room.Nav.coming = ()=>{

    let time = 230;
    let delay = 100;

    $$("#Nav .tit").velocity({ translateY:-30 }, {duration: time, delay:delay*3} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Nav .btn1").velocity({ translateY:-30 }, {duration: time, delay:delay*4} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Nav .btn2").velocity({ translateY:-30 }, {duration: time, delay:delay*5} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Nav .btn3").velocity({ translateY:-30 }, {duration: time, delay:delay*6} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Nav .btn4").velocity({ translateY:-30 }, {duration: time, delay:delay*7} ).velocity({ translateY:0 }, {duration: time} );
    $$("#Nav .btn5").velocity({ translateY:-30 }, {duration: time, delay:delay*8} ).velocity({ translateY:0 }, {duration: time, complete:()=>{
            Dom._unable.hide();
        }} );

};

Room.Nav.ppt = (id)=>{
    Dom._unable.show();

    $$("#Nav .btn"+id+" img").velocity({ opacity: [1, 0] }, { duration: 500 , complete:()=>{

        cc.ppt([cc.id, "Page"+id] , (after)=>{
            cc.m[cc.old].velocity({ opacity: [1, 0] }, { duration: 10, delay:100*7, display:"none"});
            cc.m["Page"+id].show();
        });

    }});


};