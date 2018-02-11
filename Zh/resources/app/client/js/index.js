Room.Loader = {};
Room.Loader.ppt = ()=>{
    let Start = "Index";
    cc.ppt(["Loader", Start] , (after)=>{
        cc.m["Loader"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000);
    })
};

// Index
Room.Index = {};
Room.Index.dom = ()=>{

    $$("#HBoxMenu .YearMenu").click(function(){

        let id = $(this).data("id");
        let time = Math.abs(parseInt(Dom.swiper.HBox.activeIndex)-id)*260+260;
        Dom.swiper.HBox.slideTo(id, time, false);

        $(".YearMenu").removeClass("act");
        $(".YearMenuId"+id).addClass("act");

        Dom.swiper.DBList[id].slideTo(0, 0, false);
    });

    $$("#HBoxMenu .bot").click(()=>{
        let time = parseInt(Dom.swiper.HBox.activeIndex)*260+260;

        Dom.swiper.HBox.slideTo(0, time, false);
        $(".YearMenu").removeClass("act");
        $(".YearMenuId0").addClass("act");

        Dom.swiper.DBList[0].slideTo(0, 0, false);
    });

    $$("#Index ._yearBox .pre").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slidePrev();
    });

    $$("#Index ._yearBox .next").click(function(){
        let id = $(this).data("id");
        Dom.swiper.DBList[id].slideNext();
    });

    $$("#Index ._boxs .boxs_photo").click(function(){
        let id = $(this).data("id");
        Room.Index.ppt(id);
    });

};

Room.Index.ppt = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Word"+id, "", "Word"] , (after)=>{
        //cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Word"+id].show().velocity({ opacity: [1,0] }, 100, ()=>{
            //after.come();
            after.come();
        });
    });

};