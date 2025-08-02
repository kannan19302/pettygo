import { Module } from '@nestjs/common';
import { WebsiteBuilderController } from './website-builder.controller';
import { WebsiteBuilderService } from './website-builder.service';

@Module({
  controllers: [WebsiteBuilderController],
  providers: [WebsiteBuilderService],
  exports: [WebsiteBuilderService],
})
export class WebsiteBuilderModule {}
