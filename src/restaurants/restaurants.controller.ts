import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.findById(id);
  }

  @Get(':id/menu')
  getMenu(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.getMenu(id);
  }
}
