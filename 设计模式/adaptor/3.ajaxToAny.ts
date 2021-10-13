/*
 * @Author: 朱世新
 * @Date: 2021-10-14 07:20:52
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-14 07:40:31
 * @Description: 
 *
 *
 * 原项目全用的是jquery $.ajax
 */

 let $ =require('jquery');
 let axios = require('axios');

 function toAxiosAdaptor(options){
   return axios({
     url:options.url,
     method:options.type
   })
 }
 $.ajax({
   url:'http://loaclhost:8080/api/user',
   type:'GET',
   success(data){
     console.log(data);
   }
   error(err){
     console.log(err);
   }
 })