import Axios from 'axios'

export const AxiosTool = () => {
    const headersConfig = {
        'Content-Type': 'application/json',
    }

    return Axios.create({
        baseURL: "https://1ob3lxp5q2.execute-api.ap-southeast-1.amazonaws.com/Staging",
        headers: headersConfig
    })
}
