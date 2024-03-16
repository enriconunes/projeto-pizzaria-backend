import prismaClient from "../../prisma"

class DeleteOrderService{
    async execute(order_id: string){

        const deleteOrder = await prismaClient.order.delete({
            where:{
                id: order_id
            }
        })

        return deleteOrder
    }
}

export { DeleteOrderService }