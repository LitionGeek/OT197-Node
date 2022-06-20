process.env.NODE_ENV = 'development';

let db = require('../models');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

const userLogin = {
    email: "alanalexis97@hotmail.com",
    password: "Password123!"
}

const members = [
    {
        image: "Image",
        name: "member 1"
    },
    {
        image: "Image",
        name: "member 2"
    }, {
        name: 213
    }, {
        name: ''
    }
];

let token;

describe('Members', () => {
    /**
    * Delete organizations in the table
    */
/*     before(async () => { //Before each test we empty the database
        await db.Members.destroy({ truncate: true });
    });
 */
    /*
    * Test the /POST auth user
    */
    describe('/POST GET JWT', () => {
        it('Test 1- it should POST GET TO THE JWT', async () => {
            await chai.request(server)
                .post('/users/auth/login')
                .send(userLogin)
                .then((res) => {
                    token = res.body.token;
                    res.should.have.status(200);
                    res.body.should.have.property("token");
                    /*       res.body.should.have.property("user").eql("roleId"); */
                });
        });



    });

    /* GET ALL ORGANIZATION */
    describe('/GET MEMBERS', () => {
        it('Test 2- it should GET all the members', async () => {
            await chai.request(server)
                .get('/members/1')
                .set("Authorization", token)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("members")
                    res.body.should.have.property("pageNext")
                    res.body.should.have.property("pagePrevious")
                });

        });
    });

    /* POST CREATE ORGANIZATION */
    describe('/POST organization', () => {
        it('Test 3- it should Create member', async () => {
            await chai.request(server)
                .post('/members')
                .set("Authorization", token)
                .send(members[0])
                .then((res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("message").eql('Member created');
                    res.body.should.have.property("member")
                });
        });
    });


    /* PUT ORGANIZATION with TOKEN*/
    describe('/PUT/:id member', () => {
        it('Test 4- it should PUT ID member', async () => {
            const count = await db.Members.max('id', { attributes: ['id'] })
            await chai.request(server)
                .put(`/member/${count}`)
                .set("Authorization", token)
                .send(members[1])
                .then((res) => {
                    console.log('Count ',count)
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql('Member Updated');
                })
        });
    });


});