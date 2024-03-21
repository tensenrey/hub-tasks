/**
 * Тут работаем с db/applications.json
 * удаляем данные
 * заполняем данными
 * изменяем данные
 */

import fs from "fs/promises";

const errCallback = (err) => new Error(err);
const path = "/db/applications.json";

export class DbService {
  async add(payload) {
    const data = await this.read();
    data.push(payload);
    await this.write(data);
  }

  async getAll() {
    return await this.read();
  }

  async getById(id) {
    const data = await this.read();
    return data.find(({ applicationId }) => applicationId === id) || null;
  }

  async update(payload, id) {
    const all = await this.getAll();
    const obj = all.find(({ applicationId }) => applicationId === id) || null;

    if (obj !== null) {
      all.filter(({ applicationId }) => applicationId !== id);

      obj.applicationName = payload.applicationName;

      await this.write(all);
    }

    return obj;
  }

  async delete(id) {
    const all = await this.getAll();
    const obj = all.find(({ applicationId }) => applicationId === id) || null;

    if (obj !== null) {
      const _all = all.filter(({ applicationId }) => applicationId !== id);
      await this.write(_all);
    }

    return !!obj;
  }

  async read() {
    return JSON.parse(
      await fs.readFile(process.cwd() + path, "utf-8", errCallback)
    );
  }

  async write(payload) {
    await fs.writeFile(
      process.cwd() + path,
      JSON.stringify(payload),
      errCallback
    );
  }
}
