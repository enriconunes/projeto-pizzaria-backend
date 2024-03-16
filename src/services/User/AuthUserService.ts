import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AuthRequest{
    email: string,
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){

        if(!email){
            throw new Error("Email inválido!");
        }

        if(!password){
            throw new Error("Senha inválida!");
        }

        //se encontrar o email, ja armazena os campos do user encontrado
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Email e/ou senha incorretos.");
        }

        // acessar campos do user com user.atributo
        // 'compare' compara automaticamente o pass da request com o hash da db
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email e/ou senha incorretos.");
            
        }

        // console.log(`Email: ${email}\nSenha: ${password}`)

        // se passar por todas as condicoes anteriores
        // entao as credenciais estao corretas

        // gerar token JWT
        // é gerado um token novo sempre que o user faz login
        
        const token = sign(
            // payload (conteudo do token)
            {
                name: user.name,
                email: user.email
            },
            // chave privada do .env
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "30d" //token expira em 30 dias
            }
        )

        // retornar os dados do user e o token
        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
         }
    }
}

export { AuthUserService }