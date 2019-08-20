var exec = require('cordova/exec');
         module.exports = {
           demo:function(success){
                   exec(success, function(){}, "CABasicPlugin", "demo",[]);
           }
               
         };
