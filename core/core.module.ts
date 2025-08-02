import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RbacModule } from './rbac/rbac.module';
import { TenantModule } from './tenant/tenant.module';
import { DynamicModelsModule } from './dynamic-models/dynamic-models.module';
import { WorkflowsModule } from './workflows/workflows.module';

@Module({
  imports: [
    AuthModule,
    RbacModule,
    TenantModule,
    DynamicModelsModule,
    WorkflowsModule,
  ],
  exports: [
    AuthModule,
    RbacModule,
    TenantModule,
    DynamicModelsModule,
    WorkflowsModule,
  ],
})
export class CoreModule {}
