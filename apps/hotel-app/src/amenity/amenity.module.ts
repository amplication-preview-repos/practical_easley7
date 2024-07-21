import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AmenityModuleBase } from "./base/amenity.module.base";
import { AmenityService } from "./amenity.service";
import { AmenityController } from "./amenity.controller";
import { AmenityResolver } from "./amenity.resolver";

@Module({
  imports: [AmenityModuleBase, forwardRef(() => AuthModule)],
  controllers: [AmenityController],
  providers: [AmenityService, AmenityResolver],
  exports: [AmenityService],
})
export class AmenityModule {}
