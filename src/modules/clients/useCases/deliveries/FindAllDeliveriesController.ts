import { FindAllDeliveries } from './FindAllDeliveries';
import { Request, Response } from "express";


export class FindAllDeliveriesController {
    async handle(request: Request, response: Response ) {
        const { id_client } = request

        const findAllDeliveries = new FindAllDeliveries()
        const deliveries = await findAllDeliveries.execute(id_client)

        return response.json(deliveries)
    }
}