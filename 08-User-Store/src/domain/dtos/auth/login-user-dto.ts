import { regularExps } from '../../../config';

export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static userToLogin(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ['Missing email'];
    if (!regularExps.email.test(email)) return ['Email is invalid'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password should have min 6 characters'];

    return [undefined, new LoginUserDto(email, password)];
  }
}
