
const handlebars = require("express-handlebars");

//Configure handlebars to be .hbs
function configHbs(app) {
  const hbs = handlebars.create({
    extname: ".hbs",
  });
  app.engine(".hbs", hbs.engine);
  app.set("view engine", ".hbs");
}

module.exports = { configHbs };
