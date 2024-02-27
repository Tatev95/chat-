class LoginProvider {
  setToken(username: string) {
    const tokenText = `${Math.random().toString(36).substring(7)}-${username}`;
    sessionStorage.setItem("token", tokenText);
  }

  getUsername() {
    const token = sessionStorage.getItem("token");
    const userName = token?.split("-")[1];
    return userName;
  }

  removeToken() {
    sessionStorage.removeItem("token");
  }
}

export const loginProvider = new LoginProvider();
