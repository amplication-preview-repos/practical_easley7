import * as graphql from "@nestjs/graphql";
import { FlashcardResolverBase } from "./base/flashcard.resolver.base";
import { Flashcard } from "./base/Flashcard";
import { FlashcardService } from "./flashcard.service";

@graphql.Resolver(() => Flashcard)
export class FlashcardResolver extends FlashcardResolverBase {
  constructor(protected readonly service: FlashcardService) {
    super(service);
  }
}
