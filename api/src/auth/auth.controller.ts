// auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Req,
  HttpCode,
  Request,
} from '@nestjs/common'; // Add Get and Req imports
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  RegisterDto,
  LoginDto,
  ResetPasswordDto,
  RequestPasswordResetDto,
} from './dto/auth.dto';
import { JwtAuthGuard } from './auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error during registration',
  })
  @Post('register')
  async register(@Body() body: RegisterDto) {
    // return this.authService.register(body.email, body.password, body.name);
  }

  @ApiOperation({ summary: 'Login to the application' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid email or password' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error during login',
  })
  @Post('login')
  @HttpCode(200)
  async login(@Body() body: LoginDto) {
    // return this.authService.login(body.email, body.password);
  }

  @ApiBearerAuth() // Swagger decorator for bearer authentication
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, description: 'Return user profile' })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    // fixme przesyłanie poprawnych danych
    // return await this.authService.getUserById(req.user.userId); // The user object is set by Passport during authentication
  }

  @ApiOperation({ summary: 'Request password reset email' })
  @ApiBody({ type: RequestPasswordResetDto })
  @ApiResponse({
    status: 200,
    description: 'Password reset email sent successfully',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error during password reset',
  })
  @Post('request-reset-password')
  async requestPasswordReset(@Body() body: RequestPasswordResetDto) {
    // return this.authService.sendResetPasswordEmail(body.email);
  }

  @ApiOperation({ summary: 'Reset password' })
  @ApiBody({ type: ResetPasswordDto })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  @ApiResponse({
    status: 500,
    description: 'Internal server error during password reset',
  })
  @Post('reset-password')
  async resetPassword(@Body() body: ResetPasswordDto) {
    // return this.authService.resetPassword(body.token, body.newPassword);
  }
}
