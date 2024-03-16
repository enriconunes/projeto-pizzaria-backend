import prismaClient from "../../prisma"

class ListSentOrderService{
    async execute(){
        const orders = await prismaClient.order.findMany({
            where:{
                draft: false,
                status: false //pedido entregue
            },
            orderBy:{
                created_at: 'desc'
            }
        })

        return orders
    }
}

export { ListSentOrderService }