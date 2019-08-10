const Dev = require("../model/Dev")

module.exports = {

    async store (req, resp) {
          
         const { user } = req.headers;
         const { devId } = req.params;

         console.log(user);
         console.log(devId);
         
         const  loggedDev = await Dev.findById(user);
         const targetDev = await Dev.findById(devId);

         if (!loggedDev) {
            return resp.status(400).json( { error : 'Dev not exists'} );
        }
         
         if (!targetDev) {
             return resp.status(400).json( { error : 'Dev not exists'} );
         }

         if (loggedDev.dislike.includes(targetDev._id)) {
            const index = loggedDev.dislike.indexOf(targetDev._id);
            loggedDev.dislike.splice(index, 1);
         }


         if (targetDev.like.includes(user)) {
             console.log("Deu match");
         }

         if (!loggedDev.like.includes(targetDev._id)) {
            loggedDev.like.push(targetDev._id);
         }
         await loggedDev.save();
        

        return resp.json(loggedDev);
    }

};