import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SearchResultModuleBase } from "./base/searchResult.module.base";
import { SearchResultService } from "./searchResult.service";
import { SearchResultController } from "./searchResult.controller";
import { SearchResultResolver } from "./searchResult.resolver";

@Module({
  imports: [SearchResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [SearchResultController],
  providers: [SearchResultService, SearchResultResolver],
  exports: [SearchResultService],
})
export class SearchResultModule {}
