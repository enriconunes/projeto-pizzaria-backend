import { Request, Response, response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController{
    // metodo da classe chamado handle
    async handle(req: Request, res:Response){
        //visualizar o corpo da requisicao - name, email, password
        // console.log(req.body)
        const { name, email, password } = req.body

        // o return n é mais definido no controller
        // o valor do return será recebido pelo service
        // return res.json({ ok: true })

        const createUserService = new CreateUserService()
        // await: deve esperar a funcao finalizar para avancar
        // passa parametros tipados definidos no service
        const user = await createUserService.execute({
            name,
            email,
            password
        })

        return res.json(user)
    }
}

export { CreateUserController };