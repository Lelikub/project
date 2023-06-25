import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ServeStaticModule } from '@nestjs/serve-static';
//import { join } from 'path';
import { ChimController } from './chim/chim.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chims } from './chim/entities/chims.entity';
import { DataSource } from 'typeorm';
import { ChimsService } from './chim/chim.service';
import { ChimgatewayModule } from './chim/chimgateway/chimgateway.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [Chims]
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Chims]),
    ChimgatewayModule,
  ],
  controllers: [AppController, ChimController],
  providers: [AppService, ChimsService],
})
export class AppModule {
constructor(private dataSource: DataSource){}
}
