import { AutheticateClientController } from './modules/account/autheticateClient/AuthenticateClientController';
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AutheticateDeliverymanController } from './modules/account/authenticateDeliveryman/AutheticateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const autheticateClientController = new AutheticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AutheticateDeliverymanController();

routes.post("/clients", createClientController.handle)
routes.post("/clients/authenticate", autheticateClientController.handle)
routes.post("/deliverymans", createDeliverymanController.handle)
routes.post("/deliverymans/authenticate", authenticateDeliverymanController.handle)

export { routes }