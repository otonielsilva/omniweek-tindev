const axios = require('axios');
const Dev = require('../model/Dev')

module.exports = {
    async index (req, resp) { 
          const { user } = req.headers;

          const loggedUser = await Dev.findById(user);

          if (!loggedUser) {
              return resp.status(501).json({ message: "not allowed"});
          }



          const users = await Dev.find(
               {
                    $and : [
                       { _id : { $ne: user } } ,
                       { _id : { $nin: loggedUser.like } },
                       { _id : { $nin: loggedUser.dislike } },
                    ]

               }

 
          );

          return resp.json(users);

    }   , 



   async store (req, resp) {

      
       const { username } = req.body;


       const userExists = await Dev.findOne({ username: username});

       

       if (userExists) {
           return resp.json(userExists);
       }

       console.log(`https://api.github.com/users/${username}`);

       const response = await axios.get(`https://api.github.com/users/${username}`);

       const {  name, bio, avatar_url: avatar} = response.data;

       const dev = await Dev.create({
          name: name,
          username: username,
          bio: bio,
          avatar: avatar,
          like: [],
          dislike: []


       });
       return resp.json(dev);
       
   }



}