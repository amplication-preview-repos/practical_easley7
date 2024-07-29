import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LevelService } from "./level.service";
import { LevelControllerBase } from "./base/level.controller.base";

@swagger.ApiTags("levels")
@common.Controller("levels")
export class LevelController extends LevelControllerBase {
  constructor(protected readonly service: LevelService) {
    super(service);
  }
}
