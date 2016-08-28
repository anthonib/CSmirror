'use strict';

/**
 * Module dependencies.
 */
var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);

/**
 * Default routes.
 */
describe('default routes', function() {

    describe('home page', function() {
        it('responds with 200 and html', function(done) {
            agent
                .get('/')
                .expect(200)
                .expect('Content-Type', /html/)
                .end(done);
        });
    });

    describe('error page', function() {
        it('responds with 404 and html', function(done) {
            agent
                .get('/404')
                .expect(404)
                .expect('Content-Type', /html/)
                .end(done);
        });
    });

});
