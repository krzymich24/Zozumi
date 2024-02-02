// auth.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonService } from '../person/person.service';
import { compare, compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: PersonService,
    private readonly jwtService: JwtService,
  ) {}

  async validateSimpleAuth(username: string, pass: string): Promise<any> {
    this.logger.debug(`Reveived simple auth: ${username}+${pass}`);
    const user = await this.usersService.findOneByUsername(username);
    if (compareSync(user?.password, pass)) return null;
    const { password, ...result } = user;
    this.logger.debug(`Simple auth ok, result is ${JSON.stringify(result)}`);
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }

  // async register(email: string, password: string, name: string) {
  //   try {
  //     // Check if the email is a valid email address
  //     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //     if (!isEmailValid) {
  //       throw new HttpException(
  //         'Invalid email address',
  //         HttpStatus.BAD_REQUEST,
  //       );
  //     }
  //
  //     // Check if the password is already hashed
  //     const isPasswordHashed = /^\$2[aby]\$[0-9]{2}\$.*/.test(password);
  //
  //     // If not hashed, hash the password
  //     const hashedPassword = isPasswordHashed
  //       ? password
  //       : await bcrypt.hash(password, 10);
  //
  //     // Create a new user
  //     const newUser = new this.userModel({
  //       email,
  //       password: hashedPassword,
  //       name,
  //     });
  //
  //     // Save the user to the database
  //     await newUser.save();
  //
  //     return { message: 'User registered successfully' };
  //   } catch (error) {
  //     if (error.code === 11000) {
  //       // MongoDB duplicate key error (email already exists)
  //       throw new HttpException('Email already exists', HttpStatus.CONFLICT);
  //     } else {
  //       // Other errors
  //       this.logger.error(`Registration error: ${error.message}`);
  //       throw new HttpException(
  //         'Internal server error during registration',
  //         HttpStatus.INTERNAL_SERVER_ERROR,
  //       );
  //     }
  //   }
  // }
  //
  // async login(email: string, password: string) {
  //   try {
  //     // Find the user by email
  //     const user = await this.userModel.findOne({ email });
  //
  //     // Check if the user exists
  //     if (!user) {
  //       throw new HttpException(
  //         'User with this email does not exist',
  //         HttpStatus.UNAUTHORIZED,
  //       );
  //     }
  //
  //     // Compare the provided password with the stored hashed password
  //     const isPasswordValid = await bcrypt.compare(password, user.password);
  //
  //     if (isPasswordValid) {
  //       // Password is valid, generate and return a JWT token
  //       const token = this.jwtService.sign({ userId: user._id });
  //       return { message: 'Login successful', token };
  //     } else {
  //       throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
  //     }
  //   } catch (error) {
  //     this.logger.error(`Registration error: ${error.message}`);
  //     if (error.getStatus() === HttpStatus.UNAUTHORIZED)
  //       throw new UnauthorizedException('Invalid email or password');
  //     throw new HttpException(
  //       'Internal server error during login',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }
  //
  // async getUserById(userId: string) {
  //   try {
  //     const user = await this.userModel
  //       .findById(userId)
  //       .select('-password -resetPasswordToken -resetPasswordExpires')
  //       .exec();
  //
  //     if (!user) {
  //       throw new NotFoundException('User not found');
  //     }
  //
  //     return user;
  //   } catch (error) {
  //     this.logger.error(`Error fetching user by ID: ${error.message}`);
  //     throw new NotFoundException('User not found');
  //   }
  // }
  //
  // async sendResetPasswordEmail(email: string) {
  //   const user = await this.userModel.findOne({ email });
  //
  //   if (!user) {
  //     throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //   }
  //
  //   // Generate a reset token
  //   const resetToken = crypto.randomBytes(20).toString('hex');
  //
  //   // Save the reset token and expiration time in the user document
  //   user.resetPasswordToken = resetToken;
  //   user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
  //   await user.save();
  //
  //   // Create a nodemailer transporter
  //   const transporter = nodemailer.createTransport({
  //     // Setup your email service configuration
  //     service: 'Gmail',
  //     auth: {
  //       user: this.configService.get<string>('EMAIL_USER'),
  //       pass: this.configService.get<string>('EMAIL_PASSWORD'),
  //     },
  //   });
  //
  //   // Define the email content
  //   const mailOptions = {
  //     from: 'mikolaj213@gmail.com',
  //     to: 'mikolaj213@gmail.com',
  //     subject: email,
  //     text:
  //       `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n` +
  //       `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
  //       `http://localhost:3001/reset-password?resetToken=${resetToken}\n\n` +
  //       `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  //   };
  //
  //   // Send the email
  //   await transporter.sendMail(mailOptions);
  //
  //   return { message: 'Password reset email sent successfully' };
  // }
  //
  // async resetPassword(token: string, newPassword: string) {
  //   const user = await this.userModel.findOne({
  //     resetPasswordToken: token,
  //     resetPasswordExpires: { $gt: Date.now() },
  //   });
  //
  //   if (!user) {
  //     throw new HttpException(
  //       'Invalid or expired token',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //
  //   // Update the password
  //   user.password = await bcrypt.hash(newPassword, 10);
  //
  //   // Clear the reset token and expiration
  //   user.resetPasswordToken = undefined;
  //   user.resetPasswordExpires = undefined;
  //
  //   // Save the updated user document
  //   await user.save();
  //
  //   return { message: 'Password reset successfully' };
  // }
}
