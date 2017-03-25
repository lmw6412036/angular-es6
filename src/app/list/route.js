/**
 * Created by MBENBEN on 2017/3/23.
 */
/**
 * Created by MBENBEN on 2017/3/15.
 */
app.config(($routeProvider)=>{
    $routeProvider.when('/list',{
        //首页
        templateUrl: getTpl('list/index'),
        controller: 'list/index',
        controllerAs:'vm'
    });
});