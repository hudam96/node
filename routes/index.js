var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res) {
    var arr = [{name:"Education in Africa"
            ,des:"In 2000, the United Nations adopted " +
            "the Millennium Development Goals, " +
            "a set of development goals for the year " +
            "2015, more specifically" , url:"http://geography.name/wp-content/uploads/2016/07/p2_girl_in_class_2.jpg" },
        {
            name:"Education in Egypt" , des:"Egypt has the largest overall education system in Africa," +
            " and it has grown rapidly since the early 1990s. In recent years the Government of Egypt " ,url:"http://www.egyptindependent.com/app/uploads/sites/default/files/photo/2012/09/27/115366/trq_wjyh_12.jpg"
        },{
        name:"Education in Iraq" , des:"Iraq established its education system in 1921, offering both " +
            "public and private paths. In the early 1970s, " +
            "education became public and free at all levels, and mandatory at the primary level." , url:"https://foreignpolicyblogs.com/wp-content/uploads/Iraqi-children-happy-to-be-back-in-class-at-Teabat-al-Reah-School-in-Zumar-picture-UNICEF-Anmar.jpg"
        }]
  res.json(arr)

});
router.get('/', function(req, res, next) {
    res.render('home');
});


router.get('/index', function(req, res) {
    res.render('indexx')
});


module.exports = router;
