/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TrendAnalysis } from "./TrendAnalysis";
import { TrendAnalysisCountArgs } from "./TrendAnalysisCountArgs";
import { TrendAnalysisFindManyArgs } from "./TrendAnalysisFindManyArgs";
import { TrendAnalysisFindUniqueArgs } from "./TrendAnalysisFindUniqueArgs";
import { CreateTrendAnalysisArgs } from "./CreateTrendAnalysisArgs";
import { UpdateTrendAnalysisArgs } from "./UpdateTrendAnalysisArgs";
import { DeleteTrendAnalysisArgs } from "./DeleteTrendAnalysisArgs";
import { Keyword } from "../../keyword/base/Keyword";
import { TrendAnalysisService } from "../trendAnalysis.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TrendAnalysis)
export class TrendAnalysisResolverBase {
  constructor(
    protected readonly service: TrendAnalysisService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "read",
    possession: "any",
  })
  async _trendAnalysesMeta(
    @graphql.Args() args: TrendAnalysisCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TrendAnalysis])
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "read",
    possession: "any",
  })
  async trendAnalyses(
    @graphql.Args() args: TrendAnalysisFindManyArgs
  ): Promise<TrendAnalysis[]> {
    return this.service.trendAnalyses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TrendAnalysis, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "read",
    possession: "own",
  })
  async trendAnalysis(
    @graphql.Args() args: TrendAnalysisFindUniqueArgs
  ): Promise<TrendAnalysis | null> {
    const result = await this.service.trendAnalysis(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TrendAnalysis)
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "create",
    possession: "any",
  })
  async createTrendAnalysis(
    @graphql.Args() args: CreateTrendAnalysisArgs
  ): Promise<TrendAnalysis> {
    return await this.service.createTrendAnalysis({
      ...args,
      data: {
        ...args.data,

        keyword: args.data.keyword
          ? {
              connect: args.data.keyword,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TrendAnalysis)
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "update",
    possession: "any",
  })
  async updateTrendAnalysis(
    @graphql.Args() args: UpdateTrendAnalysisArgs
  ): Promise<TrendAnalysis | null> {
    try {
      return await this.service.updateTrendAnalysis({
        ...args,
        data: {
          ...args.data,

          keyword: args.data.keyword
            ? {
                connect: args.data.keyword,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TrendAnalysis)
  @nestAccessControl.UseRoles({
    resource: "TrendAnalysis",
    action: "delete",
    possession: "any",
  })
  async deleteTrendAnalysis(
    @graphql.Args() args: DeleteTrendAnalysisArgs
  ): Promise<TrendAnalysis | null> {
    try {
      return await this.service.deleteTrendAnalysis(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Keyword, {
    nullable: true,
    name: "keyword",
  })
  @nestAccessControl.UseRoles({
    resource: "Keyword",
    action: "read",
    possession: "any",
  })
  async getKeyword(
    @graphql.Parent() parent: TrendAnalysis
  ): Promise<Keyword | null> {
    const result = await this.service.getKeyword(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
