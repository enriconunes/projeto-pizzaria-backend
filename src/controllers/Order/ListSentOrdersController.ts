import { Request, Response } from "express"
import { ListSentOrderService } from "../../services/Order/ListSentOrdersService"

class ListSentOrdersController{
    async handle(req: Request, res: Response){
        const listSentOrdersService = new ListSentOrderService()
        const orders = await listSentOrdersService.execute()
        res.json(orders)
    }
}

export { ListSentOrdersController }