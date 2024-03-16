import { Request, Response } from "express";
import { ShowOrderDetailsService } from "../../services/Order/ShowOderDetailsService";

class ShowOrderDetailsController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;
        const showOrderDetailsService = new ShowOrderDetailsService()
        const order = await showOrderDetailsService.excute(order_id)
        res.json(order)
    }
}

export { ShowOrderDetailsController }