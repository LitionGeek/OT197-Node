# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```


List of Users

Admin´s 
{"id":3,"firstName":"Jolie","email":"jchattock2@springer.com",password:"agxJcbF@z73K8l","roleId":2},
{"id":4,"firstName":"Yance","email":"ygelly3@washingtonpost.com",password:"SQ@3o3ALN","roleId":2},
{"id":6,"firstName":"Pat","email":"pgoman5@ning.com",password:"equG@eg341B","roleId":2},
{"id":8,"firstName":"Carr","email":"cdauncey7@tinypic.com",password:"FgjSe@EH3GSr","roleId":2},
{"id":10,"firstName":"Terencio","email":"tperel9@ihg.com",password:"pFTyk@nW3OFm","roleId":2},
{"id":11,"firstName":"Joyann","email":"jstogglesa@flavors.me",password:"dCp@MC3wg1","roleId":2},
{"id":12,"firstName":"Waldemar","email":"wbridelb@deliciousdays.com",password:"YlcKp@at3C97","roleId":2},
{"id":16,"firstName":"Iago","email":"iguwerf@blog.com",password:"3WLh@Il3LVZ","roleId":2},
{"id":17,"firstName":"Emmeline","email":"eissardg@pagesperso-orange.fr",password:"RHMxKl@9P32MQ","roleId":2},
{"id":19,"firstName":"Allys","email":"awanderscheki@cbsnews.com",password:"6ppi@oF3IKj","roleId":2},

User´s
{"id":1,"firstName":"Frannie","email":"fnozzolinii0@angelfire.com",password:"XYrA@140@o93Eeg","roleId":1},
{"id":2,"firstName":"Steward","email":"sleale1@domainmarket.com",password:"Av@fO3cjN","roleId":1},
{"id":5,"firstName":"Oriana","email":"ostaynes4@redcross.org",password:"eI0DvVX@tN3LPG","roleId":1},
{"id":7,"firstName":"Ronnica","email":"rwillowby6@freewebs.com",password:"JAwfYL@kT3rjC","roleId":1},
{"id":9,"firstName":"Romeo","email":"rgaule8@simplemachines.org",password:"v@y73BwZ","roleId":1},
{"id":13,"firstName":"Walliw","email":"wjerromc@ucsd.edu",password:"mBgv@Jm32BZ","roleId":1},
{"id":14,"firstName":"Tansy","email":"tmarchenkod@jimdo.com",password:"viS35@In37gk","roleId":1},
{"id":15,"firstName":"Simonette","email":"sgodbolde@cyberchimps.com",password:"DR@ME3Tx9","roleId":1},
{"id":18,"firstName":"Gaston","email":"geddieh@mashable.com",password:"9SF@x03yyN","roleId":1},
{"id":20,"firstName":"Karin","email":"kgeibelj@parallels.com",password:"HQ@BB3IsM","roleId":1}
