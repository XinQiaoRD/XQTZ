zh.Server = {};
zh.View = {};

zh.loader = ()=>{
    Dom._unable = $("#_unable");

    zh.server(zh.view);

    // for(var i=1; i<=7; i++){
    //     Dis.view(i);
    // }
    //
    // zh.ini();
    // zh.do();
    // setTimeout(Room.Loader.ppt , 500);
};

zh.view = (id)=>{

    return;
    var html = "";
    for(var i=1; i<=Dis.conf["p"+id]; i++){
        html+= '<div class="swiper-slide"><img src="../../../../assets/img/page'+id+'/'+i+'.png" alt=""></div>';
    }

    $("#Page"+id+" .swiper-wrapper").html(html);
};