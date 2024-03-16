import { Request, Response } from "express"
import { SendOrderService } from "../../services/Order/SendOrderService"

//send order = trocar draft (rascunho) de true para false
class SendOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body

        const sendOrderService = new SendOrderService()

        const order = await sendOrderService.execute(order_id)

        res.json(order)

    }
}

export { SendOrderController }