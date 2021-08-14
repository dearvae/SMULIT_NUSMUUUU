import { AxiosTool } from '../../utils/AxiosTool'

export default class AuthApi {

    static authLoginUserPath = "/login-patient"
    static authLoginDoctorPath = "/login-doctor"
    static authRegisterUserPath = "/create-patient"
    static authRegisterDoctorPath = "/create-doctor"

    static authLoginUser(email, password) {
        return AxiosTool().post(AuthApi.authLoginUserPath, { email, password  })
    }

    static authLoginDoctor(email, password) {
        return AxiosTool().post(AuthApi.authLoginDoctorPath, { email, password })
    }

    static authRegisterUser(name, email, password) {
        console.log(name)
        return AxiosTool().post(AuthApi.authRegisterUserPath, {
            name,
            email,
            password
        })
    }

    static authRegisterDoctor(name, email, password) {
        return AxiosTool().post(AuthApi.authRegisterDoctorPath, {
            name,
            email,
            password
        })
    }

}
