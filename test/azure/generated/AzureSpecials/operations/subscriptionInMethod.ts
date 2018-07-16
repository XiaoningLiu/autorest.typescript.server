/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/subscriptionInMethodMappers";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a SubscriptionInMethod. */
export class SubscriptionInMethod {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a SubscriptionInMethod.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId This should appear as a method parameter, use value
   * '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async postMethodLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          subscriptionId,
          options
        },
        postMethodLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id = null,
   * client-side validation should prevent you from making this call
   *
   * @param {string} subscriptionId This should appear as a method parameter, use value null,
   * client-side validation should prvenet the call
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async postMethodLocalNullWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          subscriptionId,
          options
        },
        postMethodLocalNullOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId Should appear as a method parameter -use value
   * '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async postPathLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          subscriptionId,
          options
        },
        postPathLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId The subscriptionId, which appears in the path, the value is
   * always '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async postSwaggerLocalValidWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.client.sendOperationRequest(
        {
          subscriptionId,
          options
        },
        postSwaggerLocalValidOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId This should appear as a method parameter, use value
   * '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  postMethodLocalValid(subscriptionId: string): Promise<void>;
  postMethodLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postMethodLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodLocalValidWithHttpOperationResponse(subscriptionId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id = null,
   * client-side validation should prevent you from making this call
   *
   * @param {string} subscriptionId This should appear as a method parameter, use value null,
   * client-side validation should prvenet the call
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  postMethodLocalNull(subscriptionId: string): Promise<void>;
  postMethodLocalNull(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postMethodLocalNull(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalNull(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodLocalNull(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodLocalNullWithHttpOperationResponse(subscriptionId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodLocalNullWithHttpOperationResponse(subscriptionId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId Should appear as a method parameter -use value
   * '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  postPathLocalValid(subscriptionId: string): Promise<void>;
  postPathLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postPathLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postPathLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postPathLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postPathLocalValidWithHttpOperationResponse(subscriptionId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postPathLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in the method.  pass in subscription id =
   * '1234-5678-9012-3456' to succeed
   *
   * @param {string} subscriptionId The subscriptionId, which appears in the path, the value is
   * always '1234-5678-9012-3456'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  postSwaggerLocalValid(subscriptionId: string): Promise<void>;
  postSwaggerLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<void>;
  postSwaggerLocalValid(subscriptionId: string, callback: msRest.ServiceCallback<void>): void;
  postSwaggerLocalValid(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postSwaggerLocalValid(subscriptionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postSwaggerLocalValidWithHttpOperationResponse(subscriptionId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postSwaggerLocalValidWithHttpOperationResponse(subscriptionId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}

// Operation Specifications
const postMethodLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/local/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const postMethodLocalNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/method/string/none/path/local/null/{subscriptionId}",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const postPathLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/path/string/none/path/local/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const postSwaggerLocalValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "azurespecials/subscriptionId/swagger/string/none/path/local/1234-5678-9012-3456/{subscriptionId}",
  urlParameters: [
    {
      parameterPath: "subscriptionId",
      mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  ],
  headerParameters: [
    {
      parameterPath: "acceptLanguage",
      mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
