import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSetService } from "./userSet.service";
import { UserSetControllerBase } from "./base/userSet.controller.base";

@swagger.ApiTags("userSets")
@common.Controller("userSets")
export class UserSetController extends UserSetControllerBase {
  constructor(protected readonly service: UserSetService) {
    super(service);
  }
}
