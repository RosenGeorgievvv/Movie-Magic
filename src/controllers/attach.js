const { getMovieById } = require("../services/movie");

module.exports = {
    attachGet: async (req, res) =>{
        const id = req.params.id;
        const movie = await getMovieById(id);

        if(!movie){
            res.render('404');
            return;
        }
        
       res.render('cast-attach');
    },
    attachPost: async (req, res) =>{
       
    }
}