module.exports = (app) => {
  const  UserService  = require('../services/users')
  const usersInfo = new UserService()

  app.get('/data', async(req, res) => {
    await usersInfo.getAll().then((data)=>{
      res.send(data);

    }).catch((err)=>{
      res.send(err.message);
    })
  })
  
  app.get('/id',async(req,res )=>{
   await usersInfo.getById(req.body.id).then((data)=>{
     res.send(data)
   }).catch((err=>{
     res.send(err.message);
   }))
  })

  app.post('/create',async(req,res)=>{
    await usersInfo.createUser(req.body).then((data)=>{
      res.send(data)
    }).catch((err)=>{
      res.send(err.message)
    })
  })

  app.delete('/delete',async(req,res)=>{
    await usersInfo.deleteUser(req.body.id).then((data)=>{
      res.send({"deleted":data})
    }).catch((err)=>{
      res.send(err.message)
    })
  })

  app.put('/update/:id', async(req, res)=>{
    await usersInfo.userUpdateById(req.params.id, req.body)
    .then((data)=>{
        
        res.send({"updated": data})
    })
    .catch((err)=>{
        console.log("something is wrong !");
        
    })
})
}