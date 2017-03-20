/**
 * Created by MBENBEN on 2017/3/16.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
app.config(($routeProvider)=>{
    $routeProvider.when('/categary',{
        //首页
        templateUrl: getTpl('categary/index'),
        controller: 'categary/categary',
        controllerAs:'vm'
    });
});