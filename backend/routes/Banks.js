var express = require('express');
var router = express.Router();
var Bank = require('../models/Bank');

router.get('/:userid?', function(req, res, next) {
  if (req.params.userid){
    Bank.getBankByUserId(req.params.userid, function(err, rows){
      if (err){
        res.json(err);
      }else{
        res.json(rows);
      }
    })
  }
  else{
    Bank.getAllBanks(function(err, rows){
      if (err){
        res.json(err);
      }else{
        res.json(rows);
      }
    })
  }
});

router.post('/',function(req,res,next){

  Bank.addBank(req.body,function(err,count){
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

  Bank.deleteBank(req.params.id,function(err,count){
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

  Bank.updateBank(req.params.id,req.body,function(err,rows){
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
