import { ApplicationService } from "../services/application.service.js";

export class ApplicationController {
  constructor(app) {
    this.applicationService = new ApplicationService();
    /** save context */
    const _this = this;

    app.post("/create", this.postCreateApplication.bind(_this));

    app.get("/apps", this.getApplicationList.bind(_this));

    app.get("/app/:id", this.getApplicationById.bind(_this));

    app.put("/app/:id", this.putApplicationById.bind(_this));

    app.delete("/app/:id", this.deleteApplicationById.bind(_this));
  }

  async postCreateApplication(req, res) {
    try {
      res.status(201).json(await this.applicationService.postCreateApplication(req.body));
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  async getApplicationList(_, res) {
    try {
      res.status(200).json(await this.applicationService.getApplicationList());
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  async getApplicationById(req, res) {
    try {
      res.status(200).json(await this.applicationService.getApplicationById(req.params.id));
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  async putApplicationById(req, res) {
    try {
      res.status(200).json(await this.applicationService.putApplicationById(req.body,req.params.id));
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  async deleteApplicationById(req, res) {
    try {
      res.status(200).json(await this.applicationService.deleteApplicationById(req.params.id));
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
