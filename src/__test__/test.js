const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const { response } = require('../../app');

beforeAll(done => {
    done()
  })
  
  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})

describe('User Registration', () => {
    it('test if a user registration was successful', async () => {
        const data = {
            firstname: 'testing',
            lastname: 'test',
            email: 'test@gmail.com',
            password: 'test123',
            role: 'Supervisor'
        }
        request(app).post('/')
        .send(data)
        .expect(201)
    });

    it('test if a user registration was not successful', async () => {
        const data = {
            firstname: 'testing',
            lastname: 'test',
            email: 'test@gmail.com',
            password: 'test123',
            role: 'Supervisor'
        }
        request(app).post('/')
        .send(data)
        .expect(400)
    });

    it('test to successfully login in a user', async () => {
        const data = {
            email: 'test@gmail.com',
            password: 'test123',
        }
        request(app).get('/')
        .send(data)
        .expect(200)
    });
    
    it('test when a user login fails', async () => {
        const data = {
            email: 'test@gmail.com',
            password: 'test123',
        }
        const res =  request(app).get('/')
        .send(data)
        .expect(400)
    });
    


});

describe('fetch saved users', () => {
    it('fetch all users based on role', async () => {
        const data = {
            role: 'Supervisor'
        }
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmViZTZiMzJhYTYxMDQ5YmVkYTJiZCIsImVtYWlsIjoiSm9obkRvZUBnbWFpbC5jb20iLCJyb2xlIjoiU3VwZXJ2aXNvciIsImlhdCI6MTYzNDgxMzQ5NSwiZXhwIjoxNjM0ODMxNDk1fQ.Vvj0oys1fd6p-GvN4FZFRh9F_Z6DCEYt9keWou8RMSQ`
        request(app).post('/users')
        .send(data)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
    });

    it('it fails when user token is not provided', async () => {
        const data = {
            role: 'Supervisor'
        }
        request(app).get('/users')
        .send(data)
        .expect(403)
    });

});


describe('create product and product category', () => {
    it('create product category', async () => {
        const data = {
            category: 'Shoes',    
        }
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmViZTZiMzJhYTYxMDQ5YmVkYTJiZCIsImVtYWlsIjoiSm9obkRvZUBnbWFpbC5jb20iLCJyb2xlIjoiU3VwZXJ2aXNvciIsImlhdCI6MTYzNDgxMzQ5NSwiZXhwIjoxNjM0ODMxNDk1fQ.Vvj0oys1fd6p-GvN4FZFRh9F_Z6DCEYt9keWou8RMSQ`
        request(app).post('/product/category')
        .send(data)
        .set('Authorization', `Bearer ${token}`)
        .expect(201)
    });

    it('create product', async () => {
        const data = {
            name: 'Nike',
            price: '$99.9',
            category: '617103e4b1385d1177bdd01c'
        }
        request(app).get('/product/create')
        .send(data)
        .expect(201)
    });

});

