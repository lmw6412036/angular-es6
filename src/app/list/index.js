/**
 * Created by MBENBEN on 2017/3/23.
 */
/**
 * Created by MBENBEN on 2017/3/16.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
class listCtrl{
    /*@ngInject*/
    constructor($rootScope,$scope,api,$timeout,$routeParams,apiurl,$location){
        this.api=api;
        this.apiurl=apiurl;
        this.area=0;
        this.fid=0;
        if($routeParams.fid){
            this.fid=$routeParams.fid;
        }
        this.$location=$location;
        this.getNav();
    }
    getNav(){
        let fid=58;
        this.api.request('/coclass/getByFid',{fid})
            .then((data)=>{
                let d=data.data;
                let areas=[
                    {id:0,value:'全部地区'}
                ];
                for(let i in d){
                    areas.push({
                        id:i,
                        value:d[i]
                    });
                }
                this.areas=areas;
                return this.api.request('/coclass/getByFid',{fid:53});
            })
            .then((data)=>{
                let d=data.data;
                let areas=[{id:0,value:"全部分类"}];
                for(let i in d){
                    areas.push({
                        id:i,
                        value:d[i]
                    });
                }
                this.fids=areas;
                this.getList();
            });
    }
    getList(){
        let szctype=this.fid;
        let area=this.area;
        let type="professor";
        this.api.request('/member/getSzc',{szctype,area,type})
            .then(data=>{
                this.list=data.data.map((item,index)=>{
                    item.thumb_url=this.apiurl+item.thumb_url;
                    return item;
                });
            })
    }
    change(t){
        this.getList();
    }
    goto(id){
        this.$location.url('/detail?id='+id);
    }
}
register('yiyao').controller('list/index',listCtrl);