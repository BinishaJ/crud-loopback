import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import "dotenv/config";

const config = {
  name: 'userDatabase',
  connector: 'mongodb',
  url: process.env.MONGO_URI,
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UserDatabaseDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'userDatabase';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.userDatabase', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
