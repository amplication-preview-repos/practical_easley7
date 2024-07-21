import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoomTypeService } from "./roomType.service";
import { RoomTypeControllerBase } from "./base/roomType.controller.base";

@swagger.ApiTags("roomTypes")
@common.Controller("roomTypes")
export class RoomTypeController extends RoomTypeControllerBase {
  constructor(
    protected readonly service: RoomTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
