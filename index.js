import express from "express";

const PORT =3000;
const app = express()

app.use(express.static('./public'))
app.use(express.json())

const userStore  ={}
const challengstore ={}

app.post('/register',(req,res)=>{
    const {username,password} =req.body;
    const id = `user${Date.now()}`;
    const user ={
        id,
        username,
        password
    }
    userStore[id]=user
    console.log(`user is register `,userStore[id])
    return res.json({id})
});