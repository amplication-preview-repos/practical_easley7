import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoomStatusModuleBase } from "./base/roomStatus.module.base";
import { RoomStatusService } from "./roomStatus.service";
import { RoomStatusController } from "./roomStatus.controller";
import { RoomStatusResolver } from "./roomStatus.resolver";

@Module({
  imports: [RoomStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoomStatusController],
  providers: [RoomStatusService, RoomStatusResolver],
  exports: [RoomStatusService],
})
export class RoomStatusModule {}
