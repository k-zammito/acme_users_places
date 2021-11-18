const express = require('express');
const { Client, ClientBase } = require('pg');
const client = new Client(process.env.DATABASE_URL || 'postgress://localhost/acme_user_places')

const syncAndSeed = async() => {
    const SQL = `
        CREATE TABLE "User"(
            id SERIAL PRIMARY KEY,
            name VARCHAR(20) NOT NULL UNIQUE
        );
        INSERT INTO "User"(name) VALUES('moe');
    `;
}

const init = async() => {
    try {
        await client.connect();
        await syncAndSeed()
    }
    catch(ex) {
        console.log(ex);
    }
};
 

const app = express();

app.get('/', (req, res, next) => {
    res.send(`
    <h1>Yoooooo!</h1>
    `)
})

const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));