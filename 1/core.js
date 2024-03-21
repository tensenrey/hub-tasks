/**
 * ядро приложения
 */
import colors from "colors";
import express from "express";
import { ApplicationController } from "./controllers/application.controller.js";
import { RequestLogger } from "./middlewares/request.mw.js";
import { StackLogger } from "./middlewares/stack.mw.js";

colors.enable();

class Core {
  app = express();
  router = express.Router();

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));    
    this.app.use(RequestLogger);

    this.app.use("/api", this.router);

    new ApplicationController(this.router);

    StackLogger(this.router);
  }

  static listen(port, host) {
    const _h = host || "localhost";
    const cr = new Core();

    try {
      cr.app.listen(port, _h, () => {
        console.log(`\nServer started `.magenta +`http://${_h}:${port}/api/`.blue.underline.bold);
      });
    } catch (e) {
      console.error(new Error("Runtime Error:: " + e));
    }
  }
}

Core.listen(3000);
