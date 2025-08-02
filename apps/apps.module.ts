import { Module } from '@nestjs/common';
import { CrmModule } from './crm';
import { HrModule } from './hr';
import { SalesModule } from './sales';
import { StudioModule } from './studio';
import { WebsiteBuilderModule } from './website-builder';
import { AccountingModule } from './accounting';
import { InventoryModule } from './inventory';
import { ProjectsModule } from './projects';
import { PosModule } from './pos';
import { PurchaseModule } from './purchase';
import { ManufacturingModule } from './manufacturing';
import { MarketplaceModule } from './marketplace';
import { AnalyticsModule } from './analytics';

@Module({
  imports: [
    CrmModule,
    HrModule,
    SalesModule,
    StudioModule,
    WebsiteBuilderModule,
    AccountingModule,
    InventoryModule,
    ProjectsModule,
    PosModule,
    PurchaseModule,
    ManufacturingModule,
    MarketplaceModule,
    AnalyticsModule,
  ],
  exports: [
    CrmModule,
    HrModule,
    SalesModule,
    StudioModule,
    WebsiteBuilderModule,
    AccountingModule,
    InventoryModule,
    ProjectsModule,
    PosModule,
    PurchaseModule,
    ManufacturingModule,
    MarketplaceModule,
    AnalyticsModule,
  ],
})
export class AppsModule {}
