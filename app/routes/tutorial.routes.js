module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller");
    var router = require("express").Router();

    router.post("/tutorial", tutorials.create);
    router.get("/tutorial", tutorials.findAll);
    router.get("/tutorial/:id", tutorials.findOne);
    router.get("/published", tutorials.findAllPublished);
    router.put("/tutorial/:id", tutorials.update);
    router.delete("/tutorial", tutorials.deleteAll);
    router.delete("/tutorial/:id", tutorials.delete);

    app.use('/api', router);
}