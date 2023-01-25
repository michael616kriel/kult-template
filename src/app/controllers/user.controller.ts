import {
  KultController,
  Get,
  Application,
  ControllerBase,
  Context,
} from '@kult/core';
import User from '../models/user.model';

@KultController()
class UserController extends ControllerBase {
  constructor(app: Application) {
    super(app);
  }
  @Get('/user')
  async get(ctx: Context) {
    const { datasource } = this.app.database;
    const users = await datasource?.getRepository(User).find();
    return users;
  }
}

export default UserController;
