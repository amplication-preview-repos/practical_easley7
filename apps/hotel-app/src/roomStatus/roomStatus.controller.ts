import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomStatusService } from "./roomStatus.service";
import { RoomStatusControllerBase } from "./base/roomStatus.controller.base";

@swagger.ApiTags("roomStatuses")
@common.Controller("roomStatuses")
export class RoomStatusController extends RoomStatusControllerBase {
  constructor(
    protected readonly service: RoomStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
