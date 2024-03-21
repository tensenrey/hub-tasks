export class ApplicationModel {
  applicationName = null; /** @string */
  createDate = null; /** @Date */
  applicationId = null; /** @uuidv7 */

  toObject() {
    return {
      applicationName: this.applicationName,
      createDate: this.createDate,
      applicationId: this.applicationId,
    };
  }
}

export class ApplicationPostResponseModel {
  applicationId = null; /** @uuidv7 */

  toObject() {
    return {
      applicationId: this.applicationId,
    };
  }
}

export class ApplicationsResponseModel {
  applications = []; /** @ApplicationModel [] */

  toObject() {
    return {
      applications: this.applications,
    };
  }
}

export class ApplicationResponseModel {
  application = null; /** @ApplicationModel */

  toObject() {
    return {
      application: this.application,
    };
  }
}

export class ApplicationPutModel {
  applicationName = null; /** @string */

  toObject() {
    return {
      applicationName: this.applicationName,
    };
  }
}

export class ApplicationDeleteResponseModel {
  success = null; /** @boolean */

  toObject() {
    return {
      success: this.success,
    };
  }
}
