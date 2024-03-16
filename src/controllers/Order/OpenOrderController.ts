import { Request, Response } from "express";
import { OpenOrderService } from "../../services/Order/OpenOrderService";

class OpenOrderController{

    async handle(req: Request, res: Response){
        const { table, name } = req.body

        console.log("TABLE: ", table, " NAME: ", name)

        const openOrderService = new OpenOrderService()

        const order =  await openOrderService.execute({table, name})

        res.json(order)

    }

}

export { OpenOrderController }