module.exports={
    getAll:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.read_houselist()
      
        .then( house => res.status(200).send( house ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    create:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;
    
        dbInstance.create_houselist([name, address, city, state, zipcode ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
      delete:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_houselist([ params.id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
    
}