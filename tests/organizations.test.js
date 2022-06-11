process.env.NODE_ENV = 'development';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
const db = require("../models");
let should = chai.should();

chai.use(chaiHttp);

let user = {
    password:'Password123!',
    email:'alanalexis97@hotmail.com'
}

let organizations = [
    {
        name:'Organization 1',
        image:'https://m.media-amazon.com/images/I/81vNj66j+OL._AC_SX466_.jpg',
        address:'Calle falsa 123',
        phone:111111,
        email:'correo@gmail.com'
    },{    
        name:'Organization 2',
        image:'https://m.media-amazon.com/images/I/81vNj66j+OL._AC_SX466_.jpg',
        address:'Calle falsa 125',
        phone:111112,
        email:'correo2@gmail.com'
    }
];

let token;

/*  */
describe('Organization',()=>{
    beforeEach(async()=>{/*Before each test empty the db*/ 
        await db.Organization.destroy({truncate:true})
    });
    /*POST USER FOR GET TOKEN*/
    describe('/POST login',()=>{
        it("It login the user",(done)=>{
            chai.request(server)
                .post('/users/auth/login')
                .send(user)
                .end((err,res)=>{
                    token = res.body.token;
                    res.should.have.status(200);
                    done();
                })
        })
    })

    describe('/GET organizations',()=>{
        it("It should GET all the Organization",(done)=>{
            chai.request(server)
                .get('/organization/public')
                .set({Autorization: `Bearer ${token}`})
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(null);
                    console.log("Buscando error ------------")
                    console.log(err)
                    done();
                });
        });
    });
/* 
    describe('/POST organizations',()=>{
        it("It should UPDATE a Organization given the id",(done)=>{
            chai.request(server)
                .post('/organization/public')
                .set({Autorization: `Bearer ${token}`})
                .send(organizations[0])
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Organization created');
                    done();
                });
        });
    });

    describe('/PUT/:id organizations',()=>{
        it("It should UPDATE a Organization given the id",(done)=>{
            chai.request(server)
                .put('/organization/public/1')
                .set({Autorization: `Bearer ${token}`})
                .send(organizations[1])
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Organization update!');
                    done();
                });
        });
    }); */
});