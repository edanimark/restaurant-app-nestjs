import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { MenuItem } from './entities/menu-item.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepo: Repository<Restaurant>,
    @InjectRepository(MenuItem)
    private menuItemRepo: Repository<MenuItem>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantRepo.find();
  }

  async findById(id: number): Promise<Restaurant> {
    const restaurant = await this.restaurantRepo.findOne({
      where: { id },
      relations: ['menu'],
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} not found`);
    }

    return restaurant;
  }

  async getMenu(restaurantId: number): Promise<MenuItem[]> {
    return this.menuItemRepo.find({
      where: { restaurant: { id: restaurantId } },
    });
  }
}
