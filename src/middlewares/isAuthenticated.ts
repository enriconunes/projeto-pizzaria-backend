import { Payload } from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

//criar um modelo de tipagem que recebe uma variavel sub do tipo string
//sub é um campo do jwt que contem o id do user logado
//o sub foi enviado para o jwt em ./AuthUserService.ts
interface payload{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    // console.log("Chamou esse middleware")

    //receber o token que vem no headers do jwt
    const authToken = req.headers.authorization

    if(!authToken){
        //se nao receber um token, retorna erro nao autorizado
        return res.status(401).end();
    }

    // é recebido uma string "baerer GWeosf3..."
    // entao separa a string pelo espaço e guarda apenas o valor do token, eliminando o que vem antes do espaço
    const [, token] = authToken.split(" ")

    try{
        //validar token
        //verify retorna o conteudo do jwt
        //o retorno é tipado, obrigando q seja do tipo payload (inteface criada acima)
        //armazena apenas o campo 'sub' do conteudo retornado

        //o verify confere se o token está de acordo com a senha privada da variavel de ambiente
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as payload;

        //injetar o id do user logado no require
        //dessa forma, todas as rotas que chamarem esse middleware terao acesso ao id apenas usando req.user_id
        req.user_id = sub;

        //se passar por todas as condicoes
        //entao prossegue a logica das rotas
        return next()

    }catch(err){
        return res.status(401).end()
    }
}