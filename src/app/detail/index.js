/**
 * Created by MBENBEN on 2017/3/23.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
class detailCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout,apiurl,$location,$routeParams){
        $rootScope.currentFooter="home";
        this.$rootScope=$rootScope;
        this.api=api;
        this.$scope=$scope;
        this.$timeout=$timeout;
        this.apiurl=apiurl;
        this.name="这里是首页";
        this.$location=$location;
        this.$routeParams=$routeParams;

        this.getData();
    }
    getData(){
        let id=this.$routeParams.id;
        this.api.request('/member/get',{id})
            .then(data=>{
                this.data=data.data;
                this.data.thumb_url=this.apiurl+this.data.thumb_url;
            });
    }

}

register('yiyao').controller('detail/index',detailCtrl);