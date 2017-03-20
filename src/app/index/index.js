/**
 * Created by MBENBEN on 2017/3/15.
 */
class indexCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout){
        $rootScope.currentFooter="home";
        this.$rootScope=$rootScope;
        this.api=api;
        this.$scope=$scope;
        this.$timeout=$timeout;
        this.name="这里是首页";
        let wh=this.initWandH();
        this.style={
            height:wh.h1+"px"
        };
        this.li={
            width:wh.w2
        };
        this.ava={
            width:wh.w2-20,
            height:wh.w2-20
        }
        this.nav=[
            {name:'青少年成长',class:'qsncz',url:""},
            {name:'老年保健',class:'lnbj',url:""},
            {name:'健康百科',class:'jkbk',url:""},
            {name:'女性健康',class:'nxjk',url:""},
            {name:'男性保养',class:'nxby',url:""}
        ].map((item)=>{
            if(item.class=="jkbk"){
                item.style={
                    width:wh.w+"px",
                    height:wh.h1+"px"
                };
            }else{
                item.style={
                    width:wh.w+"px",
                    height:wh.h2+"px"
                };
            }
            switch (item.class){
                case "qsncz":
                    item.style.left=0;
                    item.style.top=0;
                    break;
                case "lnbj":
                    item.style.left=(wh.w+5)+"px";
                    item.style.top=0;
                    break;
                case "jkbk":
                    item.style.right=0;
                    item.style.top=0;
                    break;
                case "nxjk":
                    item.style.left=0;
                    item.style.top=(wh.h2+5)+"px";
                    break;
                case "nxby":
                    item.style.left=(wh.w+5)+"px";
                    item.style.top=(wh.h2+5)+"px"
                    break;
            }
            return item;
        });
        this.getData();
    }
    getData(){
        this.api.request('/ad/lists',{}).then(data=>{
            console.log('二次data',data);
            if(data.code==0){
                this.adSettingList=data.adSettingList;
                this.shopItemList=data.shopItemList;
                this.shopProductList=data.shopProductList;
                this.$timeout(function () {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: 5000,//可选选项，自动滑动
                        pagination : '.swiper-pagination',
                    });
                },500);
            }
        });
    }
    initWandH(){
        let www=$(window).width();
        let w=(www-30)/3;
        let h1=29/21*w;
        let h2=(h1-5)/2;
        let w2=(www-30)/2;
        return {w,h1,h2,w2};
    }
}

register('yiyao').controller('index/index',indexCtrl);