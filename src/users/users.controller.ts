import { Controller, Get, UseGuards } from '@nestjs/common';
import { AzureADGuard } from './../azure-ad.guard';

@Controller('users')
export class UsersController {
    @Get()
    @UseGuards(AzureADGuard)
    findAll() {
        return { data: 'test' }
    }
}
