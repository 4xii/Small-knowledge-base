/*
 * Author: 朱世新
 * Date: 2021-10-14 06:50:43
 * LastEditors: 朱世新
 * LastEditTime: 2021-10-14 06:52:29
 * Description: 
*/
let express = require('express');
let app = express();
app.get('/api/user',function(req,res){
  res.json({id:req.query.id,name:'4xi'})
})
app.listen(8080)