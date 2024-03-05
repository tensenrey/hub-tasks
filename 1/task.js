/**
 * @Intoduction
 * 
 * Нужно реализовать свой http сервер на nodeJS
 * 
 * @Requirements
 * Разрешенные npm пакеты [nodemon, express, uuidv7]
 * 
 * У сервера должна быть одна точка instanc'a
 * Все нужно писать на классах соблюдая методологию
 * (model <-> service <-> controller)
 * 
 * Тестировать запросы можно в [POSTMAN / Insomnia / etc]
 *  
 * @Links
 * [
 *  https://youtu.be/SccSCuHhOw0?si=ICTD_lEnBztVTF5P [EXPRESS / eng]
 * ]
 * 
 * @Task
 * 
 * Нужно написать сервер приложений, все данные должны хранится в json файле
 * applications.json
 * 
 * [POST :: /create] Мы можем создать приложение в системе со следующией стуктурой
 * ===============================
 * Получаем с клиента
 * (JSON:ApplicationModel 
 *  {
 *    applicationName: "string",
 *  }
 * )
 * ----------------------------
 * Отдаем клиенту 
 * (JSON:ApplicationPostResponseModel 
 *  {
 *    applicationId: uuidv7
 *  }
 * )
 * ==============================
 * 
 * [GET :: /apps] Можем получить список всех приложений в системе 
 *
 * Отдаем клиенту 
 * ----------------------------
 * (JSON:ApplicationsResponseModel[]
 *  {
 *    applications: ApplicationModel[] // <- массив состоящий из приложений
 *  }
 * )
 * =============================
 * 
 * [GET :: /app/:id] Можем получить одно приложение из списка
 * 
 * Отдаем клиенту 
 * ----------------------------
 * (JSON:ApplicationsResponseModel
 *  {
 *    application: ApplicationModel // <- одно приложение
 *  }
 * )
 * =============================
 * [PUT :: /app/:id] Можем  изменить одно приложение из списка
 *
 * Получаем с клиента
 * (JSON:ApplicationPutModel 
 *  {
 *    applicationName: "string", // <-  можем изменить только имя приложения
 *  }
 * ) 
 *
 * Отдаем клиенту 
 * ----------------------------
 * (JSON:ApplicationsResponseModel 
 *  {
 *    application: ApplicationModel // <- одно приложение
 *  }
 * )
 * =============================
 * 
 * [DELETE :: /app/:id] Можем удалить одно приложение из списка
 * 
 * Отдаем клиенту 
 * ----------------------------
 * (JSON:ApplicationDeleteResponseModel 
 *  {
 *    success: boolean
 *  }
 * )
 * =============================
 */
