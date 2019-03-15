const app = require('express')();
const request = require('request');
const cors = require('cors');
app.use(cors());

app.get('*',async(req,res)=>{
    // console.log(req.path.replace(/^\/(http|https):\/\//g,''))
    request(`https://${req.path.replace(/\/m/g,'')}`,{headers:{referer:'https://lhscan.net'}}).pipe(res);
})
app.listen(3000)