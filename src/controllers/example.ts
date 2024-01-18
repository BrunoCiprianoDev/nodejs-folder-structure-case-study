import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get('')
  public getMethodExample(request: Request, response: Response): void {
    response.send({});
  }
}
