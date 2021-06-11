/* tslint:disable */
/* eslint-disable */
/**
 * Fancy Books API
 * The coolest books API out there
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Book
 */
export interface Book {
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    link: string;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    pages: number;
}

/**
 * BooksApi - axios parameter creator
 * @export
 */
export const BooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBookByTitle: async (title: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'title' is not null or undefined
            assertParamExists('deleteBookByTitle', 'title', title)
            const localVarPath = `/books/{title}`
                .replace(`{${"title"}}`, encodeURIComponent(String(title)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBookByTitle: async (title: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'title' is not null or undefined
            assertParamExists('getBookByTitle', 'title', title)
            const localVarPath = `/books/{title}`
                .replace(`{${"title"}}`, encodeURIComponent(String(title)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooks: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/books`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BooksApi - functional programming interface
 * @export
 */
export const BooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BooksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBookByTitle(title: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBookByTitle(title, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBookByTitle(title: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Book>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBookByTitle(title, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBooks(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Book>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBooks(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BooksApi - factory interface
 * @export
 */
export const BooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BooksApiFp(configuration)
    return {
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBookByTitle(title: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteBookByTitle(title, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} title 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBookByTitle(title: string, options?: any): AxiosPromise<Book> {
            return localVarFp.getBookByTitle(title, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBooks(options?: any): AxiosPromise<Array<Book>> {
            return localVarFp.getBooks(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BooksApi - interface
 * @export
 * @interface BooksApi
 */
export interface BooksApiInterface {
    /**
     * 
     * @param {string} title 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApiInterface
     */
    deleteBookByTitle(title: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {string} title 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApiInterface
     */
    getBookByTitle(title: string, options?: any): AxiosPromise<Book>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApiInterface
     */
    getBooks(options?: any): AxiosPromise<Array<Book>>;

}

/**
 * BooksApi - object-oriented interface
 * @export
 * @class BooksApi
 * @extends {BaseAPI}
 */
export class BooksApi extends BaseAPI implements BooksApiInterface {
    /**
     * 
     * @param {string} title 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApi
     */
    public deleteBookByTitle(title: string, options?: any) {
        return BooksApiFp(this.configuration).deleteBookByTitle(title, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} title 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApi
     */
    public getBookByTitle(title: string, options?: any) {
        return BooksApiFp(this.configuration).getBookByTitle(title, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BooksApi
     */
    public getBooks(options?: any) {
        return BooksApiFp(this.configuration).getBooks(options).then((request) => request(this.axios, this.basePath));
    }
}

