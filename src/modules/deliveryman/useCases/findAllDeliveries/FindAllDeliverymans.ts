import { FindAllDeliveriesDeliveryman } from './FindAllDeliverymansController';

import { Request, Response } from "express";


export class FindAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response ) {
        const { id_deliveryman } = request

        const findAllDeliveries = new FindAllDeliveriesDeliveryman()
        const deliveries = await findAllDeliveries.execute(id_deliveryman)

        return response.json(deliveries)
    }
}