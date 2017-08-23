var express = require('express');
var router = express.Router();
var Account = require('../models/Account');

router.get('/:userid/:bankid?', function(req, res, next) {
  if (req.params.userid){
    Account.getAccountByIds(req.params.userid, req.params.bankid, function(err, rows){
      if (err){
        res.json(err);
      }else{
        res.json(rows);
      }
    })
  }
});

router.get('/', function(req, res, next) {
    Account.getAllAccounts(function(err, rows){
      if (err){
        res.json(err);
      }else{
        res.json(rows);
      }
    })
})

router.post('/',function(req,res,next){

  Account.addAccount(req.body,function(err,count){
      //console.log(req.body);
      if(err)
      {
        res.json(err);
      }
      else{
        res.json(req.body);//or return count for 1 & 0
      }
  });
});

router.delete('/:id',function(req,res,next){

  Account.deleteAccount(req.params.id,function(err,count){
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(count);
    }
  });
});

router.put('/:id',function(req,res,next){

  Account.updateAccount(req.params.id,req.body,function(err,rows){
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
  });
});


module.exports = router;
