module.exports= reqFilter=(req,resp,next)=>{                      // in middleware we have to add 3 parameters next is used the send or move forward to particular url 
    if(!req.query.age)                          
    {
        resp.send("Please Provide Age")
    }
    else if(req.query.age<18)
    {
        resp.send("You cannot Access the Page")
    }
    else{
        next();
    }
}
