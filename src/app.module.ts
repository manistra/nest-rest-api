import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AzureADStrategy } from './azure-ad.guard';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, UsersController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule { }
