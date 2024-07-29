import * as graphql from "@nestjs/graphql";
import { UserSetResolverBase } from "./base/userSet.resolver.base";
import { UserSet } from "./base/UserSet";
import { UserSetService } from "./userSet.service";

@graphql.Resolver(() => UserSet)
export class UserSetResolver extends UserSetResolverBase {
  constructor(protected readonly service: UserSetService) {
    super(service);
  }
}
