import { Response, Request } from "express"
import { AddOrderItemService } from "../../services/Order/AddOrderItemService"

class AddOrderItemController{
    async handle(req: Request, res: Response){

        const { order_id, product_id, amount } = req.body

        const addOrderItemService = new AddOrderItemService()

        const item = await addOrderItemService.execute({
            order_id,
            product_id,
            amount
        })

        res.json(item)
    }
}

export { AddOrderItemController }