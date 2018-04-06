var Progress = function(num){
    Log("$$$$【Server.loader】目前完成："+num+"%");
    if(num==100) num=99;
    $$("#Loader .word").html("正在更新资料中，已完成："+num+"%");
};

var Download ={};
Download.down = function(){

    var serv = zh.conf.server+"/uploads/person/";
    var local = Url.fs+"uploads/person/";

    for(var i in Base.page1.person){
        var p = Base.page1.person[i];
        var rs = p.person;
        if(rs.head) Server.save(serv , local, rs.head, rs.head_size);
        if(rs.photo) Server.save(serv , local, rs.photo, rs.photo_size);
    }

    serv = zh.conf.server+"/uploads/word/";
    local = Url.fs+"uploads/word/";

    for(var i in Base.page1.word){
        var rs = Base.page1.word[i];
        if(rs.news_img1) Server.save(serv , local, rs.news_img1, rs.news_img1_size);
        if(rs.news_img2) Server.save(serv , local, rs.news_img2, rs.news_img2_size);
        if(rs.news_img3) Server.save(serv , local, rs.news_img3, rs.news_img3_size);
    }


    serv = zh.conf.server+"/uploads/receive/";
    local = Url.fs+"uploads/page2/";

    for(var i in Base.page2.receive){
        var rs = Base.page2.receive[i];
        if(rs.img) Server.save(serv , local, rs.img, rs.img_size);
    }

    serv = zh.conf.server+"/uploads/work/";
    local = Url.fs+"uploads/page4/";
    for(var i in Base.page4.work_img){
        var rs = Base.page4.work_img[i];
        if(rs.img) Server.save(serv , local, rs.img, rs.img_size);
    }

    serv = zh.conf.server+"/uploads/project/";
    local = Url.fs+"uploads/page5/";
    for(var i in Base.page5.project){
        var rs = Base.page5.project[i];
        if(rs.img) Server.save(serv , local, rs.img, rs.img_size);
    }

    serv = zh.conf.server+"/uploads/lead/";
    local = Url.fs+"uploads/page6/";
    for(var i in Base.page6.lead){
        var imgs = Base.page6.lead[i].imgs;
        var imgs_size = Base.page6.lead[i].imgs_size;
        for(var it in imgs){
            Server.save(serv , local, imgs[it], imgs_size[it]);
        }
    }

    serv = zh.conf.server+"/uploads/inspect/";
    local = Url.fs+"uploads/page7/";
    for(var i in Base.page7.inspect){
        var imgs = Base.page7.inspect[i].imgs;
        var imgs_size = Base.page7.inspect[i].imgs_size;
        for(var it in imgs){
            Server.save(serv , local, imgs[it], imgs_size[it]);
        }
    }

};