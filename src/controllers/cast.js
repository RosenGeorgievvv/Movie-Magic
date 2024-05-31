module.exports = {
  createGet: (req, res) => {
    res.render("cast-create");
  },
  createPost: (req, res) => {
    res.end();
  },
};
