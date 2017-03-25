/**
 * Created by MBENBEN on 2017/3/16.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
class categaryCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout,$routeParams,$location){
        $rootScope.currentFooter="categary";
        this.$rootScope=$rootScope;
        this.$location=$location;
        this.api=api;
        this.$routeParams=$routeParams;
        this.getData();
    }
    getData(){
        let fid=53;
        this.api.request("/coclass/getByFid",{fid})
            .then(data=>{
                if(data.code==0){
                    this.list=data.data;
                    console.log(this.list);
                }
            })
    }
    goto(fid){
        this.$location.url('/list?fid='+fid);
    }
}

register('yiyao').controller('categary/categary',categaryCtrl);