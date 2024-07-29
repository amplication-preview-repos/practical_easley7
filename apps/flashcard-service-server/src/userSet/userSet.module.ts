import { Module } from "@nestjs/common";
import { UserSetModuleBase } from "./base/userSet.module.base";
import { UserSetService } from "./userSet.service";
import { UserSetController } from "./userSet.controller";
import { UserSetResolver } from "./userSet.resolver";

@Module({
  imports: [UserSetModuleBase],
  controllers: [UserSetController],
  providers: [UserSetService, UserSetResolver],
  exports: [UserSetService],
})
export class UserSetModule {}
