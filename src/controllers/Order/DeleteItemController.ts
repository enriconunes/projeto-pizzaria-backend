import { Request, Response } from "express"
import { DeleteItemService } from "../../services/Order/DeleteItemService"

class DeleteItemController{
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string

        const deletemItemService = new DeleteItemService()

        const item = await deletemItemService.execute(item_id)

        res.json(item)
    }
}

export { DeleteItemController }