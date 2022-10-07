import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliverymans';
import { FindAllAvalibleController } from './modules/deliveries/useCases/findAllWithoutAvalible/FindAllAvalibleController';
import { AutheticateClientController } from './modules/account/autheticateClient/AuthenticateClientController';
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AutheticateDeliverymanController } from './modules/account/authenticateDeliveryman/AutheticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveyController';
import { ensureAutheticateClinet } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCase/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';

const routes = Router();

const createClientController = new CreateClientController();
const autheticateClientController = new AutheticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AutheticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvalibleController = new FindAllAvalibleController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateEndDAteController = new UpdateEndDateController()

routes.post("/clients", createClientController.handle)
routes.post("/clients/authenticate", autheticateClientController.handle)
routes.post("/deliverymans", createDeliverymanController.handle)
routes.post("/deliverymans/authenticate", authenticateDeliverymanController.handle)
routes.post("/delivery", ensureAutheticateClinet, createDeliveryController.handle)
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvalibleController.handle)
routes.put("/delivery/update/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.get("/clients/deliveries", ensureAutheticateClinet, findAllDeliveriesController.handle)
routes.get("/deliverymans/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDAteController.handle)

export { routes }