var express = require('express');
var router = express.Router();
var cors = require('cors');

const bodyParser= require('body-parser')

const fileUpload = require('../middleware/file-uploads');

const ItemsModel = require (__path_models + 'words');



/* GET users listing. */
router.get('/', cors(), async (req, res) => {
      let params= [];
      params.keyword = req.query.keyword;
      params.sortField = req.query.orderBy;
      params.sortType = req.query.orderDir;
      const data = await ItemsModel.listItems(params, {'task' : 'all'});
      res.status(201).json({
            success: true,
            data: data,
      })
});

router.get('/:word', cors(), async (req, res) => {
      let para= req.params.word;
      para = new RegExp(req.params.word,'i');
      let findWord ='';
      findWord = {
            word : para
      };
      console.log(para)
      const data = await ItemsModel.listItems(findWord, {'task' : 'one'});
      res.status(201).json({
            success: true,
            data: data,
      })
});

router.post('/addword', async(req, res) => {
      
      await ItemsModel.addItem(req.body, {'task' : 'add'});
      console.log('success!')
});

router.post('/upload', fileUpload.single('image'), function (req, res) {
      // req.file is the name of your file in the form above, here 'uploaded_file'
      // req.body will hold the text fields, if there were any 
      console.log(req.file)
});

router.put('/edit/:id', cors() ,async(req, res) => {
      await ItemsModel.editItem({'id': req.params.id, 'body': req.body}, {'task' : 'edit'});
      console.log(req.params.id);
      console.log(req.body);
      console.log('success!')
});


module.exports = router;
