import config from './config';
// import { profileStore } from '../store/';
import axios from 'axios';
const baseUrl = config.ip;

/**
 * ajax请求封装
 * @param url
 * @param options
 * @returns {Promise<any>}
 */
const requests = (url, options) => {
    const defaultHeaders = {
        "Content-Type": "application/json"
    };
    let  accessToken = localStorage.getItem('Token');
    if (accessToken) {
        defaultHeaders.TOKEN = accessToken;
    }
    const {
        method = "GET",
        headers = defaultHeaders,
        data = {} } = options;
    const upperMethod = method.toUpperCase();
    let body = data;
    // if (upperMethod === "GET" || upperMethod === "DELETE") {
    //     body = undefined;
    // }

    return new Promise((resolve, reject) => {
        axios( {
            url:`${baseUrl}${url}`,
            timeout: 6000,
            method:method,
            headers:headers,
            data:body,
        }).then(res=> resolve(res.data))
            .catch(err => {
                // Alert.open({
                //     alertTip:"请求超时",
                //     closeAlert:function(){
                //         console.log(err);
                //     }
                // });
                // reject(err);
            })
    })
}

/**
 * get请求
 * @param url
 * @returns {Promise<any>}
 */
const get = (url) => {
    return requests(url, {
        method: "get"
    });
}

/**
 * delete请求
 * @param url
 * @returns {Promise<any>}
 */
const del = (url, data) => {
    return requests(url, {
        method: "DELETE",
        data

    });
}

/**
 * post请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
const post = (url, data) => {
    return requests(url, {
        method: "post",
        data
    })
}

/**
 * put请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
const put = (url, data) => {
    return requests(url, {
        method: "PUT",
        data
    })
}

export { requests, get, post, del, put }
