import { JogadoresModule } from './jogadores/jogadores.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.x0v8x.mongodb.net/sradmbackend?retryWrites=true&w=majority',
    ),
    CategoriasModule,
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
