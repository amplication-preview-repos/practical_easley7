import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomTypeServiceBase } from "./base/roomType.service.base";

@Injectable()
export class RoomTypeService extends RoomTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
