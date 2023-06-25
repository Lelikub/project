import { Controller, Get, Post, Render } from '@nestjs/common';
import { ChimsService } from './chim.service';

@Controller('chim')
export class ChimController {
    constructor(private readonly ChimsService: ChimsService){}

    @Get('index')
    async doSomeQuery(){
        return this.ChimsService.doSomeQuery();
    }
}
