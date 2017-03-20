/**
 * Created by MBENBEN on 2017/3/15.
 */
app.config(($routeProvider)=>{
    $routeProvider.when('/index',{
        //首页
        templateUrl: getTpl('index/index'),
        controller: 'index/index',
        controllerAs:'vm',
        resolve:{
            requirejs:($ocLazyLoad)=>{
                return $ocLazyLoad.load(['lib/swiper/swiper.min.js']);
            },
            requirecss:($ocLazyLoad)=>{
                return $ocLazyLoad.load('lib/swiper/swiper.min.css');
            }
        }
    });
});