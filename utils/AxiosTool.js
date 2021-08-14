import Axios from 'axios'

export const AxiosTool = () => {
    const headersConfig = {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    return Axios.create({
        baseURL: "https://1ob3lxp5q2.execute-api.ap-southeast-1.amazonaws.com/Staging",
        // baseURL: "https://hg0s14v5qi.execute-api.ap-southeast-1.amazonaws.com/Staging",
        headers: headersConfig
    })
}
