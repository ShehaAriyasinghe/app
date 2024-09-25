  const jwt=require('jsonwebtoken');
  const {response} = require("express");
  const secret=process.env.SECRET;


      const verifiedToken=(req,resp,next)=>{
      const token=req.headers['authorization'];

      if(!token){
            return resp.status(400).json({'message':'empty token'});
      }

      try{
        const decordedValue=jwt.verify(token,secret);
        req.user=decordedValue;
        next();
      }catch (e) {
          return resp.status(403).json({'message': 'Invalid token'})
      }

  }
  module.exports = verifiedToken;
