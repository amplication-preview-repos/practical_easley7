import * as graphql from "@nestjs/graphql";
import { LevelResolverBase } from "./base/level.resolver.base";
import { Level } from "./base/Level";
import { LevelService } from "./level.service";

@graphql.Resolver(() => Level)
export class LevelResolver extends LevelResolverBase {
  constructor(protected readonly service: LevelService) {
    super(service);
  }
}
