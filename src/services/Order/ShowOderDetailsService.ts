import prismaClient from "../../prisma";

class ShowOrderDetailsService{
    async excute(order_id: string){
        const order = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                order: true,
                product: true
            }
        })
        
        return order
    }
}

export { ShowOrderDetailsService }