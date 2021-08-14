import axios from "axios";
import { AxiosTool } from "../../utils/AxiosTool";

export default class AuthApi {
  static authLoginUserPath = "/login-patient";
  static authLoginLawyerPath = "/login-lawyer";
  static authRegisterUserPath = "/create-patient";
  static authRegisterLawyerPath = "/register-lawyer";
  static authGetAllLawyerPath = "/get-all-lawyers";

  static authLoginLawyerPath = "/login-lawyer";
  static authRegisterLawyerPath = "/register-lawyer";

  static authLoginLawyer(email, password) {
    return AxiosTool().post(AuthApi.authLoginLawyerPath, { email, password });
  }

  // static authRegisterLawyer(name, email, password) {
  //     console.log(name)
  //     return AxiosTool().post(AuthApi.authRegisterUserPath, {
  //         name,
  //         email,
  //         password
  //     })
  // }
    static authRegisterLawyer(first_name,middle_name,last_name,birthday,
                                phone_number, gender, email, password,
                                law_firm,address,postal_code,location,year_of_practice,cert_url) {
        console.log(name)
        return AxiosTool().post(AuthApi.authRegisterUserPath, {
            first_name,
            middle_name,
            last_name,
            birthday,
            phone_number,
            gender,
            email,
            password,
            law_firm,
            address,
            postal_code,
            location,
            year_of_practice,
            cert_url
        })
    }
}
