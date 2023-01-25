import { Env } from '@nova/core';

export default {
  port: Env.get('PORT', 3000),
};
