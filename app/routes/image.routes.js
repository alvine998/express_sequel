module.exports = (app) => {
    const multer = require("multer");
    const path = require("path");
    const dirname = path.resolve();

    var Storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, path.join(dirname, '/resources/uploads/'))
        },
        filename: (req, file, callBack) => {
            callBack(null, `${file.fieldname}_${file.originalname}`)
        }
    });

    var upload = multer({
        storage: Storage
    });

    app.post("/upload", upload.single("images"), (req, res) => {
        console.log(req.file);
        try {
            res.status(200).send({
                message: "success",
                info: req.file.filename
            })
        } catch (err) {
            console.log(err)
        }
    })
}