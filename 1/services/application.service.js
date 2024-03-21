import { uuidv7 } from "uuidv7";
import {
  ApplicationModel,
  ApplicationPostResponseModel,
  ApplicationsResponseModel,
  ApplicationResponseModel,
  ApplicationDeleteResponseModel,
  ApplicationPutModel,
} from "../model/application.models.js";
import { DbService } from "./db.service.js";

export class ApplicationService {
  constructor() {
    this.dbService = new DbService();
  }

  async postCreateApplication(payload) {
    const appPostResponseModel = new ApplicationPostResponseModel();
    const appModel = new ApplicationModel();

    appModel.applicationName = payload.applicationName || "имя не задано";
    appModel.createDate = Date.now();
    appModel.applicationId = uuidv7();

    await this.dbService.add(appModel.toObject());

    appPostResponseModel.applicationId = appModel.applicationId;

    return appPostResponseModel.toObject();
  }

  async getApplicationList() {
    const appsResponseModel = new ApplicationsResponseModel();

    appsResponseModel.applications = await this.dbService.getAll();

    return appsResponseModel.toObject();
  }

  async getApplicationById(id) {
    const appResponseModel = new ApplicationResponseModel();
    appResponseModel.application = await this.dbService.getById(id);
    return appResponseModel.toObject();
  }

  async putApplicationById(payload, id) {
    const appPutResponseModel = new ApplicationPutModel();
    const appResponseModel = new ApplicationResponseModel();

    appPutResponseModel.applicationName =
      payload.applicationName || "имя не задано";

    appResponseModel.application = await this.dbService.update(
      appPutResponseModel,
      id
    );

    return appResponseModel.toObject();
  }

  async deleteApplicationById(id) {
    const appDeleteResponseModel = new ApplicationDeleteResponseModel();
    appDeleteResponseModel.success = await this.dbService.delete(id);
    return appDeleteResponseModel.toObject();
  }
}
