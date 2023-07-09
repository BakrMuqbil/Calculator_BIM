const express = require ('express');
const bodyParser = require('body-parser');

 const app= express();
 app.use(bodyParser.urlencoded({extended: true}))
 app.get("/bmiCalculator", function(require, response){
   response.sendfile(__dirname +"/bmiCalculator.html")
 });
 app.post("/bmiCalculator", function(require, response){
 var num1 = parseFloat(require.body.n1);
 var num2 =parseFloat(require.body.n2);
 var result= num1 / (num2 *num2); 
 
   
   response.send("Your BMI is " + result)
 });
 
 app.listen(3000, function(){
   console.log("you now in server")
 });
