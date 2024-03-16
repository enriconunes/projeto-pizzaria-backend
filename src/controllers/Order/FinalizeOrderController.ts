import { Request, Response } from "express";
import { FinalizeOrderService } from "../../services/Order/FinalizeOrderService";

class FinalizeOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body
        const finalizeOrderService = new FinalizeOrderService()
        const order = await finalizeOrderService.execute(order_id)
        res.json(order)
    }
}

export { FinalizeOrderController }