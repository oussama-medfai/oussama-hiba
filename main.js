var users=[];
function creatUser(email,user,pass){
	return{
		user:user,
		email:email,
		pass:pass
	}
}
users.push(creatUser('oussama@rbk.tn','oussama','oussama'))
users.push(creatUser('hiba@rbk.tn','hiba','hiba'))
users.push(creatUser('user@rbk.tn','user','user'))
users.push(creatUser('invit@rbk.tn','invit','invit'))



function creatArticle() {
	return{
		categorie:'',
		id:"",
		name:'',
		brand:'',
		url:"",
		disciption:"",
		price:undefined,
		addArticl:addArticl,
			};
	
}
var addArticl=function(){
	this.categorie=arguments[0];
	this.id=arguments[1];
	this.name=arguments[2];
	this.brand=arguments[3];
	this.url=arguments[4];
	this.disciption=arguments[5];
	this.price=arguments[6];
}
	var categorie=[];
	categorie.push('Electronics','acessories','computer','entertainement','Kitchen','Games','Fashion','Parfum');

	var articles=[];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var article=creatArticle()
	article.addArticl('acessories','1','cars',' ','./img/acessories/cars/1.jpg','Rideaux pare-soleil avec Ventouse',9);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','2','cars',' ','./img/acessories/cars/2.jpg','Siège de Voiture Correcteur de Posture Pour le Dos',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','3','cars',' ','./img/acessories/cars/3.jpg','Pare Soleil Avant de Voiture - Flamant rose',12);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','4','cars',' ','./img/acessories/cars/4.jpg','Couvre volant cuir',32);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','5','cars',' ','./img/acessories/cars/5.jpg','cendrier avec lumiere LED bleu',20);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','6','cars',' ','./img/acessories/cars/6.jpg','Tasse de voyage chauffée - en acier inoxydable',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','7','cars',' ','./img/acessories/cars/7.jpg','Super Clean Gel Magique visqueux De Nettoyage Poussière Intérieur Marque: Super Clean | Produits similaires par Super Clean',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('acessories','8','cars',' ','./img/acessories/cars/8.jpg','Housse Protection Extérieur 4 x 4 - Taille LC',103);
	articles.push(article);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var article=creatArticle()
	article.addArticl('computer','9','pc portable','Vega','./img/computer/pc portable/1.jpg','Vega Book Plus - 4Go - 64Go - Silver - Garantie 1 Ans',499);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','10','pc portable','Lenovo','./img/computer/pc portable/2.jpg','Lenovo IdeaPad 130 - i3 7ème Gén - 4Go - 1To - Noir - Garantie 1 Ans',929);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','11','pc portable','Lenovo ','./img/computer/pc portable/3.jpg','Lenovo PC Portable IP330-15IGM - 4Go - 1To - Noir - Garantie 1 Ans',639);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','12','pc portable','Asus','./img/computer/pc portable/4.jpg','Asus Pc Portable Gamer - F571GT- I7 - 9è Gén - Garantie 2ans',2889);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','13','pc portable','Asus','./img/computer/pc portable/5.jpg','Asus Pc Portable X540UB-GO1357T- I5 - 8Go -1To - 2Go - Silver',1629);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','14','pc portable','Lenovo ','./img/computer/pc portable/6.jpg','Lenovo Pc Portable Legion Y540 I5 9é Gén - 8Go 1To - Garantie 1ans',2918);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','15','pc portable','Apple ','./img/computer/pc portable/7.jpg','Apple MacBook Pro Retina 13 pouces - Touch bar et Touch ID',7769);
	articles.push(article);

var article=creatArticle()
	article.addArticl('computer','16','pc portable','Lenovo ','./img/computer/pc portable/8.jpg','Lenovo Ideapad Pc Portable IP V145 Dual Core - Disque SSD - Garantie 1an',739);
	articles.push(article);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
	article.addArticl('entertainement','17','TV smart','Vega','./img/entertainement/TV smart/1.jpg','Vega Téléviseur Smart UHD - 55" 4K - Noir - Garantie 3 Ans',680);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','18','TV smart','Vega','./img/entertainement/TV smart/2.jpg','Vega Téléviseur Smart UHD 58" 4K - Noir - Garantie 3 ans',786);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','19','TV smart','Samsung','./img/entertainement/TV smart/3.jpg','Samsung Téléviseur 43" - Flat Smart Full HD TV - Garantie 2 Ans',850);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','20','TV smart','Telefunken','./img/entertainement/TV smart/4.jpg','Telefunken Téléviseur Smart 40" - F6683 - FullHD - Garantie 3 Ans',1089);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','21','TV smart','Telefunken','./img/entertainement/TV smart/5.jpg','Telefunken TV TELEFUNKEN - 50A8000- SMART-NETFLIX -4K-Garanti 3 ans',1275);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','22','TV smart','Tornado','./img/entertainement/TV smart/6.jpg','Tornado Téléviseur LED 58" SMART TV 4K',1918);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','23','TV smart','Hisense','./img/entertainement/TV smart/7.jpg','Hisense Téléviseur LED 65- 4K UHD - Smart - Garantie 3 ans',3249);
	articles.push(article);

var article=creatArticle()
	article.addArticl('entertainement','24','TV smart','Maxwell','./img/entertainement/TV smart/8.jpg','Maxwell SMART TV - 50 8GB 4K Ultra HD - Récepteur intégré - Garantie 3 Ans',1329);
	articles.push(article);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var article=creatArticle()
	article.addArticl('Kitchen','25','Robot','Baya','./img/Kitchen/robot/1.jpg','Baya Broyeur - Multifonction - Chopper Rapide - 500 ml - Rose',19);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','26','Robot','','./img/Kitchen/robot/2.jpg','Mini Mixeur de Fruits Portable électrique Rechargeable avec USB - Bleu - 380ml',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','27','Robot','','./img/Kitchen/robot/3.jpg','Mini Mixeur de Fruits Portable électrique Rechargeable avec USB - Rose - 380ml',29);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','28','Robot','Nicer Dicer Plus','./img/Kitchen/robot/4.jpg','Nicer Dicer Plus Broyeur Multifonction Chopper Rapide - 500 ml',18);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','29','Robot','','./img/Kitchen/robot/5.jpg','Batteur électrique 7 vitesses - Rouge',32);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','30','Robot','Baya','./img/Kitchen/robot/6.jpg','Baya Pack de Deux Broyeurs - Multifonction - Chopper Rapide - 500 ml - Rose - Vert',38);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','31','Robot','Topmatic','./img/Kitchen/robot/7.jpg','Topmatic Robot - Pétrin - 5L - 1400W - Rouge - Made in Germany - PKM-1400 - Garantie 1 An',258);
	articles.push(article);

var article=creatArticle()
	article.addArticl('Kitchen','32','Robot','Tornado','./img/Kitchen/robot/8.jpg','Sandwich Maker Panini - 750 W',33);
	articles.push(article);


function logout(){
	sessionStorage.removeItem("user");
	location.reload();
}