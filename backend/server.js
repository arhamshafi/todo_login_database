const express = require('express')
const app = express()
let cors = require("cors")
let mongoose = require("mongoose")
let new_users = require("./modules/sign_up")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Arham:123@cluster0.qa4g3jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("mongoose get conected");

})

app.post("/sign_up", async (req, res) => {
    try {
        let { email } = req.body
        let existing = await new_users.findOne({ email })
        if (existing) {
            return res.json({ success: false })
        }
        let user = new new_users(req.body)
        await user.save()
        res.json({ message: `Login Successfully By  ${user.firstName} ${user.lastName} `, user: user, success: true })

    }
    catch (err) {
        console.error("error with api:", err);
        return res.json({ message: "Server Error", success: false });
    }

})


app.post("/login", async (req, res) => {

    try {
        let { email, password } = req.body
        let user = await new_users.findOne({ email })
        if (user.length === 0) {
            return res.json({ sms: false })
        }
        if (user.password !== password) {
            return res.json({ sms: false })
        }
        return res.json({ sms: true, user: user })


    }
    catch (err) {
        console.error("error with api:", err);
        return res.json({ message: "Server Error", success: false });
    }


})

// app.post("/todo" , (req , res)=>{
//     console.log(req.body);
    
// })



app.listen(4500, () => {
    console.log(`server is working on port 4500 `)
})
