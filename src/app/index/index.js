/**
 * Created by MBENBEN on 2017/3/15.
 */
class indexCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout,apiurl,$location){
        $rootScope.currentFooter="home";
        this.$rootScope=$rootScope;
        this.api=api;
        this.$scope=$scope;
        this.$timeout=$timeout;
        this.apiurl=apiurl;
        this.name="这里是首页";
        this.$location=$location;

        this.style={
            height:"10.8125rem"
        };
        this.nav=[
            {name:'小儿推拿',class:'tn',img:'01',url:"54"},
            {name:'艺术培训',class:'px',img:"02",url:"55"},
            {name:'儿童摄影',class:'sy',img:"03",url:"56"},
            {name:'调律师',class:'tl',img:"04",url:"57"}
        ].map((item)=>{
            switch (item.class){
                case "tn":
                    item.style={
                        width:"7.125rem",
                        height:"7.125rem",
                        left:0,
                        top:0
                    };
                    break;
                case "px":
                    item.style={
                        width:"7.125rem",
                        height:"3.4375rem",
                        left:"7.375rem",
                        top:0
                    };
                    break;
                case "sy":
                    item.style={
                        width:"7.125rem",
                        height:"3.4375rem",
                        left:"7.375rem",
                        top:'3.6875rem'
                    };
                    break;
                case "tl":
                    item.style={
                        width:"14.5rem",
                        height:"3.4375rem",
                        left:"0",
                        top:"7.375rem"
                    };
                    break;
            }
            return item;
        });
        this.getData();
    }
    getData(){
        this.api.request('/ad/lists',{type:64}).then(data=>{
            console.log('二次data',data);
            if(data.code==0){
                this.adSettingList=data.data.map((item,index)=> {
                    item.adImg=this.apiurl+item.thumb_url;
                    return item;
                });
                this.$timeout(function () {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: 5000,//可选选项，自动滑动
                        pagination : '.swiper-pagination',
                    });
                },1000);
            }
        });
    }
    goto(fid){
        this.$location.url('/list?fid='+fid);
    }

}

register('yiyao').controller('index/index',indexCtrl);