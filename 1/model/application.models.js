export class ApplicationModel {
  applicationName = null; /** @string */
  createDate = null; /** @Date */
  applicationId = null; /** @uuidv7 */
}

export class ApplicationPostResponseModel {
  applicationId = null; /** @uuidv7 */
}

export class ApplicationsResponseModel {
  applications = []; /** @ApplicationModel [] */
}

export class ApplicationResponseModel {
  application = null; /** @ApplicationModel */
}

export class ApplicationPutModel {
  applicationName = null; /** @string */
}

export class ApplicationDeleteResponseModel {
  success = null; /** @boolean */
}
