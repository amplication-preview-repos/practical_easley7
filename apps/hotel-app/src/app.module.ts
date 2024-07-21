import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ReservationModule } from "./reservation/reservation.module";
import { GuestModule } from "./guest/guest.module";
import { MaintenanceModule } from "./maintenance/maintenance.module";
import { RoomTypeModule } from "./roomType/roomType.module";
import { AmenityModule } from "./amenity/amenity.module";
import { EmployeeModule } from "./employee/employee.module";
import { SupplierModule } from "./supplier/supplier.module";
import { ReviewModule } from "./review/review.module";
import { ServiceModule } from "./service/service.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { EventModule } from "./event/event.module";
import { InventoryModule } from "./inventory/inventory.module";
import { RoomStatusModule } from "./roomStatus/roomStatus.module";
import { PaymentModule } from "./payment/payment.module";
import { PromotionModule } from "./promotion/promotion.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ReservationModule,
    GuestModule,
    MaintenanceModule,
    RoomTypeModule,
    AmenityModule,
    EmployeeModule,
    SupplierModule,
    ReviewModule,
    ServiceModule,
    InvoiceModule,
    EventModule,
    InventoryModule,
    RoomStatusModule,
    PaymentModule,
    PromotionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
