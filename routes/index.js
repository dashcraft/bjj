var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next){
    res.render('main', {title: 'American Top Team OKC'});
});

router.get('/instructors', function(req, res, next ){
  res.render('instructors', { title: 'ATTOKC - Instructors'});
});

router.get('/BJJ', function(req, res, next){
  res.render('bjj', { title: 'ATTOKC - Brazilian JiuJitsu'});
});

router.get('/Wrestling', function(req, res, next){
  res.render('wrestling', { title: 'ATTOKC - Wrestling'});
});

router.get('/Kids', function(req, res, next){
  res.render('kids', { title: 'ATTOKC - Kids BJJ'});
});

router.get('/Kickboxing', function(req, res, next){
  res.render('kickboxing', { title: 'ATTOKC - Kick Boxing'});
});

router.get('/NoGi', function(req, res, next){
  res.render('noGi', { title: 'ATTOKC - No Gi'});
});

module.exports = router;
