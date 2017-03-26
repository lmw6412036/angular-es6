/**
 * Created by MBENBEN on 2017/3/26.
 */
app.filter('html',($sce,apiurl)=>{
    return (i,p)=>{
        let out=i||'';
        out=out.replace(/style="[^"]+"/gi,'');
        out=out.replace(/src="([^"]+)"/gi,"src='"+apiurl+"$1'");
        out=$sce.trustAsHtml(out);
        return out;
    }
});