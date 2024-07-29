import { Module } from "@nestjs/common";
import { FlashcardModuleBase } from "./base/flashcard.module.base";
import { FlashcardService } from "./flashcard.service";
import { FlashcardController } from "./flashcard.controller";
import { FlashcardResolver } from "./flashcard.resolver";

@Module({
  imports: [FlashcardModuleBase],
  controllers: [FlashcardController],
  providers: [FlashcardService, FlashcardResolver],
  exports: [FlashcardService],
})
export class FlashcardModule {}
