import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AmenityService } from "./amenity.service";
import { AmenityControllerBase } from "./base/amenity.controller.base";

@swagger.ApiTags("amenities")
@common.Controller("amenities")
export class AmenityController extends AmenityControllerBase {
  constructor(
    protected readonly service: AmenityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
