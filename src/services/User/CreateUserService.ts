import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

// criar um modelo de parametro para o metodo execute
// definir uma tipagem aumenta a robustez
// o nome da interface pode ser qualquer um
interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    // passa 3 parametros do tipo UserRequest
    async execute({name, email, password}:UserRequest){

        //conferir se um email foi recebido
        if(!email){
            // esse erro será 'personalizado' e nao irá
            // quebrar o app pq foi tratado com o middleware
            throw new Error("Email incorreto");
        }

        // select do primeiro registro encontrado
        // onde o email for igual ao email da requisicao
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Este email já está sendo usado, tente outro.")
        }

        // cifrar senha
        const hashPassword = await hash(password, 8)

        // insert na tabela user
        // data: dados para o insert
        // select: dados para receber apos o insert
        // apenas os dados 'true' serao recebidos
        // se nao usar o select, é retornado todos os campos
        // do user inserido, incluindo o password
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: hashPassword
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })


        return(user)
    }
}

export { CreateUserService }