import{A as se,B as Oe,C as nt,s as xe,f as T,a as U,g as b,h as z,D as P,d as C,c as V,j as a,i as $,x as f,E as D,F as J,G as ce,H as We,y as Ee,I as we,J as ie,l as oe,e as Se,m as re,K as te,n as je,L as Ie,M as lt,p as ae,N as Xe}from"../chunks/scheduler.c12c5fa2.js";import{t as Q,a as F,S as Ce,i as Ze,f as ne,h as st,c as me,j as it,k as Ye,b as Qe,d as $e,m as et,e as tt,g as ve}from"../chunks/index.3a043c0e.js";function ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ot(n,e){Q(n,1,1,()=>{e.delete(n.key)})}function rt(n,e,t,l,o,i,s,c,r,_,d,Z){let p=n.length,u=i.length,m=p;const k={};for(;m--;)k[n[m].key]=m;const w=[],A=new Map,B=new Map,H=[];for(m=u;m--;){const v=Z(o,i,m),O=t(v);let N=s.get(O);N?l&&H.push(()=>N.p(v,e)):(N=_(O,v),N.c()),A.set(O,w[m]=N),O in k&&B.set(O,Math.abs(m-k[O]))}const x=new Set,g=new Set;function M(v){F(v,1),v.m(c,d),s.set(v.key,v),d=v.first,u--}for(;p&&u;){const v=w[u-1],O=n[p-1],N=v.key,L=O.key;v===O?(d=v.first,p--,u--):A.has(L)?!s.has(N)||x.has(N)?M(v):g.has(L)?p--:B.get(N)>B.get(L)?(g.add(N),M(v)):(x.add(L),p--):(r(O,s),p--)}for(;p--;){const v=n[p];A.has(v.key)||r(v,s)}for(;u;)M(w[u-1]);return se(H),w}const at="menu",ct=[{id:"coqonoschc7l6jd2",title:"胡萝卜炒牛肉",content:["原料：胡萝卜1根，牛肉 150-200g，姜葱","牛肉切条，胡萝卜切丝，葱姜切丝","切好的牛肉丝用黑胡椒、生抽、淀粉、一点盐，一点料酒腌制，加点油封一下肉会更嫩；","小火煸炒牛肉丝至变色捞出备用；","小火继续煸炒葱姜出香味；","下胡萝卜丝煸炒至变软，中途可以加半勺水；","再加入牛肉丝翻炒，可以再加少量的盐"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"1jh2wcsmnfwqdsiw",title:"虾皮炒黄瓜",content:["原料：黄瓜1根，虾皮20克，蒜2瓣调料：盐1/2茶匙（2克），糖1/2茶匙（2克）","黄瓜切滚刀片（就是按滚刀块的方法切，切一下转一下黄瓜，但是刀斜的角度大一些，切成稍薄稍长的片状），蒜切片。","锅内倒油，油温热后倒入蒜片炒香，倒入虾皮，翻炒几下后，放入黄瓜。","炒半分钟，加盐和糖，搅匀出锅即可。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"bogs5ii3s41nnzve",title:"黄瓜玉米粒",content:["原料：黄瓜1根，甜玉米1根","调料：盐1/2茶匙（3克）,黑胡椒碎1/3茶匙（2克）,牛奶2汤匙（30ml）","黄瓜刷净后切成1cm见方的小丁，将新鲜的甜玉米，用刀子取下玉米粒。","锅中倒入油，大火加热，待油温5成热时，先放入玉米粒炒1分钟，再放入黄瓜丁，然后撒入盐，翻炒均匀，淋入牛奶，最后加入黑胡椒碎，继续炒30秒，即可出锅。","玉米粒一定要用甜玉米粒（老玉米或者糯玉米，这点时间不会熟的），并且是新鲜的玉米粒，最好不要用速冻的，口感不好。","要注意材料放的顺序，先炒玉米粒，玉米粒炒到6成熟时，再放黄瓜丁，这样能保证黄瓜丁不老，玉米也熟了"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"vcto2hxbk6w0jzg2",title:"凉拌菠菜",content:["澥（xie）麻酱的方法是把麻酱倒碗里，慢慢加水，顺着一个方向搅拌稀释，到自然滴落的状态（用勺子舀起来，芝麻酱呈一条直线缓慢而连续的下落，像融化的冰淇淋汤儿似的）。","基础版：芝麻酱+生抽+老抽+醋+糖","清爽辛辣版：芝麻酱+生抽+米醋+盐+糖+青辣芥","腐乳浓香版：芝麻酱+腐乳碎+腐乳汁+蒜末+醋+糖+老抽","酸甜开胃版：芝麻酱+生抽+陈醋+老抽+花生酱+糖+枫糖","菠菜放入开水锅中焯至微微变软就捞出，沥干水份盛放在盘中。","将调好的麻酱料汁倒在菠菜上，拌匀，撒上芝麻点缀即可。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"24sr0jyuyrk1mbua",title:"黑椒牛排炒杏鲍菇",content:["原料：牛排200g，杏鲍菇3个，彩椒半个，黑胡椒粉，生抽，老抽，盐，糖","杏鲍菇切方块 厚度在1-1.5厘米比较好。少量油小火炒杏鲍菇，煎至微微发黄最好。一定煎透把水分炒干。放入少许盐","捞出备用，彩椒切块儿，可以放在一起。","煎牛排。有黄油的话用黄油，没有用普通油也没问题。煎牛排一定注意，整块儿下去，正面15秒，翻面，15秒，再翻面。大概重复4次翻面就可以了。然后在案板上切块儿。","食材全部倒进锅里，中火，加生抽、少许糖翻炒，牛排粒六面都不带生肉就可以了","加入黑胡椒调味，老抽上色。翻炒1分钟。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"majrbm53x15hhzfb",title:"口蘑炒芦笋",content:["原料：芦笋12根（买的是芦笋头，比较嫩），口蘑6个，黑胡椒，盐","芦笋去皮（也可以不去），斜着切，口蘑切片，蒜也切片；","油锅开，热锅冷油，先下大蒜片，蒜出香味放入芦笋，芦笋翻炒约1分钟后，会变成翠绿。","这个时候再下口蘑，依然翻炒均匀，慢慢口蘑软了后加入适量盐。","再加点大颗粒的黑胡椒"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"xiktkuqanockr9kz",title:"四季豆(刀豆)土豆",content:["原料：四季豆 （约300g），土豆中等大小2个，干辣椒1个，糖，盐，酱油","先把土豆削皮，切成矮胖的薯条状，锅热了之后加油，不等油热就放土豆进去，因为土豆洗过了有水遇热油要爆油，所以冷油下土豆，下好土豆就盖上锅盖，继续大火煎土豆。因为盖了锅盖，听到锅子里面噼里啪啦地觉得特有安全感，煎一会，直到有点焦焦的时候翻面继续煎，直到煎成炸薯条一样的。因为不煎久一点等会焖的时候土豆就散架。","煎好土豆就放四季豆，四季豆放进去稍微炒一炒，放点酱油，加盐，放点糖，糖要稍微多一点，能吃出甜味的量。然后放干辣椒。再加冷水，要没过土豆和四季豆，水可以多点，四季豆煮软烂需要点时间，而且四季豆必须要煮熟了才能吃。继续一直大火煮，大概十分钟，水快要干了的时候开锅盖，收汁，起锅。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"ibal844rhyz5nwu6",title:"清蒸多宝鱼",content:["原料：多宝鱼1条，葱2根，姜4片，红辣椒2个，料酒2勺，盐，香菜1根","多宝鱼洗干净，外面一层黏膜洗掉，用剪刀把鳃挑出来剪干净，翻过来剪刀剪一个口儿把鱼肚子里面清理干净，冲洗后沥干水分，用厨房纸巾吸干水分，鱼比较大记得在鱼身上改几刀，以便于入味","两面撒上盐，倒些料酒腌15分钟，中途翻个身，去腥","这个时候切葱丝，姜丝，和辣椒圈。准备调料汁：生抽加上白糖拌匀","15分钟后把腌鱼的汁水倒掉，两面铺上生姜和葱（记得留一部分最后摆盘用），肚子里也放些。","鱼盘子上蒸架，水烧开后蒸7-8分钟，关火闷5分钟，。","端出鱼（小心烫手手）把盘子里的水倒干净，葱和姜也夹掉，重新铺姜葱，辣椒圈也放上，香菜一根，调料汁倒上，淋上热油。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"t4843ylxthiwqrrp",title:"番茄炖牛腩",content:["原料：牛腩 300g，西红柿1~2个，洋葱 1/3 个，香菜，大葱半根，小葱2根，冰糖4粒，姜，蒜5瓣，香叶2片，桂皮1小块，八角1个， （干红辣椒3个），生抽，老抽，料酒，白砂糖，盐","牛腩切大粒，入清水中浸泡30分钟，去去血水，清洗干净；","准备辅料：大葱切段、蒜拍松、姜切块、其它香料清洗干净备用。 准备碗汁：味极鲜2汤匙，料酒1汤匙，老抽1汤匙，搅拌均匀备用。","番茄划十字刀，入开水中烫一会，起皮后撕掉，切成块。洋葱切小块。","牛腩冷水入锅，水中加入小葱、姜片和料酒2汤匙，水开煮5分钟，捞出用热水洗去浮沫，沥干水分；","炒锅入油烧热，入洋葱煸炒成透明状。","倒入番茄翻炒均匀，加1/3茶勺盐，不仅可以码底味，还可令番茄快速出汁起沙，炒至番茄软烂起沙，关火备用。","炒锅入油，冷油入冰糖，小火熬制出现褐红色。","倒入牛腩翻炒上色，上色均匀后倒入香料翻炒出香气。","倒入碗汁翻炒2分钟。","将所有食材转移至微压锅（Bruno电压力锅，倒入没过食材的开水，将炒制过的番茄和洋葱一同倒入，加入(1克)白砂糖中和番茄的酸度，加盖锅盖，牛肉档。","结束后加入盐调味，可加入香菜开盖再炖10分钟。出锅前捡去所有的香料，撒上葱花。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"p0s0l7drbd4srccs",title:"青椒玉米",content:["一根玉米剥粒，老一点的玉米好剥，如果用刀千万小心手。洗一下捞出来沥干水。","大蒜切碎和玉米放到一起，青椒切成条再切成粒放到一边。","放油，倒入玉米和大蒜炒一会，放适量盐，加水煮。","等水完全收干，加切好的青椒炒一会，加一点点酱油(可不加)，翻几下就可以起锅了。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"h6qaopwkz4sknlfc",title:"香菇炒鸡蛋",content:["原料：香菇一斤、鸡蛋3个、蒜片、小葱末","调料：黄酒、生抽、老抽、盐、水淀粉、香油、清水","香菇放入淡盐水中浸泡1分钟后，洗净沥干，切成3毫米的片；","鸡蛋打散后，加入黄酒（去蛋腥）和清水（让鸡蛋蓬松）搅匀；","锅中倒稍多的油，油热倒入蛋液，并快速用铲子搅散，炒好的鸡蛋盛出备用；","锅中再倒油，油热下入蒜片，有滋啦的声音后，下入香菇片，放一勺盐（放入香菇后立刻撒一点儿盐，这样香菇非常容易出水，不会干巴在锅里面），翻炒至稍微变软，调入生抽、老抽，下入炒好的鸡蛋翻炒，最后沿着锅边淋入清水（如果香菇湿润度高，就不加水了，如果买的是比较干的香菇，这道菜炒好关火前，沿着锅边淋一点点水），再淋入少许水淀粉勾芡。","关火后淋少许香油，盛出装盘后，撒少许小葱末即可。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"1ly5cmhlfuycbd8b",title:"柠香鳕鱼",content:["原料：鳕鱼、柠檬、芦笋、小西红柿。提前将鳕鱼从冷冻室转移到冷藏室里解冻，千万不要放在热水或者微波炉解冻档里解冻。","调料：黑胡椒（给儿童做就不用加）、橄榄油、白醋、清水、水淀粉、糖、盐","调一个柠香汁：半个柠檬挤成柠檬汁、白醋、清水以1:1:1的比例加入到小碗里，再加一勺糖、少许盐拌匀；","平底锅加热，倒橄榄油（不要用花生油），油温热的时候，放入鳕鱼，中火在表面撒盐，煎至两面金黄（一点黄即可）盛出；","另起锅倒油，油温热的时候，煎少许芦笋（根部的外皮要去掉），芦笋上面撒一点点盐和小西红柿（西红柿有点皱或破皮的时候拿出来）装盘，把鳕鱼摆在旁边；","另起小锅，把刚才调好的汁倒入到小锅中，边搅边加热，汤汁冒泡了以后一点点淋入水淀粉，沿着同一方向快速搅拌，熬至蜂蜜一样的粘稠度就可以了；","将柠香汁淋在鳕鱼上，再撒黑胡椒即可。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"tjnuse70h2xoax9z",title:"炒花菜",content:["花菜用手掰散(锅小的话一次最好不要炒太多), 洗一次。","焯水，时间可以稍微久一点，变软即可。(不要太久，太久会变黄，炒起来变碎)。","准备多一些大蒜粒(一瓣切成 4 份)，青椒(可选)，红色的甜椒(可选)，葱段 (可选)。","放油，放蒜 (等到变黄一点)，放青椒红椒，然后把沥好水的花菜倒入锅里翻炒，期间不要加水。","炒到稍微有一点焦黄，放葱段，倒入酱油，翻几下出锅"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"74gqpo9lsvj0klah",title:"排骨豆角",content:["准备大蒜一大把，生姜，花椒粒，大葱段，八角两小瓣","排骨剁成小块，放黄酒，两片姜焯水，捞出来洗一下","准备四季豆，摘成小段洗净，不放油在锅里炒软","准备土豆切成小块，玉米切成小段","放油，放入第一步准备的调料，放入排骨，在放郫县豆瓣酱，放点老抽，生抽","放土豆，四季豆，玉米翻炒，放适量盐，加水","整锅倒入电饭煲，40 分钟"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"7a4ygreyo8sr7249",title:"蒜香鸡胸肉",content:["准备食材：","大蒜剥皮，小葱洗净。","鸡胸肉切丁，放生抽+料酒+耗油+胡椒粉+一小勺油+少许盐，抓拌均匀，腌制20分钟","熟芝麻，葱叶且小","起锅热油，放入大蒜，煎至表面微黄盛出","放入腌制好的鸡胸肉煸炒，再放入大蒜煸炒","放入孜然粉，辣椒粉，翻炒均匀，撒上白芝麻和葱花，起锅"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"klajnxz43vdpp9fx",title:"豌豆虾仁滑蛋",content:["虾仁冲洗后用厨房纸吸下表面的水分，加料酒，胡椒粉，生姜粉，搅拌静置；","鸡蛋放入碗中打散，加少量盐；","少量水烧开，加勺食盐，放入豌豆煮3-4分钟，豌豆捞出冷水冲洗，避免变色；","热锅热油，放入虾仁大火快炒至整体颜色变红；","关小火或关火倒入蛋液 （油不能太少，不然炒出的蛋容易干，用余温炒熟，鸡蛋不容易老，炒焦）；","蛋液边缘成型后，快速打散翻炒；","加入豌豆，翻炒均匀，起锅"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"h3ik5r5gks0obxum",title:"胡萝卜土豆烧牛肉",content:["牛肉焯水后用温水洗干净 (步骤和上次一样)","蒜瓣，花椒粒，生姜末或者片",'土豆和胡萝卜按 "滚刀" 的方式切成块，或者就直接切成一小坨就行。',"小葱段","放油，把牛肉，蒜瓣，花椒粒和生姜一起倒入锅里炒","放豆瓣酱 (豆瓣酱越多颜色越深)","豆瓣炒香之后倒入水","放盐、酱油、冰糖 (可选)、 醪糟 (可选)，大料 (可选)","等水快干了开大火，放葱段，放辣椒(可选), 炒一下出锅"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"un15cu4q4ifon3d1",title:"丝瓜煎蛋面",content:["丝瓜去皮后切成片","蒜末","葱花","放油，煎鸡蛋，可以多个鸡蛋一起","煎到金黄之后加水、蒜末、丝瓜、适量盐","水开后加面条(看面条耐煮吗？如果不耐煮等丝瓜多煮一会再下面条)","面条好了之后盛到碗里，如果淡盐就加酱油，再根据喜好加 葱花、醋和花椒面。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"qmcl68khz6gm6z9o",title:"蚝油生菜",content:["调汁：耗油，生抽，盐，糖，适量清水，调匀","生菜（2颗可能就够了）洗净；","锅里加水和少许盐，几滴油，煮沸；","生菜放进去焯熟，大约十秒，用筷子把每颗生菜都能过烫水；","捞出码盘，控干水分；","热锅起油，爆香蒜泥；","倒入调汁煮沸，关火，淋在生菜上。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"36aquyys9zevvpep",title:"蛋炒饭",content:["米饭，鸡蛋2个，葱，胡萝卜，青豆，虾仁2只，熟玉米粒","酱汁：生抽，耗油，白糖","香葱切小，虾仁切成小块（不要太碎）用料酒和姜片腌制片刻，胡萝卜切丁和青豆（和如果是生玉米粒）过水煮熟；","一颗鸡蛋磕入米饭里，拌匀备用；","炒锅里放入少许油，虾仁炒至变色捞出；","一颗鸡蛋划散，放入胡萝卜，青豆和玉米粒，姜翻炒几下，盛出备用；","锅内放入适量油，油热放入米饭，中小火炒散，约7~8分钟；","放入所有配菜，翻炒几下，加入酱汁，翻炒均匀；","放入葱花翻炒几下，出锅"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"s9brs7o4xd8y7ioi",title:"菠菜炒鸡蛋",content:["菠菜洗净，开水中加盐，菠菜焯烫至变生（颜色翠绿色），捞出过冷水，攥干水分，切成小段；","鸡蛋2个，加一点点盐，打到起泡；","葱蒜切末；","锅烧热，倒油，关小火，倒入蛋液，待蛋液还未完全凝固时，关火，用筷子把鸡蛋划散，炒好盛出；","倒入少许底油或者不到，关小火，葱蒜爆香，加入菠菜，用中火翻炒，（可以加少许料酒翻炒），加盐，（可加生抽）翻炒；","菠菜炒好后加入鸡蛋，翻炒均匀出锅。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"1222ecd4wvzlbix0",title:"西红柿炒蛋",content:["大西红柿1个，鸡蛋2个，葱蒜","西红柿顶部划2刀，开水中烫2分钟，切成滚刀块；","准备好葱花和蒜末；","鸡蛋2个，加一点点盐，打到起泡；","锅烧热，倒油，关小火，倒入蛋液，待蛋液还未完全凝固时，关火，用筷子把鸡蛋划散，炒好盛出；","倒入少许底油，关小火，爆香蒜末，倒入西红柿，用中火翻炒；","炒出汤汁后，加入适量盐调味，再倒入鸡蛋，快速翻炒均匀；","出锅装盘撒葱花。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"7wchycyis3sni0oi",title:"西兰花虾仁",content:["西兰花一朵清洗后切成小朵，冻虾仁前一晚放4度解冻再清洗一下。准备料汁：小碗中放入蒜末，盐，生抽，胡椒粉，水，搅拌均匀","锅中水烧开，西兰花焯水2分钟捞出；","锅烧热，倒油，关中火，倒入虾仁，炒至变色；","放入西兰花，淋入料汁，翻炒均匀，大火收汁，出锅。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"},{id:"lnzc51odovt0jjq5",title:"丝瓜炒蛋",content:["先来把丝瓜的外皮削掉。把它的两头切去不要。切片，切好的丝瓜把它放入水中，加入少许的食盐和几滴白醋，这样丝瓜就不会氧化变黑；","鸡蛋2个，加一点点盐，打到起泡；","锅烧热，倒油，关小火，倒入蛋液，油多一点，鸡蛋才能炒的蓬松；","鸡蛋翻炒几下，炒熟后放入蒜瓣和丝瓜，加小半碗清水，再加盐，待水分快炒干，丝瓜透明就好了。"],created_at:"2023-07-27T18:28:31.876Z",updated_at:"2023-07-27T18:28:31.876Z"}],dt={name:at,data:ct},be={set(n,e){ke()&&localStorage.setItem(n,e)},has(n){if(ke())return localStorage.hasOwnProperty(n)},get(n){if(ke())return localStorage.getItem(n)},remove(n){ke()&&localStorage.removeItem(n)}};function ke(){return typeof localStorage<"u"}let ut=n=>crypto.getRandomValues(new Uint8Array(n)),ht=(n,e,t)=>{let l=(2<<Math.log(n.length-1)/Math.LN2)-1,o=-~(1.6*l*e/n.length);return(i=e)=>{let s="";for(;;){let c=t(o),r=o;for(;r--;)if(s+=n[c[r]&l]||"",s.length===i)return s}}},ft=(n,e=21)=>ht(n,e,ut);const pt="1234567890abcdefghijklmnopqrstuvwxyz",_t=16,mt=ft(pt,_t);function vt(){return mt()}function kt(n){return n.trim().replaceAll("	","").replace(/^•+/,"").replace(/^\d[\.、。]/,"").replace(/^\*+/,"").replace(/^[（(]?\d[）)]/,"").trim()}function Ne(n){return n.split(/\n+/).map(kt).filter(Boolean)}const Me="__MENU_STORAGE__";class wt{constructor(e){if(!be.has(Me))this.cache=dt,this._sync();else try{this.cache=JSON.parse(be.get(Me)||"{}")||{}}catch{this.cache={}}}_sync(){try{be.set(Me,JSON.stringify(this.cache))}catch{}}getAll(){return this.cache.data||[]}update(e,t){if(Array.isArray(this.cache.data)){let l=this.cache.data.find(o=>o.id===e);l&&(l.title=t.title,Array.isArray(t.content)?l.content=t.content:typeof t.content=="string"?l.content=Ne(t.content):l.content=[],l.update_at=new Date().toISOString(),this._sync())}}create(e){let t={};return t.created_at=t.updated_at=new Date().toISOString(),t.title=e.title,t.id=vt(),Array.isArray(e.content)?t.content=e.content:typeof e.content=="string"?t.content=Ne(e.content):t.content=[],Array.isArray(this.cache.data)||(this.cache.data=[]),this.cache.data.push(t),this._sync(),t}remove(e){if(Array.isArray(this.cache.data)){let t=this.cache.data.findIndex(l=>l.id===e);t!==-1&&(this.cache.data.splice(t,1),this._sync())}}clear(){this.cache={},this._sync()}}const gt=new wt,yt=!1;function Tt({params:n}){return{DB:gt}}const St=Object.freeze(Object.defineProperty({__proto__:null,load:Tt,ssr:yt},Symbol.toStringTag,{value:"Module"}));function He(n){const e=n-1;return e*e*e+1}function De(n,{delay:e=0,duration:t=400,easing:l=nt}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:l,css:i=>`opacity: ${i*o}`}}function ye(n,{delay:e=0,duration:t=400,easing:l=He,x:o=0,y:i=0,opacity:s=0}={}){const c=getComputedStyle(n),r=+c.opacity,_=c.transform==="none"?"":c.transform,d=r*(1-s),[Z,p]=Oe(o),[u,m]=Oe(i);return{delay:e,duration:t,easing:l,css:(k,w)=>`
			transform: ${_} translate(${(1-k)*Z}${p}, ${(1-k)*u}${m});
			opacity: ${r-d*w}`}}function Le(n,{delay:e=0,duration:t=400,easing:l=He,axis:o="y"}={}){const i=getComputedStyle(n),s=+i.opacity,c=o==="y"?"height":"width",r=parseFloat(i[c]),_=o==="y"?["top","bottom"]:["left","right"],d=_.map(A=>`${A[0].toUpperCase()}${A.slice(1)}`),Z=parseFloat(i[`padding${d[0]}`]),p=parseFloat(i[`padding${d[1]}`]),u=parseFloat(i[`margin${d[0]}`]),m=parseFloat(i[`margin${d[1]}`]),k=parseFloat(i[`border${d[0]}Width`]),w=parseFloat(i[`border${d[1]}Width`]);return{delay:e,duration:t,easing:l,css:A=>`overflow: hidden;opacity: ${Math.min(A*20,1)*s};${c}: ${A*r}px;padding-${_[0]}: ${A*Z}px;padding-${_[1]}: ${A*p}px;margin-${_[0]}: ${A*u}px;margin-${_[1]}: ${A*m}px;border-${_[0]}-width: ${A*k}px;border-${_[1]}-width: ${A*w}px;`}}function bt(n,{delay:e=0,duration:t=400,easing:l=He,start:o=0,opacity:i=0}={}){const s=getComputedStyle(n),c=+s.opacity,r=s.transform==="none"?"":s.transform,_=1-o,d=c*(1-i);return{delay:e,duration:t,easing:l,css:(Z,p)=>`
			transform: ${r} scale(${1-_*p});
			opacity: ${c-d*p}
		`}}function G(n){let e;n.style.transition="background-color .2s",n.addEventListener("click",t=>{n.classList.add("touching"),clearTimeout(e),setTimeout(()=>{n.classList.remove("touching")},250)}),n.addEventListener("touchstart",t=>{t.stopPropagation(),e=setTimeout(()=>{n.classList.add("touching")},250)}),n.addEventListener("touchend",t=>{t.stopPropagation(),clearTimeout(e),n.classList.remove("touching")})}function Ue(n){let e,t,l="删除后将无法恢复，继续删除？",o,i,s,c="确定删除",r,_,d="取消",Z,p,u;return{c(){e=T("div"),t=T("p"),t.textContent=l,o=U(),i=T("div"),s=T("button"),s.textContent=c,r=U(),_=T("button"),_.textContent=d,this.h()},l(m){e=b(m,"DIV",{class:!0});var k=z(e);t=b(k,"P",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-wxhp7d"&&(t.textContent=l),o=V(k),i=b(k,"DIV",{});var w=z(i);s=b(w,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(s)!=="svelte-yyjajg"&&(s.textContent=c),r=V(w),_=b(w,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(_)!=="svelte-ok4g4v"&&(_.textContent=d),w.forEach(C),k.forEach(C),this.h()},h(){a(t,"class","svelte-2hsl4c"),a(s,"reset",""),a(s,"class","action-confirm-delete svelte-2hsl4c"),a(_,"reset",""),a(_,"class","svelte-2hsl4c"),a(e,"class","confirm svelte-2hsl4c")},m(m,k){$(m,e,k),f(e,t),f(e,o),f(e,i),f(i,s),f(i,r),f(i,_),p||(u=[J(G.call(null,s)),D(s,"click",n[4]),J(G.call(null,_)),D(_,"click",n[10])],p=!0)},p:Ee,i(m){m&&(Z||ce(()=>{Z=st(e,bt,{scale:.8,duration:200}),Z.start()}))},o:Ee,d(m){m&&C(e),p=!1,se(u)}}}function Mt(n){let e,t,l,o,i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="svelte-2hsl4c"><path fill="#a5d6a7" d="M11,43.8l2.4-8.4c0.1-0.5,0.4-0.9,0.8-1.3l22-21.9c2.3-2.3,6-2.1,8.1,0.4c1.8,2.2,1.5,5.5-0.5,7.5L21.9,41.8  c-0.4,0.4-0.8,0.6-1.3,0.8L12.2,45C11.5,45.2,10.8,44.5,11,43.8z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.4,21.8L32.1,8.1c2.3-2.3,6-2.1,8.1,0.4c1.8,2.2,1.5,5.5-0.5,7.5l-2.8,2.8"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32.5,23.3L17.9,37.8c-0.4,0.4-0.8,0.6-1.3,0.8L6.5,41.5l2.9-10.1c0.1-0.5,0.4-0.9,0.8-1.3l3.7-3.7"></path><line x1="29.1" x2="36.9" y1="11.1" y2="18.9" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></svg>
        编辑菜单`,s,c,r,_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="svelte-2hsl4c"><path fill="#8ce7f2" d="M43.1,43H12.9C10.7,43,9,41.3,9,39.1V16.9c0-2.1,1.7-3.9,3.9-3.9h30.3c2.1,0,3.9,1.7,3.9,3.9v22.3	C47,41.3,45.3,43,43.1,43z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M35.6,8.5h3.9c2.2,0,4,1.8,4,4v23c0,2.2-1.8,4-4,4h-19"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M13.3,39.5H8.5c-2.2,0-4-1.8-4-4v-23c0-2.2,1.8-4,4-4h19.4"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M26.5,34.7v-5.2c0-2.2-1.8-4-4-4h-14"></path><line x1="29.5" x2="37.5" y1="22.5" y2="14.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"></line><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="37.5,19.5 37.5,14.5 32.5,14.5"></polyline></svg>
        专注模式`,d,Z,p,u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="svelte-2hsl4c"><path fill="#9fa8da" d="M25.6,30h10.3c1.7,0,3.1,1.4,3.1,3.1v9.8c0,1.7-1.4,3.1-3.1,3.1H20.1c-1.7,0-3.1-1.4-3.1-3.1v-9.7	c0-1.8,1.4-3.2,3.1-3.2h0H25.6z"></path><path fill="#9fa8da" d="M9,35.9V21.1c0-2.8,2.3-5.1,5.1-5.1h27.8c2.8,0,5.1,2.3,5.1,5.1v14.8c0,1.7-1.4,3.1-3.1,3.1H12.1	C10.4,39,9,37.6,9,35.9z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M42.5,29.1v2.4c0,1.7-1.3,3-3,3h-5"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5.5,19.2v-1.7c0-2.8,2.2-5,5-5h27c2.8,0,5,2.2,5,5v6.6"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5,34.5h-5c-1.7,0-3-1.3-3-3v-7.2"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.5,8.5c0-1.7,1.3-3,3-3h15c1.7,0,3,1.3,3,3"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21.7,26.5h9.8c1.7,0,3,1.3,3,3v9c0,1.7-1.3,3-3,3h-15c-1.7,0-3-1.3-3-3v-9c0-1.7,1.3-3,3-3h0"></path><line x1="36.5" x2="35.5" y1="18.5" y2="18.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></svg>
        打印此菜单`,m,k,w,A=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="svelte-2hsl4c"><path fill="#ffab91" d="M35.7,46.1H20.3c-1.5,0-2.7-1.1-2.9-2.5L14,17.1c-0.1-0.6,0.4-1.1,1-1.1H41c0.6,0,1.1,0.5,1,1.1l-3.4,26.5 C38.4,45,37.2,46.1,35.7,46.1z"></path><line x1="6.5" x2="41.5" y1="11.5" y2="11.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19,10.5c0-2.8,2.2-5,5-5s5,2.2,5,5"></path><line x1="11.8" x2="9.5" y1="29.9" y2="11.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M37.4,20.5l-2.5,19.4c-0.2,1.5-1.5,2.6-3,2.6H16.1c-1.5,0-2.8-1.1-3-2.6l-0.5-3.7"></path><line x1="28" x2="20" y1="23" y2="31" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3"></line><line x1="20" x2="28" y1="23" y2="31" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3"></line></svg>
        删除菜单`,B,H,x,g,M,v,O,N,L=n[0]&&Ue(n);return{c(){e=T("div"),t=T("ul"),l=T("li"),o=T("button"),o.innerHTML=i,s=U(),c=T("li"),r=T("button"),r.innerHTML=_,d=U(),Z=T("li"),p=T("button"),p.innerHTML=u,m=U(),k=T("li"),w=T("button"),w.innerHTML=A,B=U(),L&&L.c(),x=U(),g=T("div"),this.h()},l(S){e=b(S,"DIV",{class:!0});var R=z(e);t=b(R,"UL",{class:!0});var q=z(t);l=b(q,"LI",{class:!0});var X=z(l);o=b(X,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(o)!=="svelte-1dqed5c"&&(o.innerHTML=i),X.forEach(C),s=V(q),c=b(q,"LI",{class:!0});var Y=z(c);r=b(Y,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(r)!=="svelte-63toez"&&(r.innerHTML=_),Y.forEach(C),d=V(q),Z=b(q,"LI",{class:!0});var K=z(Z);p=b(K,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(p)!=="svelte-1uhsppp"&&(p.innerHTML=u),K.forEach(C),m=V(q),k=b(q,"LI",{class:!0});var ee=z(k);w=b(ee,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(w)!=="svelte-1pv6vfh"&&(w.innerHTML=A),ee.forEach(C),B=V(q),L&&L.l(q),q.forEach(C),x=V(R),g=b(R,"DIV",{class:!0,role:!0,tabindex:!0}),z(g).forEach(C),R.forEach(C),this.h()},h(){a(o,"reset",""),a(o,"class","svelte-2hsl4c"),a(l,"class","svelte-2hsl4c"),a(r,"reset",""),a(r,"class","svelte-2hsl4c"),a(c,"class","svelte-2hsl4c"),a(p,"reset",""),a(p,"class","svelte-2hsl4c"),a(Z,"class","svelte-2hsl4c"),a(w,"reset",""),a(w,"class","action-delete svelte-2hsl4c"),a(k,"class","svelte-2hsl4c"),a(t,"class","actions svelte-2hsl4c"),a(g,"class","overlay svelte-2hsl4c"),a(g,"role","button"),a(g,"tabindex","-1"),a(e,"class","container svelte-2hsl4c")},m(S,R){$(S,e,R),f(e,t),f(t,l),f(l,o),f(t,s),f(t,c),f(c,r),f(t,d),f(t,Z),f(Z,p),f(t,m),f(t,k),f(k,w),f(t,B),L&&L.m(t,null),f(e,x),f(e,g),v=!0,O||(N=[D(o,"click",n[2]),J(G.call(null,o)),D(r,"click",n[3]),J(G.call(null,r)),D(p,"click",n[6]),D(p,"click",n[6]),J(G.call(null,p)),D(w,"click",n[5]),J(G.call(null,w)),D(g,"click",n[1]),D(g,"keyup",n[8]),D(g,"keydown",n[9])],O=!0)},p(S,[R]){S[0]?L?(L.p(S,R),R&1&&F(L,1)):(L=Ue(S),L.c(),F(L,1),L.m(t,null)):L&&(L.d(1),L=null)},i(S){v||(F(L),S&&ce(()=>{v&&(H||(H=ne(t,Le,{y:50,duration:200},!0)),H.run(1))}),S&&ce(()=>{v&&(M||(M=ne(g,De,{duration:200},!0)),M.run(1))}),v=!0)},o(S){S&&(H||(H=ne(t,Le,{y:50,duration:200},!1)),H.run(0)),S&&(M||(M=ne(g,De,{duration:200},!1)),M.run(0)),v=!1},d(S){S&&C(e),L&&L.d(),S&&H&&H.end(),S&&M&&M.end(),O=!1,se(N)}}}function Et(n,e,t){let{display:l}=e;const o=We();let i=!1;function s(){t(7,l=!1)}function c(){setTimeout(()=>{s(),o("action","edit")},50)}function r(){setTimeout(()=>{s(),o("action","fullscreen")},50)}function _(){setTimeout(()=>{s(),o("action","delete"),t(0,i=!1)},50)}function d(){setTimeout(()=>{t(0,i=!0)},50)}function Z(){setTimeout(()=>{s(),setTimeout(()=>{o("action","print")},200)},50)}function p(k){we.call(this,n,k)}function u(k){we.call(this,n,k)}const m=()=>setTimeout(()=>t(0,i=!1),50);return n.$$set=k=>{"display"in k&&t(7,l=k.display)},[i,s,c,r,_,d,Z,l,p,u,m]}class Lt extends Ce{constructor(e){super(),Ze(this,e,Et,Mt,xe,{display:7})}}function xt(n){let e,t,l,o='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 svelte-1jurs3e"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg>',i,s,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%" class="svelte-1jurs3e"><path fill="#a5d6a7" d="M46.7,18.5l-4.4-4.4c-0.8-0.8-2-0.8-2.8,0L24,29.6l-5.3-5.3c-0.8-0.8-2-0.8-2.8,0l-4.4,4.4	c-0.8,0.8-0.8,2,0,2.8l11.1,11.1c0.8,0.8,2,0.8,2.8,0l21.3-21.3C47.4,20.6,47.4,19.3,46.7,18.5z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M14.6,34.6l4,4c0.8,0.8,2,0.8,2.8,0l21.3-21.3c0.8-0.8,0.8-2,0-2.8l-4.4-4.4c-0.8-0.8-2-0.8-2.8,0L32,13.6"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M28,17.6l-8,8l-5.3-5.3c-0.8-0.8-2-0.8-2.8,0l-4.4,4.4c-0.8,0.8-0.8,2,0,2.8l3.3,3.3"></path></svg>
      保存`,r,_,d,Z,p,u,m,k,w,A;return{c(){e=T("form"),t=T("footer"),l=T("button"),l.innerHTML=o,i=U(),s=T("button"),s.innerHTML=c,r=U(),_=T("header"),d=T("input"),Z=U(),p=T("div"),u=T("textarea"),this.h()},l(B){e=b(B,"FORM",{class:!0});var H=z(e);t=b(H,"FOOTER",{class:!0});var x=z(t);l=b(x,"BUTTON",{reset:!0,class:!0,type:!0,"data-svelte-h":!0}),P(l)!=="svelte-1c89oce"&&(l.innerHTML=o),i=V(x),s=b(x,"BUTTON",{reset:!0,class:!0,type:!0,"data-svelte-h":!0}),P(s)!=="svelte-hd01oc"&&(s.innerHTML=c),x.forEach(C),r=V(H),_=b(H,"HEADER",{});var g=z(_);d=b(g,"INPUT",{type:!0,placeholder:!0,class:!0}),g.forEach(C),Z=V(H),p=b(H,"DIV",{class:!0});var M=z(p);u=b(M,"TEXTAREA",{placeholder:!0,class:!0}),z(u).forEach(C),M.forEach(C),H.forEach(C),this.h()},h(){a(l,"reset",""),a(l,"class","action-cancel svelte-1jurs3e"),a(l,"type","button"),a(s,"reset",""),a(s,"class","action-save svelte-1jurs3e"),a(s,"type","submit"),a(t,"class","svelte-1jurs3e"),a(d,"type","text"),a(d,"placeholder","菜单名称"),d.required=!0,a(d,"class","svelte-1jurs3e"),a(u,"placeholder","把菜单内容粘贴进来即可。为了简单，一行或一段表示一项"),u.required=!0,a(u,"class","svelte-1jurs3e"),a(p,"class","content"),a(e,"class","container svelte-1jurs3e")},m(B,H){$(B,e,H),f(e,t),f(t,l),f(t,i),f(t,s),f(e,r),f(e,_),f(_,d),ie(d,n[0]),f(e,Z),f(e,p),f(p,u),ie(u,n[1]),k=!0,w||(A=[D(l,"click",n[2]),J(G.call(null,l)),J(G.call(null,s)),D(d,"input",n[7]),D(u,"input",n[8]),D(e,"submit",n[3])],w=!0)},p(B,[H]){H&1&&d.value!==B[0]&&ie(d,B[0]),H&2&&ie(u,B[1])},i(B){k||(B&&ce(()=>{k&&(m||(m=ne(e,ye,{x:0,y:20,duration:200,opacty:1},!0)),m.run(1))}),k=!0)},o(B){B&&(m||(m=ne(e,ye,{x:0,y:20,duration:200,opacty:1},!1)),m.run(0)),k=!1},d(B){B&&C(e),B&&m&&m.end(),w=!1,se(A)}}}function jt(n,e,t){let{display:l}=e,{mode:o="new"}=e,{data:i}=e,s="",c="";o==="edit"&&(s=i.title,c=i.content.join(`

`));const r=We();function _(){setTimeout(()=>{t(4,l=!1)},50)}function d(){r(o==="new"?"create":"update",{title:s,content:c}),setTimeout(()=>{_()},50)}function Z(){s=this.value,t(0,s)}function p(){c=this.value,t(1,c)}return n.$$set=u=>{"display"in u&&t(4,l=u.display),"mode"in u&&t(5,o=u.mode),"data"in u&&t(6,i=u.data)},[s,c,_,d,l,o,i,Z,p]}class Ct extends Ce{constructor(e){super(),Ze(this,e,jt,xt,xe,{display:4,mode:5,data:6})}}function Ve(n,e,t){const l=n.slice();return l[34]=e[t],l}function qe(n,e,t){const l=n.slice();return l[37]=e[t],l}function Fe(n){let e,t=n[37]+"",l;return{c(){e=T("li"),l=oe(t),this.h()},l(o){e=b(o,"LI",{class:!0});var i=z(e);l=re(i,t),i.forEach(C),this.h()},h(){a(e,"class","svelte-1xhdwwo")},m(o,i){$(o,e,i),f(e,l)},p(o,i){i[0]&4096&&t!==(t=o[37]+"")&&je(l,t)},d(o){o&&C(e)}}}function Re(n,e){let t,l,o,i=e[34].title+"",s,c,r,_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svelte-1xhdwwo"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>',d,Z,p,u,m,k,w,A,B,H=ge(e[34].content),x=[];for(let g=0;g<H.length;g+=1)x[g]=Fe(qe(e,H,g));return{key:n,first:null,c(){t=T("section"),l=T("header"),o=T("h2"),s=oe(i),c=U(),r=T("button"),r.innerHTML=_,Z=U(),p=T("article"),u=T("ol");for(let g=0;g<x.length;g+=1)x[g].c();m=U(),this.h()},l(g){t=b(g,"SECTION",{class:!0});var M=z(t);l=b(M,"HEADER",{"data-id":!0,role:!0,tabindex:!0,class:!0});var v=z(l);o=b(v,"H2",{class:!0});var O=z(o);s=re(O,i),c=V(O),r=b(O,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(r)!=="svelte-1bihfw2"&&(r.innerHTML=_),O.forEach(C),v.forEach(C),Z=V(M),p=b(M,"ARTICLE",{class:!0});var N=z(p);u=b(N,"OL",{class:!0});var L=z(u);for(let S=0;S<x.length;S+=1)x[S].l(L);L.forEach(C),N.forEach(C),m=V(M),M.forEach(C),this.h()},h(){a(r,"reset",""),a(r,"class","action-more svelte-1xhdwwo"),a(o,"class","svelte-1xhdwwo"),a(l,"data-id",d=e[34].id),a(l,"role","button"),a(l,"tabindex","-1"),a(l,"class","svelte-1xhdwwo"),a(u,"class","svelte-1xhdwwo"),a(p,"class","body svelte-1xhdwwo"),a(t,"class","svelte-1xhdwwo"),te(t,"expand",e[9]===e[34].id),this.first=t},m(g,M){$(g,t,M),f(t,l),f(l,o),f(o,s),f(o,c),f(o,r),f(t,Z),f(t,p),f(p,u);for(let v=0;v<x.length;v+=1)x[v]&&x[v].m(u,null);f(t,m),w=!0,A||(B=[J(G.call(null,r)),D(r,"click",function(){Ie(e[21](e[34]))&&e[21](e[34]).apply(this,arguments)}),J(G.call(null,l)),D(l,"click",function(){Ie(e[13](e[34]))&&e[13](e[34]).apply(this,arguments)}),D(l,"keydown",e[23]),D(l,"keyup",e[24])],A=!0)},p(g,M){if(e=g,(!w||M[0]&4096)&&i!==(i=e[34].title+"")&&je(s,i),(!w||M[0]&4096&&d!==(d=e[34].id))&&a(l,"data-id",d),M[0]&4096){H=ge(e[34].content);let v;for(v=0;v<H.length;v+=1){const O=qe(e,H,v);x[v]?x[v].p(O,M):(x[v]=Fe(O),x[v].c(),x[v].m(u,null))}for(;v<x.length;v+=1)x[v].d(1);x.length=H.length}(!w||M[0]&4608)&&te(t,"expand",e[9]===e[34].id)},i(g){w||(k&&k.end(1),w=!0)},o(g){g&&(k=it(t,Le,{duration:e[1]?0:400})),w=!1},d(g){g&&C(t),lt(x,g),g&&k&&k.end(),A=!1,se(B)}}}function Pe(n){let e,t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"></path></svg>',l,o,i,s;return{c(){e=T("button"),e.innerHTML=t,this.h()},l(c){e=b(c,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(e)!=="svelte-eznau5"&&(e.innerHTML=t),this.h()},h(){a(e,"reset",""),a(e,"class","exit-fullscreen svelte-1xhdwwo")},m(c,r){$(c,e,r),o=!0,i||(s=[D(e,"click",n[16]),J(G.call(null,e))],i=!0)},p:Ee,i(c){o||(c&&ce(()=>{o&&(l||(l=ne(e,ye,{delay:200,x:10,y:-10,duration:200},!0)),l.run(1))}),o=!0)},o(c){c&&(l||(l=ne(e,ye,{delay:200,x:10,y:-10,duration:200},!1)),l.run(0)),o=!1},d(c){c&&C(e),c&&l&&l.end(),i=!1,se(s)}}}function Je(n){let e,t,l;function o(s){n[29](s)}let i={data:n[5],mode:n[10]};return n[2]!==void 0&&(i.display=n[2]),e=new Ct({props:i}),ae.push(()=>Ye(e,"display",o)),e.$on("create",n[17]),e.$on("update",n[18]),{c(){Qe(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,c){et(e,s,c),l=!0},p(s,c){const r={};c[0]&32&&(r.data=s[5]),c[0]&1024&&(r.mode=s[10]),!t&&c[0]&4&&(t=!0,r.display=s[2],Xe(()=>t=!1)),e.$set(r)},i(s){l||(F(e.$$.fragment,s),l=!0)},o(s){Q(e.$$.fragment,s),l=!1},d(s){tt(e,s)}}}function Ge(n){let e,t,l;function o(s){n[30](s)}let i={};return n[3]!==void 0&&(i.display=n[3]),e=new Lt({props:i}),ae.push(()=>Ye(e,"display",o)),e.$on("action",n[15]),{c(){Qe(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,c){et(e,s,c),l=!0},p(s,c){const r={};!t&&c[0]&8&&(t=!0,r.display=s[3],Xe(()=>t=!1)),e.$set(r)},i(s){l||(F(e.$$.fragment,s),l=!0)},o(s){Q(e.$$.fragment,s),l=!1},d(s){tt(e,s)}}}function Zt(n){let e,t,l,o,i,s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="svelte-1xhdwwo"><path fill="#a5d6a7" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242	C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M40.5,33.894V36.5c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V20.617"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.5,14.234V11.5c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v15.67"></path><line x1="24" x2="24" y1="15.5" y2="32.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"></line><line x1="15.5" x2="32.5" y1="24" y2="24" fill="none" stroke="#18193f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"></line></svg>',c,r,_,d=[],Z=new Map,p,u,m,k,w=n[0].length+"",A,B,H,x,g,M,v=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svelte-1xhdwwo"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"></path></svg>
            打印全部`,O,N,L,S=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 svelte-1xhdwwo"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
            导出数据`,R,q,X,Y,K,ee,de,le=ge(n[12]);const ue=y=>y[34].id;for(let y=0;y<le.length;y+=1){let E=Ve(n,le,y),W=ue(E);Z.set(W,d[y]=Re(W,E))}let h=n[4]&&Pe(n),j=n[2]&&Je(n),I=n[3]&&Ge(n);return{c(){e=T("main"),t=T("header"),l=T("input"),o=U(),i=T("button"),i.innerHTML=s,c=U(),r=T("div"),_=T("div");for(let y=0;y<d.length;y+=1)d[y].c();p=U(),u=T("footer"),m=T("p"),k=oe("♥ 共收集 "),A=oe(w),B=oe(" 个菜单 ♥"),H=U(),x=T("ul"),g=T("li"),M=T("button"),M.innerHTML=v,O=U(),N=T("li"),L=T("button"),L.innerHTML=S,R=U(),h&&h.c(),q=U(),j&&j.c(),X=U(),I&&I.c(),Y=Se(),this.h()},l(y){e=b(y,"MAIN",{class:!0});var E=z(e);t=b(E,"HEADER",{class:!0,aria:!0});var W=z(t);l=b(W,"INPUT",{type:!0,class:!0,placeholder:!0}),o=V(W),i=b(W,"BUTTON",{reset:!0,class:!0,"data-svelte-h":!0}),P(i)!=="svelte-1f844hd"&&(i.innerHTML=s),W.forEach(C),c=V(E),r=b(E,"DIV",{class:!0});var he=z(r);_=b(he,"DIV",{class:!0});var Ae=z(_);for(let Te=0;Te<d.length;Te+=1)d[Te].l(Ae);Ae.forEach(C),p=V(he),u=b(he,"FOOTER",{class:!0});var fe=z(u);m=b(fe,"P",{class:!0});var pe=z(m);k=re(pe,"♥ 共收集 "),A=re(pe,w),B=re(pe," 个菜单 ♥"),pe.forEach(C),H=V(fe),x=b(fe,"UL",{class:!0});var _e=z(x);g=b(_e,"LI",{});var Be=z(g);M=b(Be,"BUTTON",{reset:!0,type:!0,class:!0,"data-svelte-h":!0}),P(M)!=="svelte-1u7x95m"&&(M.innerHTML=v),Be.forEach(C),O=V(_e),N=b(_e,"LI",{});var ze=z(N);L=b(ze,"BUTTON",{reset:!0,type:!0,class:!0,"data-svelte-h":!0}),P(L)!=="svelte-14225sa"&&(L.innerHTML=S),ze.forEach(C),_e.forEach(C),fe.forEach(C),he.forEach(C),R=V(E),h&&h.l(E),E.forEach(C),q=V(y),j&&j.l(y),X=V(y),I&&I.l(y),Y=Se(),this.h()},h(){a(l,"type","search"),a(l,"class","search svelte-1xhdwwo"),a(l,"placeholder","Search"),a(i,"reset",""),a(i,"class","menu-button svelte-1xhdwwo"),a(t,"class","main-header svelte-1xhdwwo"),a(t,"aria","button"),a(_,"class","menus svelte-1xhdwwo"),a(m,"class","summary svelte-1xhdwwo"),a(M,"reset",""),a(M,"type","button"),a(M,"class","svelte-1xhdwwo"),a(L,"reset",""),a(L,"type","button"),a(L,"class","svelte-1xhdwwo"),a(x,"class","extra-actions svelte-1xhdwwo"),a(u,"class","svelte-1xhdwwo"),a(r,"class","menu-list svelte-1xhdwwo"),a(e,"class","svelte-1xhdwwo"),te(e,"print-mode-single",n[11]==="single"),te(e,"print-mode-all",n[11]==="all"),te(e,"fullscreen",n[4])},m(y,E){$(y,e,E),f(e,t),f(t,l),ie(l,n[1]),f(t,o),f(t,i),n[26](t),f(e,c),f(e,r),f(r,_);for(let W=0;W<d.length;W+=1)d[W]&&d[W].m(_,null);f(r,p),f(r,u),f(u,m),f(m,k),f(m,A),f(m,B),f(u,H),f(u,x),f(x,g),f(g,M),f(x,O),f(x,N),f(N,L),n[27](r),f(e,R),h&&h.m(e,null),n[28](e),$(y,q,E),j&&j.m(y,E),$(y,X,E),I&&I.m(y,E),$(y,Y,E),K=!0,ee||(de=[D(l,"input",n[25]),J(G.call(null,i)),D(i,"click",n[14]),J(G.call(null,M)),D(M,"click",n[19]),J(G.call(null,L)),D(L,"click",n[20])],ee=!0)},p(y,E){E[0]&2&&l.value!==y[1]&&ie(l,y[1]),E[0]&2109954&&(le=ge(y[12]),ve(),d=rt(d,E,ue,1,y,le,Z,_,ot,Re,null,Ve),me()),(!K||E[0]&1)&&w!==(w=y[0].length+"")&&je(A,w),y[4]?h?(h.p(y,E),E[0]&16&&F(h,1)):(h=Pe(y),h.c(),F(h,1),h.m(e,null)):h&&(ve(),Q(h,1,1,()=>{h=null}),me()),(!K||E[0]&2048)&&te(e,"print-mode-single",y[11]==="single"),(!K||E[0]&2048)&&te(e,"print-mode-all",y[11]==="all"),(!K||E[0]&16)&&te(e,"fullscreen",y[4]),y[2]?j?(j.p(y,E),E[0]&4&&F(j,1)):(j=Je(y),j.c(),F(j,1),j.m(X.parentNode,X)):j&&(ve(),Q(j,1,1,()=>{j=null}),me()),y[3]?I?(I.p(y,E),E[0]&8&&F(I,1)):(I=Ge(y),I.c(),F(I,1),I.m(Y.parentNode,Y)):I&&(ve(),Q(I,1,1,()=>{I=null}),me())},i(y){if(!K){for(let E=0;E<le.length;E+=1)F(d[E]);F(h),F(j),F(I),K=!0}},o(y){for(let E=0;E<d.length;E+=1)Q(d[E]);Q(h),Q(j),Q(I),K=!1},d(y){y&&(C(e),C(q),C(X),C(Y)),n[26](null);for(let E=0;E<d.length;E+=1)d[E].d();n[27](null),h&&h.d(),n[28](null),j&&j.d(y),I&&I.d(y),ee=!1,se(de)}}}function Ht(n,e){return e?n.filter(t=>t.title.includes(e)):n}function Ke(n,e){setTimeout(()=>{let t=document.querySelector(`section header[data-id="${n}"]`);t&&(e&&t.click(),t.parentNode.classList.add("new"),setTimeout(()=>{t.parentNode.classList.remove("new")},2e3))})}function At(n,e){let t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",n),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Bt(n,e,t){let l,{data:o}=e,i=o.DB,s=[],c=!1,r=!1,_=!1,d,Z,p,u,m,k,w,A="single";B();function B(){t(0,s=(i.getAll()||[]).sort((h,j)=>h.created_at==j.created_at?0:h.created_at<j.created_at?1:-1))}function H(h){return j=>{if(_)return!1;m===h.id?t(9,m=null):(t(9,m=h.id),setTimeout(()=>{u.scrollTo({top:j.target.closest("section").offsetTop-p.getBoundingClientRect().height+1,behavior:"smooth"})},100))}}function x(){t(5,d=null),t(10,k="new"),setTimeout(()=>{t(2,c=!0)},50)}function g(h){let j=h.detail;j==="edit"&&(t(10,k="edit"),t(2,c=!0)),j==="delete"&&N(),j==="print"&&(t(11,A="single"),setTimeout(()=>{window.print()},200)),j==="fullscreen"&&(d.id,t(4,_=!0),t(8,u.scrollTop=0,u))}function M(){setTimeout(()=>{let h=u.querySelector(".expand");if(!h)return!1;t(4,_=!1),setTimeout(()=>{u.scrollTo({top:h.offsetTop-p.getBoundingClientRect().height+1,behavior:"smooth"})},100)},100)}function v(h){let j=h.detail,I=i.create(j);B(),t(5,d={}),t(1,w=""),t(8,u.scrollTop=0,u),Ke(I.id,!0)}function O(h){let j=h.detail,I=d.id;i.update(I,j),B(),Ke(I)}function N(){let h=d.id;i.remove(h),B()}function L(){t(11,A="all"),setTimeout(()=>{window.print()},200)}function S(){let h="";s.forEach(j=>{h+=j.title+`

`,h+=j.content.join(`
`)+`


`}),At("exported-menu-data.txt",h.trim())}function R(h){return j=>{j.stopPropagation(),t(5,d=h),t(3,r=!0)}}function q(h){we.call(this,n,h)}function X(h){we.call(this,n,h)}function Y(){w=this.value,t(1,w)}function K(h){ae[h?"unshift":"push"](()=>{p=h,t(7,p)})}function ee(h){ae[h?"unshift":"push"](()=>{u=h,t(8,u)})}function de(h){ae[h?"unshift":"push"](()=>{Z=h,t(6,Z)})}function le(h){c=h,t(2,c)}function ue(h){r=h,t(3,r)}return n.$$set=h=>{"data"in h&&t(22,o=h.data)},n.$$.update=()=>{n.$$.dirty[0]&3&&t(12,l=Ht(s,w))},[s,w,c,r,_,d,Z,p,u,m,k,A,l,H,x,g,M,v,O,L,S,R,o,q,X,Y,K,ee,de,le,ue]}class It extends Ce{constructor(e){super(),Ze(this,e,Bt,Zt,xe,{data:22},null,[-1,-1])}}export{It as component,St as universal};
