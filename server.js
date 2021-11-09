const express = require("express")
const app = express()

const member = require("./routers/member")
const users = require("./routers/users")
const paket = require("./routers/paket")
const transaksi = require("./routers/transaksi")
const { login } = require("./routers/login")

app.use("/member",member)
app.use("/users",users)
app.use("/paket",paket)
app.use("/transaksi",transaksi)
app.use("/login",login)

app.listen(8000,() => {
    console.log("Server run on port 8000");
})