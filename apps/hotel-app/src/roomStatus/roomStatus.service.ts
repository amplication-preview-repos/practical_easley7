import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoomStatusServiceBase } from "./base/roomStatus.service.base";

@Injectable()
export class RoomStatusService extends RoomStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
