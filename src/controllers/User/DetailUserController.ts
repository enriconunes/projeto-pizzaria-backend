import { Response, Request } from "express";
import { DetailUSerService } from "../../services/User/DetailUserService";

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        // console.log("ID DO USER: ", user_id)

        const datailUserService = new DetailUSerService()

        const user = await datailUserService.execute(user_id)

        return res.json(user)
    }
}

export { DetailUserController }