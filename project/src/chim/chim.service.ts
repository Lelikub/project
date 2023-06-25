import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { ConnectionEvents, DataSource, Repository } from 'typeorm';

@Injectable()
export class ChimsService {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  async doSomeQuery(){
    return this.dataSource.query('SELECT * FROM CHIMS;')
  }
}
