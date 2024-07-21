import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmenityServiceBase } from "./base/amenity.service.base";

@Injectable()
export class AmenityService extends AmenityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
