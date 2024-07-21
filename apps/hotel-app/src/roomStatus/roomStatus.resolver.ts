import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RoomStatusResolverBase } from "./base/roomStatus.resolver.base";
import { RoomStatus } from "./base/RoomStatus";
import { RoomStatusService } from "./roomStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RoomStatus)
export class RoomStatusResolver extends RoomStatusResolverBase {
  constructor(
    protected readonly service: RoomStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
