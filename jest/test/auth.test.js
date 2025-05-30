// supertest allows us to make HTTP requests to our Express app in tests.
const request = require('supertest');
const app = require('../src/app');

describe('Authentication API', () => {
    let token;

    it('should return JWT token on valid login', async () => {
        const res = await request(app).post('/login').send({
            email: 'test@gmail.com',
            password: 'Password123'
        });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token; // save token for next test
    });

    it('should reject login with wrong credentials', async () => {
        const res = await request(app).post('/login').send({
            email: 'test@gmail.com',
            password: 'wrongpassword'
        });

        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty('error', 'Invalid credentials');
    });

    it('should block access to /profile without token', async () => {
        const res = await request(app).get('/profile');
        expect(res.statusCode).toBe(401);
        expect(res.body).toHaveProperty('error', 'Token missing');
    });

    it('should access protected route with valid token', async () => {
        const res = await request(app)
            .get('/profile')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ id: 1, email: 'test@gmail.com' });
    });
});
