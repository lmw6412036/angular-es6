/**
 * Created by MBENBEN on 2017/3/23.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
app.config(($routeProvider)=>{
    $routeProvider.when('/detail',{
        //首页
        templateUrl: getTpl('detail/index'),
        controller: 'detail/index',
        controllerAs:'vm'
    });
});