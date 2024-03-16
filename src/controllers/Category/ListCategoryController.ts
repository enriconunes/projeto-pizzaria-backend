import { Request, Response } from "express"
import { ListCategoryService } from "../../services/Category/ListCategoryService"

class ListCategoryController{
    async handle(req: Request, res:Response) {

        const listCategoryService = new ListCategoryService()
        
        const categories = await listCategoryService.execute()

        res.json(categories)
    }
}

export { ListCategoryController }