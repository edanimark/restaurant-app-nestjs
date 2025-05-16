// src/seed/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import { Restaurant } from '../restaurants/entities/restaurant.entity';
import { MenuItem } from '../restaurants/entities/menu-item.entity';
import { restaurantsData } from './data';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);
  const restaurantRepo = dataSource.getRepository(Restaurant);
  const menuItemRepo = dataSource.getRepository(MenuItem);

  console.log('🧹 Clearing database...');
  await dataSource.query(
    'TRUNCATE TABLE "menu_item", "restaurant" RESTART IDENTITY CASCADE',
  );

  console.log('🍽️ Seeding restaurants and menus...');
  for (const data of restaurantsData) {
    const restaurant = restaurantRepo.create({
      name: data.name,
      description: data.description,
      menu: data.menu,
    });
    await restaurantRepo.save(restaurant);

    const menuItems = data.menu.map((item) =>
      menuItemRepo.create({
        ...item,
        restaurant,
      }),
    );
    await menuItemRepo.save(menuItems);
  }

  console.log('✅ Done!');
  await app.close();
}

bootstrap();
