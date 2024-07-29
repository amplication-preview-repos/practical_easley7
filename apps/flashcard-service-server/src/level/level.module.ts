import { Module } from "@nestjs/common";
import { LevelModuleBase } from "./base/level.module.base";
import { LevelService } from "./level.service";
import { LevelController } from "./level.controller";
import { LevelResolver } from "./level.resolver";

@Module({
  imports: [LevelModuleBase],
  controllers: [LevelController],
  providers: [LevelService, LevelResolver],
  exports: [LevelService],
})
export class LevelModule {}
