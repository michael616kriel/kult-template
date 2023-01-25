import { Controller, Get, Post, Put, Delete } from '@nova/core';

@Controller()
class UserController {
  @Get('/user')
  get() {
    return 'Hello World';
  }

  @Post('/user')
  post() {
    return 'Hello World';
  }

  @Put('/user')
  put() {
    return 'Hello World';
  }

  @Delete('/user')
  delete() {
    return 'Hello World';
  }
}

export default UserController;
