import prismaClient from "../../prisma";

class ListProductsByCategoryService{
    async execute(category_id: string){

        const product = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return product
    }
}

export { ListProductsByCategoryService }