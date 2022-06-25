import { Injectable } from '@nestjs/common';
import { CardModel } from 'src/models/card';

@Injectable()
export class CardsService {
    private cards: Array<CardModel> = [];

    public findAll(): Array<CardModel> {
        return this.cards;
  }
}
