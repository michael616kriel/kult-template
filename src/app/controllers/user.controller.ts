import {
  KultController,
  Get,
  Application,
  ControllerBase,
  Context,
} from '@kult/core';
import User from '../models/user.model';

@KultController('users')
class UserController extends ControllerBase {
  constructor(app: Application) {
    super(app);
  }
  @Get('/find')
  async find(ctx: Context) {
    const { datasource } = this.app.database;
    const users = await datasource?.getRepository(User).find();
    return users;
  }
}

export default UserController;
