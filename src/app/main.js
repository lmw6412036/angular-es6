/**
 * Created by MBENBEN on 2017/3/15.
 */
function getTpl(path) {
    return './app/'+path+'.html';
}
var app=angular.module("yiyao",['ngRoute',"oc.lazyLoad",'ngAnimate']);
app.constant('config',{
    "spid":'1001',
    "channel":'23',
    "sign":"3f52f63fad63c5dd209d28420977fb5d",
    "format":"JSON",
    "random":"1234",
    "oper":"127.0.0.1"
});

app.constant('apiurl','//114.215.146.233:83/');

app.constant('footer',[
    {name:"home",value:"首页"},
    {name:"categary",value:"分类"},
    {name:"fee",value:"优惠券"},
    {name:"my",value:"我的"}
]);


app.config(($routeProvider,$httpProvider)=>{
    $routeProvider.otherwise({
            redirectTo: '/index'
        });
    $httpProvider.interceptors.push('httpFilter');
});

app.run(($rootScope,footer)=>{
    var ua=window.navigator.userAgent.toLowerCase();
    if(ua.indexOf('android')>=0){
        $rootScope.brower="android";
    }else if(ua.indexOf('iphone')>=0){
        $rootScope.brower="iphone";
    }else{
        $rootScope.brower="pc";
    }

    if($rootScope.brower!="pc") {
        angular.element('html').css({
            fontSize: $(window).width() / 16
        });
    }
    $rootScope.footer=footer;
    $rootScope.footerGoto=(name)=>{
        location.hash=("#/"+name);
    };
});