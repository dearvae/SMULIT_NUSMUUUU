import { AxiosTool } from '../../utils/AxiosTool'

export default class AuthApi {

    static authLoginLawyerPath = "/login-lawyer"
    static authRegisterLawyerPath = "/register-lawyer"

    static authLoginLawyer(email, password) {
        return AxiosTool().post(AuthApi.authLoginLawyerPath, { email, password })
    }

    // static authRegisterLawyer(name, email, password) {
    //     console.log(name)
    //     return AxiosTool().post(AuthApi.authRegisterUserPath, {
    //         name,
    //         email,
    //         password
    //     })
    // }


}
