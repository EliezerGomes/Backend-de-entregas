import { FindAllAvalibleUseCase } from './FindAllAvalibleUseCase';
import { Request, Response } from "express";

export class FindAllAvalibleController {
    async handle(request: Request, response: Response) {
        const findAllAvalibleUseCase = new FindAllAvalibleUseCase()

        const deliveries = await findAllAvalibleUseCase.execute()
        return response.json(deliveries)
    }
}