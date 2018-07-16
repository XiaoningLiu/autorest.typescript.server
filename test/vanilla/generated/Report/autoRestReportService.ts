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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { AutoRestReportServiceContext } from "./autoRestReportServiceContext";

class AutoRestReportService extends AutoRestReportServiceContext {
  /**
   * @class
   * Initializes a new instance of the AutoRestReportService class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
  }
  // methods on the client.

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceGetReportOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getReportWithHttpOperationResponse(options?: Models.AutoRestReportServiceGetReportOptionalParams): Promise<msRest.HttpOperationResponse<{ [propertyName: string]: number }>> {
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await this.sendOperationRequest(
        {
          options
        },
        getReportOperationSpec);
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceGetReportOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {{ [propertyName: string]: number }} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getReport(): Promise<{ [propertyName: string]: number }>;
  getReport(options: Models.AutoRestReportServiceGetReportOptionalParams): Promise<{ [propertyName: string]: number }>;
  getReport(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options: Models.AutoRestReportServiceGetReportOptionalParams, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceGetReportOptionalParams, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<{ [propertyName: string]: number }>;
    if (!callback) {
      return this.getReportWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as { [propertyName: string]: number });
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getReportWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as { [propertyName: string]: number };
        return cb(err, result, data.request, data);
      });
    }
  }
}

// Operation Specifications
const getReportOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "report",
  queryParameters: [
    {
      parameterPath: [
        "options",
        "qualifier"
      ],
      mapper: {
        serializedName: "qualifier",
        type: {
          name: "String"
        }
      }
    }
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "numberElementType",
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

export { AutoRestReportService, Models as AutoRestReportServiceModels, Mappers as AutoRestReportServiceMappers };
