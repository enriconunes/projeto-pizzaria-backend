import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/Order/DeleteOrderService";

class DeleteOrderController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const deleteOrderService = new DeleteOrderService()

        console.log("ORDER ID RECEBIDO: ", order_id)
        const deleteOrder = await deleteOrderService.execute(order_id)
        
        res.json(deleteOrder)
    }
}

export { DeleteOrderController }