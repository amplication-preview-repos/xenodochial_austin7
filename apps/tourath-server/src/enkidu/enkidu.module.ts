import { Module } from "@nestjs/common";
import { EnkiduModuleBase } from "./base/enkidu.module.base";
import { EnkiduService } from "./enkidu.service";
import { EnkiduController } from "./enkidu.controller";
import { EnkiduResolver } from "./enkidu.resolver";

@Module({
  imports: [EnkiduModuleBase],
  controllers: [EnkiduController],
  providers: [EnkiduService, EnkiduResolver],
  exports: [EnkiduService],
})
export class EnkiduModule {}
