const Dev = require("../model/Dev")

module.exports = {

    async store (req, resp) {
          
         const { user } = req.headers;
         const { devId } = req.params;

        
         const  loggedDev = await Dev.findById(user);
         const targetDev = await Dev.findById(devId);

         if (!loggedDev) {
            return resp.status(400).json( { error : 'Dev not exists'} );
        }

         if (!targetDev) {
             return resp.status(400).json( { error : 'Dev not exists'} );
         }

         if (loggedDev.like.includes(targetDev._id)) {
            const index = loggedDev.like.indexOf(targetDev._id);
            loggedDev.like.splice(index, 1);
         }

         if (loggedDev.dislike.includes(targetDev._id)) {
            loggedDev.dislike.push(targetDev._id);
            
         }        

         await loggedDev.save();
        return resp.json(loggedDev);
    }

};