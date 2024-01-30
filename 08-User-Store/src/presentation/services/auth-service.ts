//This service is in charge to make the process to create and save a user into our DB.

import { bcryptAdapter, envs, jwtGenerator } from '../../config';
import { UserModel } from '../../data';
import {
  CustomError,
  LoginUserDto,
  RegisterUserDto,
  UserEntity,
} from '../../domain';
import { EmailService } from './email-service';

export class AuthService {
  constructor(
    // DI - Email service
    private readonly emailService: EmailService
  ) {}

  // Register user //

  public async registerUser(registerUserDto: RegisterUserDto) {
    // Here is where we'll make all process to create and save a user into DB.

    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest('Email already exist 😒');

    // So that we are to return here is that we want to use in the controller. In this case we are to return the user.
    try {
      const user = new UserModel(registerUserDto);

      // to encript password

      user.password = bcryptAdapter.hash(registerUserDto.password); // with this line we are to encrypt the password using the bcryptAdapter.
      await user.save(); // With this line we are saved the user in the DB.

      // confirmation Email

      await this.sendEmailValidationLink(user.email);

      // To save the user into the DB without the password and adding the token.

      const { password, ...userEntity } = UserEntity.fromObject(user);

      // to generate a JWT to authenticate the user.

      const token = await jwtGenerator.generateTk({
        id: user.id,
      });
      if (!token)
        throw CustomError.internalServer('Errror in generation of token');

      return {
        user: userEntity,
        token: token,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  // Login user //

  public async loginUser(loginUserDto: LoginUserDto) {
    const user = await UserModel.findOne({ email: loginUserDto.email });

    if (!user) {
      throw CustomError.badRequest('Invalid credentials');
    }

    const checkPass = bcryptAdapter.compareHash(
      loginUserDto.password,
      user.password
    );

    if (!checkPass) {
      throw CustomError.badRequest('Invalid credentials');
    }

    const { password, ...userEntity } = UserEntity.fromObject(user);

    const token = await jwtGenerator.generateTk({
      id: user.id,
      email: user.email,
    });
    if (!token)
      throw CustomError.internalServer('Errror in generation of token');

    return {
      user: userEntity,
      token: token,
    };
  }

  // Send Email Validation //

  private sendEmailValidationLink = async (email: string) => {
    const token = await jwtGenerator.generateTk({ email });

    if (!token) throw CustomError.internalServer('Error getting token');

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
    const html = `
    <h1>Email verification</h1>

    <h3> Your account is already to confirm</h3>
    <h3>please click on the next link </h3>

    <a href="${link}">Validate your account</a>

    <p>If you don't know about this email plase ignore it.</p>
    `;

    const options = {
      to: email,
      subject: 'Validate account',
      htmlBody: html,
    };

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer(' Error sending email');

    return true;
  };

  // Validate email //

  public validateEmailToken = async (token: string) => {
    const payload = await jwtGenerator.validateTk(token);
    if (!payload) throw CustomError.unauthorized('Token not valid');

    const { email } = payload as { email: string };
    if (!email) throw CustomError.internalServer('Internal server error');

    const user = await UserModel.findOne({ email });
    if (!user) throw CustomError.internalServer('Email not exist');

    user.validateEmail = true;
    await user.save();

    return true;
  };
}
