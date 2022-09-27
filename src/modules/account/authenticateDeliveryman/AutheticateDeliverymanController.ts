import { Request, Response } from "express";
import { AutheticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AutheticateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateDeliverymanUseCase = new AutheticateDeliverymanUseCase()

        const result = await authenticateDeliverymanUseCase.execute({ username, password })

        return response.json(result)
    }
}