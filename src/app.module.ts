import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UserModule } from './modules/user/module/user.module';
import { PostsModule } from './modules/posts/module/posts.module';

@Module({
  imports: [CommonModule, UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
