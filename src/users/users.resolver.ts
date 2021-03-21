import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser();
  }

  @Query(() => [User], { name: 'users', nullable: 'items'})
  getUsers(): Users[] {
    return this.usersService.getUsers();
  }
}
