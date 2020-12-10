# app11_3mongo_join2

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2020/12/09 

 update :

***

node/express( es6 ) + mongoDb ,  aggregate Join sample 2

***
* Join sample: localhost:3000/bread_orders

***
### Data add

db.category.insertMany([
  { name: "食パン" },
  { name: "調理パン"},
  { name: "通常品"},
  { name: "その他"},
]);

db.type.insertMany([
  { name: "hight-price" },
  { name: "normal-price"},
  { name: "low-price"},
]);

db.tags.insertMany([
  { name: "年末品" },
  { name: "お盆向け"},
  { name: "正月向け"},
]);

***
mongoDb : 3.6.3

### npm
* mongodb: 3.6.3
* express : 4.16.1
* ejs : 2.6.2

### npm install

* npm install mongodb --save

* npm install express-session --save
* npm install express-flash --save
* npm install moment --save
* npm install csrf --save
* npm install bcrypt -save

***
### setup
express app1

cd app1

npm install

npm start

***
### npm

npm i @babel/core @babel/node @babel/preset-env --save-dev

***
### more


***

