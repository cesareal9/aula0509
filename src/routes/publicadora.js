const express = require("express");
const publucadora_controller = require("../controllers/Publicadora")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(publucadora_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(publucadora_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = publucadora_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = publucadora_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    publucadora_controller.destroy(req.params.id)
    res.json()
})

module.exports = router