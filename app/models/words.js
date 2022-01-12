const MainModel = require (__path_schemas + 'words');

module.exports = {

    listItems : (params, option) => {
        let sort = {};
        let objwhere = {};
        if (params.keyword !=='') objwhere.name = new RegExp(params.keyword, 'i');
        if (params.sortField) sort[params.sortField] = params.sortType;

        if(option.task == 'all'){
            return MainModel.find(objwhere)
                            .select('word class definition')
        }
        else if(option.task == 'one'){
            return MainModel.find(params)
                            .select('word class definition')
        }
    },

    addItem : (data, option) => {

        if(option.task == 'add'){
            return MainModel(data).save( function (err, result) {
                if (err){
                    console.log(err);
                }
                else{
                    console.log(result)
                }
            });
        }
    },

    editItem : (params, option) => {
        if(option.task == 'edit'){
            return MainModel.updateOne({ _id: params.id}, params.body)
        }
    },

}