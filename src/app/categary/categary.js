/**
 * Created by MBENBEN on 2017/3/16.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
class categaryCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout,$routeParams){
        $rootScope.currentFooter="categary";
        this.$rootScope=$rootScope;
        this.api=api;
        this.$routeParams=$routeParams;
        this.getData();
    }
    getData(){
        if(this.$routeParams&&this.$routeParams.shopId){
            let shopId=this.$routeParams.shopId;
        }else{
            let shopId=1;
        }
        this.api.request("yidao.shop.item.list",{shopId})
            .then(data=>{
                if(data.code==0){
                    this.list=data.list;
                }
            })
    }
}

register('yiyao').controller('categary/categary',categaryCtrl);