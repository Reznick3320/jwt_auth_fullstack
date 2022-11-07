import $api from "../http";
import { AxiosResponse } from "axios"
import { AuthResponce } from "../models/response/AuthResponce";


export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
		return $api.post('/login', { email, password })
	}

	static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
		return $api.post('/registration', { email, password })
	}

	static async logout(): Promise<void> {
		return $api.post('/logout');
	}
}