import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseModule } from '../common/supabase';

@Module({
  imports: [SupabaseModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
