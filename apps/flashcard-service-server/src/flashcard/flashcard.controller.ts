import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlashcardService } from "./flashcard.service";
import { FlashcardControllerBase } from "./base/flashcard.controller.base";

@swagger.ApiTags("flashcards")
@common.Controller("flashcards")
export class FlashcardController extends FlashcardControllerBase {
  constructor(protected readonly service: FlashcardService) {
    super(service);
  }
}
