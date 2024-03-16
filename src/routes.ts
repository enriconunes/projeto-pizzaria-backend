import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";

import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";

import { CreateProductController } from "./controllers/Product/CreateProductController";
import { ListProductsByCategoryController } from "./controllers/Product/ListProductsByCategoryController";

import { OpenOrderController } from "./controllers/Order/OpenOrderController";
import { DeleteOrderController } from "./controllers/Order/DeleteOrderController";
import { AddOrderItemController } from "./controllers/Order/AddOrderItemController";
import { DeleteItemController } from "./controllers/Order/DeleteItemController";
import { SendOrderController } from "./controllers/Order/SendOrderController";
import { ListSentOrdersController } from "./controllers/Order/ListSentOrdersController";
import { ShowOrderDetailsController } from "./controllers/Order/ShowOrderDetailsController";
import { FinalizeOrderController } from "./controllers/Order/FinalizeOrderController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//ROTAS USER
//em vez de criar a logica da rota aqui,
//a logica é feita no controller e
//o controller retorna o valor obtido pela rota
//.handle é um metodo da classe de criar user
router.post("/users", new CreateUserController().handle)//sign

router.post("/session", new AuthUserController().handle)//login

router.get("/userDetail", isAuthenticated, new DetailUserController().handle)

// ROTAS CATEGORY
router.post("/createCategory", isAuthenticated, new CreateCategoryController().handle)

router.get("/listCategories", isAuthenticated, new ListCategoryController().handle)

//ROTAS PRODUCT
router.post("/createProduct", isAuthenticated, upload.single("file"), new CreateProductController().handle)

router.get("/listProducts", isAuthenticated, new ListProductsByCategoryController().handle)

//ROTAS ORDER
router.post("/order/open", isAuthenticated, new OpenOrderController().handle)

router.delete("/order/delete", isAuthenticated, new DeleteOrderController().handle)

router.post("/order/addItem", isAuthenticated, new AddOrderItemController().handle)

router.delete("/order/deleteItem", isAuthenticated, new DeleteItemController().handle)

router.put("/order/send", isAuthenticated, new SendOrderController().handle)

router.get("/order/list", isAuthenticated, new ListSentOrdersController().handle)

router.get("/order/detail", isAuthenticated, new ShowOrderDetailsController().handle)

router.put("/order/finalize", isAuthenticated, new FinalizeOrderController().handle)

export { router }