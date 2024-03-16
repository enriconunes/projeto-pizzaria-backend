import { Response, Request } from "express";
import { ListProductsByCategoryService } from "../../services/Product/ListProductsByCategoryService";

class ListProductsByCategoryController{

    async handle(req: Request, res: Response){

        // nao foi usado req.body pois o parametro é passado pela url. ex:
        // http://localhost:3000/listProducts?category_id=b3def3d3-8099-488e-9f40-e75b21602832
        const category_id = req.query.category_id as string

        const listProductsByCategoryService = new ListProductsByCategoryService()

        const products = await listProductsByCategoryService.execute(category_id)

        res.json(products)
}

}

export { ListProductsByCategoryController }