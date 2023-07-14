import { Provider } from "./types";

class AuthenticationHandlers {
  private memberstack: any = {};
  constructor(mem: any) {
    this.memberstack = mem;
  }
  handleSignup = async (email: string, password: string) => {
    // check email and password are valid
    // length check
    // regex check
    // passwords match
    // etc

    const { data } = await this.memberstack.signupMemberEmailPassword({
      email,
      password,
    });
    return data;
  };

  handleOauthSignup = async (provider: Provider) => {
    const { data } = await this.memberstack.signupWithProvider({
      provider,
    });
    return data;
  };

  handleSignin = async (email: string, password: string) => {
    // check email and password are valid
    // length check
    // regex check
    // passwords match
    // etc

    const { data } = await this.memberstack.loginMemberEmailPassword({
      email,
      password,
    });
    return data;
  };

  handleOauthsignIn = async (provider: Provider) => {
    const { data } = await this.memberstack.loginWithProvider({
      provider,
    });
    return data;
  };
}
