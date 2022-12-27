const fastify = require('fastify')()
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()

fastify.register(require("@fastify/view"), {
    engine: {
      ejs: require("ejs"),
    },
  });
  fastify.get('/', async (request, reply) => {
    return reply.view("/views/index", { title: "Tenoqu" });
    });
  fastify.get('*', async (request, reply) => {
    return reply.view("/views/"+request.url, { title: "Tenoqu" });
    });
fastify.listen({port: process.env.PORT, host: '0.0.0.0'}, (err, address) => {
    if (err) throw err
    fastify.log.info(`Tenoqu listening on ${address}`)
    console.log("Tenoqu is running on port "+process.env.PORT+"!")
    })
    