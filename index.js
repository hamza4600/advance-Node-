const expres=require("express")
const app=expres();
const jwt=require("jsonwebtoken")
const uId=require("uuid")


// import {v4 as uuidv4} from "uuid"

console.log(uId.v4()) // a uniqua id  evevry time
let differnt=uId.v4()   // pass in a function  
// have  few function decode verify  sigin ,expire 
async function Token(){
    const one= await jwt.sign({id:`${differnt}`},"hamza")
    console.log(one)
}// generate adecoded string  
// Token()
console.log(`Diddent toen generated at every time  \n\n`)
// function open app 

//Token for user verifications
async function Tone(){
    const khan= await jwt.sign({id:"10"},"hamza")
    console.log(khan)

    const verify= await jwt.verify(khan,"hamza")
    console.log(verify)
    console.log(`user is verified`)
}// verify also toekn 
// Tone()

const html=`<h1>This is Basic exampl eof Docker with Node js </h1>
    <h1>Main Page of App</h1> <br/>
    <h2><a href="/bata">Page Number One</a></h2>
    <h2><a href="/Burger">Page Number One</a></h2>
    <h2><a href="/cofee3-D">Page Number One</a></h2>
    <h2><a href="/drinker">Page Number One</a></h2>
    <h2><a href="/jewlery">Page Number One</a></h2>
    <h2><a href="/marble">Page Number One</a></h2>
    <h2><a href="/pereiracolin">Page Number One</a></h2>
`
function Main(){
    console.log(`server running on port 8080`);
     app.get("/",(req,res)=>{
         // res.send("Hello hamza")
         res.send(html)
     })
    app.get("/hamza",(req,res)=>{
        res.send("hamza Is Admin")
    })
    // show all html files
    app.use(expres.static("static"))
    app.listen(8080)
}
Main()

