import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserDatabaseDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {
  constructor(
    @inject('datasources.userDatabase') dataSource: UserDatabaseDataSource,
  ) {
    super(User, dataSource);
  }
}
