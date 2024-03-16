import prismaClient from "../../prisma"

class CreateCategoryService{

    async execute(name: string){

        console.log("JSON RECEBIDO: ", name)

        if(name === ""){
            throw new Error("Nome inválido!");
        }

        const category = await prismaClient.category.create({
            data:{
                name: name
            },
            select:{
                id: true,
                name: true
            }
        })

        return category;
    }

}

export { CreateCategoryService }