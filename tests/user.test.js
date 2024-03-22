const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../app');
const helper = require('../helpers/user.helper');

require('dotenv').config();

beforeEach(async ()=> {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(
        ()=> {console.log("Connection to MongoDB enstablished")},
        err => {console.log('Failed', err)}
    )
});

afterEach(async ()=> {
    await mongoose.connection.close();
})

describe("Request GET /api/users", () => { // test / it = same
    it("Returns all users", async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    }, 10000)
})

describe("Request GET /api/users/:username", () => {
    it("Returns a user", async () => {
        const result = await helper.findLastInsertedUser();
        console.log(result);

        const res = await request(app).get('/api/users/'+ result.username);
        expect(res.statusCode).toBe(200);
        expect(res.body.data.username).toBe(result.username);
        expect(res.body.data.email).toBe(result.email);
    }, 10000)
})

describe("Request POST /api/users", () => {
    it("Create a user", async () => {
        const res = await request(app)
        .post('/api/users')
        .send({
            username: "test",
            password: "123456",
            name: 'kostas',
            surname: 'kostakis',
            email: 'test@aueb.gr'
        })
        expect(res.statusCode).toBe(400);
        expect(res.body.data.username).toBeTruthy();
    }, 10000);

    // it("Create a user Error Password Length", async () => {
    //     const res = await request(app)
    //     .post('/api/users')
    //     .send({
    //         username: "test",
    //         password: "123",
    //         name: 'kostas',
    //         surname: 'kostakis',
    //         email: 'test@aueb.gr'
    //     })
    //     expect(res.statusCode).toBe(400);
    //     expect(res.body.data.username).toBeTruthy();
    // }, 10000);

    // it("Create a user testing username & password", async () => {
    //     const res = await request(app)
    //     .post('/api/users')
    //     .send({
    //         username: "test",
    //         password: "123456",
    //         name: 'kostas',
    //         surname: 'kostakis',
    //         email: 'test@aueb.gr'
    //     })
    //     expect(res.statusCode).toBe(400);
    //     expect(res.body.data.username).toBeTruthy();
    // }, 10000);

})

describe("DELETE /api/users/:username", () => {
    it("Deletes last inserted user", async () => {
        const result = await helper.findLastInsertedUser();
        const res = await request(app).delete('/api/users/'+ result.username);
        expect(res.statusCode).toBe(200);
    }, 10000)
})