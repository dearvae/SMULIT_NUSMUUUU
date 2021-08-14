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

  static authLoginUser(email, password) {
    return AxiosTool().post(AuthApi.authLoginUserPath, { email, password });
  }

  static authLoginLawyer(email, password) {
    return AxiosTool().post(AuthApi.authLoginLoginPath, { email, password });
  }

  static authRegisterUser(name, email, password) {
    console.log(name);
    return AxiosTool().post(AuthApi.authRegisterUserPath, {
      name,
      email,
      password,
    });
  }

  static authRegisterDoctor(name, email, password) {
    return AxiosTool().post(AuthApi.authRegisterDoctorPath, {
      name,
      email,
      password,
    });
  }
  static authGetAllLawyer = () => {
    return AxiosTool().get(AuthApi.authGetAllLawyerPath);
  };
}
