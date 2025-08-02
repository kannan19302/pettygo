import { Module } from '@nestjs/common';
import { CrmModule } from './crm';

@Module({
  imports: [CrmModule],
  exports: [CrmModule],
})
export class AppsModule {}
