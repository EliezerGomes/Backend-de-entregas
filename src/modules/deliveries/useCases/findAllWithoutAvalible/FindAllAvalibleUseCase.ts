import { prisma } from "../../../../database/prismaClient";

export class FindAllAvalibleUseCase {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            }
        })

        return deliveries
    }
}