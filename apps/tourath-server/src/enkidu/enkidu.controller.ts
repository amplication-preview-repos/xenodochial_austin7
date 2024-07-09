import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnkiduService } from "./enkidu.service";
import { EnkiduControllerBase } from "./base/enkidu.controller.base";

@swagger.ApiTags("enkidus")
@common.Controller("enkidus")
export class EnkiduController extends EnkiduControllerBase {
  constructor(protected readonly service: EnkiduService) {
    super(service);
  }
}
