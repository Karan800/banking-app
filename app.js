const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/banking-routes')
const app = express()
const logger = require('morgan')
require('dotenv').config()
var corsOptions = {

    origin:"http://localhost:8081"

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api',router)

app.get('/',(req,res)=>{

    res.json({

        msg:"wc to bank app"
    })

})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{

    console.log(`server running on ${PORT}`);
})


const db = require("./models")
db.mongoose.connect(db.mongogURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{

    console.log("successfully conn to db");
})
.catch((error)=>{
    console.log(error);
    process.exit
})