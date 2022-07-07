function Router() {
    //接受所有的配置路由内容：锚 和 函数方法
    this.routes = {};
    //接受 改变后的 hash值
    this.curUrl = '';
    //将定义的所有路由和函数方法 传给 routes
    this.route = function (path, callback) {
        this.routes[path] = callback || function () {};
        console.log('routes[path]:'+this.routes[path])
    };
    //hash 值改变时触发的 函数方法
    this.refresh = function () {
        //获取改变的hash值（url中锚 # 号后面的文本）
        this.curUrl = location.hash.slice(1) || '';
        this.routes[this.curUrl]();
        console.log('location.hash:'+location.hash);
        console.log('curUrl:'+this.curUrl);
        console.log('this.routes[this.curUrl]:'+this.routes[this.curUrl])
    };
    //监听load（加载url）、hashchange（hash改变）事件
    this.init = function () {
        window.addEventListener('load',this.refresh.bind(this),false);
        window.addEventListener('hashchange',this.refresh.bind(this),false)
    }
}
var R = new Router();//使用Router构造器

R.init();//监听时间

var res = document.getElementById('result');//读取id为result的元素
//定义所有需要用的 路由：hash值和函数加载的内容
R.route('sy',function () {
    document.getElementById('pa_menu').style.display = 'none';
    changehash()
})
R.route('pa',function () {
    document.getElementById('pa_menu').style.display = 'block';
    pa_tsne()
    changehash()
})
R.route('84k',function () {
    document.getElementById('k_menu').style.display = 'block';
    changehash()
})

R.route('pt',function () {
    document.getElementById('pt_menu').style.display = 'block';
    changehash()
})

// 匹配相应的页面
function changehash(){
    let hash = location.hash;
    var sections = document.getElementsByTagName('section')

    hash = hash.replace('#','');
    for(var i=0;i<sections.length;i++) {
        if(sections[i].getAttribute("id") != hash) {
            sections[i].style.display = "none";
        }
        else{sections[i].style.display = "block";}
    }
}


// 切换展示区域内容
/*------------------populous alba-------------------------*/
function pa_tsne(){
    document.getElementById('pa_t').style.display = 'block';
    document.getElementById('pa_u').style.display = 'none';
    document.getElementById('pa_h').style.display = 'none';

}
function pa_umap(){
    document.getElementById('pa_t').style.display = 'none';
    document.getElementById('pa_u').style.display = 'block';
    document.getElementById('pa_h').style.display = 'none';

}
function pa_hm(){
    document.getElementById('pa_t').style.display = 'none';
    document.getElementById('pa_u').style.display = 'none';
    document.getElementById('pa_h').style.display = 'block';
}

/*-----------------------84k-------------------------------*/
function k_tsne(){
    document.getElementById('k_t').style.display = 'block';
    document.getElementById('k_u').style.display = 'none';
    document.getElementById('k_h').style.display = 'none';
    document.getElementById('k_p').style.display = 'none';
}
function k_umap(){
    document.getElementById('k_t').style.display = 'none';
    document.getElementById('k_u').style.display = 'block';
    document.getElementById('k_h').style.display = 'none';
    document.getElementById('k_p').style.display = 'none';
}
function k_hm(){
    document.getElementById('k_t').style.display = 'none';
    document.getElementById('k_u').style.display = 'none';
    document.getElementById('k_h').style.display = 'block';
    document.getElementById('k_p').style.display = 'none';
}
function k_pt(){
    document.getElementById('k_t').style.display = 'none';
    document.getElementById('k_u').style.display = 'none';
    document.getElementById('k_h').style.display = 'none';
    document.getElementById('k_p').style.display = 'block';
}
