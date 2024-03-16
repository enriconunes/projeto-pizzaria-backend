import prismaClient from "../../prisma"

class DeleteItemService{
    async execute(item_id:string){
        const item = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })

        return item
    }
}

export { DeleteItemService }