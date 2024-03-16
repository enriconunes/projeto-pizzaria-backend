import prismaClient from "../../prisma"

interface orderRequest{
    table: number,
    name: string
}

class OpenOrderService{

    async execute({ table, name }: orderRequest){
        const order = await prismaClient.order.create({
            data:{
                table: table,
                name: name
            }
        })

        return order
    }

}

export { OpenOrderService }