import { Client } from "../apiClient";

const client = new Client();

export default class AuthService {
  signIn(data: any) {
    return client.api({
      method: "post",
      url: "/api/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
  }

  getclientrequest() {
    return client.api({
      method: "get",
      url: "api/clientrequest",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + this.getToken(),
      },
    });
  }
}
