
const Tasks = require("./models.js")

module.exports ={
    allTasks: (req,res)=>Tasks.find({})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    getTask: (req,res)=>Tasks.findById(req.params.id)
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>console.log(errs)||res.json(errs)),
                                                            
    makeTask: (req,res)=>Tasks.create(req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    updateTask: (req,res)=>Tasks.findByIdAndUpdate(req.params.id,req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    deleteTask: (req,res)=>Tasks.remove({_id:req.params.id})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),
    
}