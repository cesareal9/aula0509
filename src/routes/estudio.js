const express = require("express");
const estudio_controller = require("../controllers/Estudio")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(estudio_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(estudio_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    console.log(req.body);
    const code = estudio_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = estudio_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    estudio_controller.destroy(req.params.id)
    res.json()
})

module.exports = router