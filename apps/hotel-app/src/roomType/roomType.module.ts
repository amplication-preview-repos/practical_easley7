import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoomTypeModuleBase } from "./base/roomType.module.base";
import { RoomTypeService } from "./roomType.service";
import { RoomTypeController } from "./roomType.controller";
import { RoomTypeResolver } from "./roomType.resolver";

@Module({
  imports: [RoomTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoomTypeController],
  providers: [RoomTypeService, RoomTypeResolver],
  exports: [RoomTypeService],
})
export class RoomTypeModule {}
