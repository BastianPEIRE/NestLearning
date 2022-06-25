import { Controller } from '@nestjs/common';
import { CardsService } from 'src/services/cards/cards.service';

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}
}
