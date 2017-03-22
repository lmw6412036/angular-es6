/**
 * Created by MBENBEN on 2017/3/16.
 */
class httpFilter{
    /*@ngInject*/
    constructor($rootScope,$timeout){

    }
    request(config){
        if(config.method=="POST"){
            angular.element(".loading").removeClass('hide').addClass('show');
        }
        return config;
    }
    response(response){
        if(response.config.method=="POST"){
            angular.element(".loading").removeClass('show').addClass('hide');
        }
        return response;
    }
}

register('yiyao').factory('httpFilter',httpFilter);

class api{
    /*@ngInject*/
    constructor($http,config,apiurl){
        this.$http=$http;
        this.config=config;
        this.url=apiurl+'api';
    }
    request(restful,options){
        let config=this.config;
        //config.service=service;
        let data=angular.extend({},config,options);
        return this.$http.post(this.url+restful,data).then(data=>data.data);
    }
}
register('yiyao').service("api",api);