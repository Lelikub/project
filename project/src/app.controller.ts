import { Controller, Get, Render, Sse, UseInterceptors} from '@nestjs/common';
import { ChimsService } from './chim/chim.service';
import { Observable, interval, map } from 'rxjs';
import { ChimInterceptor } from './chim/chim.interceptor';
import { response } from 'express';
const axios = require('axios').default;

interface MessageEvent{
  data: string[] | object;
}

@Controller()
@UseInterceptors(new ChimInterceptor())
export class AppController {
  constructor(private readonly ChimsService: ChimsService){}
  //@Get()
  //getHello(): string {
  //  return this.appService.getHello();
  //}
  @Get()
  @Render('index')
  takeinfo(){
    const info = this.ChimsService.doSomeQuery();
    let ctr = info.then(function(output){
      let b: number = output.length;
      let i: number = 0;
      let ret = new Array<String>(b);
      output.forEach(a => {
        if(i<b){
          ret[i]=(a['name']);
          i++;
        }
      });
      console.log(ret);
      return {message: ret}
    });
    /*axios.get('http://localhost:3000').then(response=> {
      console.log(response)
    })*/
  }
  
  @Get('chemicals')
  @Render('chemicals')
  getHello(): string {
    /*const express = require('express');
    const take = express();
    take.use(express.static('public'))*/
    return
  }

  /*@Sse('event')
  sendEvent(): Observable<MessageEvent>{
    return interval(1000).pipe(
      map((num:number)=>({
      data: 'hello' + num,
    }))
  );
    const info = this.ChimsService.doSomeQuery();
    let ret: string[]
    let ctr = info.then(function(output){
      output.forEach(a => {
        let b: number = a.length - 1;
        let i: number =0;
        if(i<b){
          ret[i]=(a['name']);
          i++;
        }
      });
    })
    
  }*/
}