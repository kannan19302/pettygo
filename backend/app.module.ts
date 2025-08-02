import { Module } from '@nestjs/common';
import { CoreModule } from 'core/core.module';
import { AppsModule } from 'apps/apps.module';
// import { StudioModule } from '../studio/backend/studio.module';
// import { WebsiteBuilderModule } from '../website-builder/backend/website-builder.module';
// import { MarketplaceModule } from '../marketplace/backend/marketplace.module';

@Module({
  imports: [
    CoreModule,
    AppsModule,
    // StudioModule,
    // WebsiteBuilderModule,
    // MarketplaceModule,
  ],
})
export class AppModule {}
