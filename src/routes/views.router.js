import { Router } from "express"

const router =  Router()
import manager from "../managers/productManager.js"

router.get("/", async (req, res)=>{
    try {
        const products = await manager.getProducts(req.query)
        const info={"count": products.length}
        res.render("home", {info , products})
    } catch (error) {
        res.status(500).send({status: "error", error: error.message})   
    }

})

router.get("/realTimeProducts", async (req, res)=>{
    try {
        const products = await manager.getProducts(req.query)
        const info={"count": products.length}
        res.render("realTimeProducts", {info , products})
    } catch (error) {
        res.status(500).send({status: "error", error: error.message})   
    }

})

export default router

