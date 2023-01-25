import { KultController, Get, Post, Put, Delete } from '@kult/core';

@KultController()
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
