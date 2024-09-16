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
import { SearchResult } from "./SearchResult";
import { SearchResultCountArgs } from "./SearchResultCountArgs";
import { SearchResultFindManyArgs } from "./SearchResultFindManyArgs";
import { SearchResultFindUniqueArgs } from "./SearchResultFindUniqueArgs";
import { CreateSearchResultArgs } from "./CreateSearchResultArgs";
import { UpdateSearchResultArgs } from "./UpdateSearchResultArgs";
import { DeleteSearchResultArgs } from "./DeleteSearchResultArgs";
import { Request } from "../../request/base/Request";
import { SearchResultService } from "../searchResult.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SearchResult)
export class SearchResultResolverBase {
  constructor(
    protected readonly service: SearchResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "read",
    possession: "any",
  })
  async _searchResultsMeta(
    @graphql.Args() args: SearchResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SearchResult])
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "read",
    possession: "any",
  })
  async searchResults(
    @graphql.Args() args: SearchResultFindManyArgs
  ): Promise<SearchResult[]> {
    return this.service.searchResults(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SearchResult, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "read",
    possession: "own",
  })
  async searchResult(
    @graphql.Args() args: SearchResultFindUniqueArgs
  ): Promise<SearchResult | null> {
    const result = await this.service.searchResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SearchResult)
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "create",
    possession: "any",
  })
  async createSearchResult(
    @graphql.Args() args: CreateSearchResultArgs
  ): Promise<SearchResult> {
    return await this.service.createSearchResult({
      ...args,
      data: {
        ...args.data,

        request: args.data.request
          ? {
              connect: args.data.request,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SearchResult)
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "update",
    possession: "any",
  })
  async updateSearchResult(
    @graphql.Args() args: UpdateSearchResultArgs
  ): Promise<SearchResult | null> {
    try {
      return await this.service.updateSearchResult({
        ...args,
        data: {
          ...args.data,

          request: args.data.request
            ? {
                connect: args.data.request,
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

  @graphql.Mutation(() => SearchResult)
  @nestAccessControl.UseRoles({
    resource: "SearchResult",
    action: "delete",
    possession: "any",
  })
  async deleteSearchResult(
    @graphql.Args() args: DeleteSearchResultArgs
  ): Promise<SearchResult | null> {
    try {
      return await this.service.deleteSearchResult(args);
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
  @graphql.ResolveField(() => Request, {
    nullable: true,
    name: "request",
  })
  @nestAccessControl.UseRoles({
    resource: "Request",
    action: "read",
    possession: "any",
  })
  async getRequest(
    @graphql.Parent() parent: SearchResult
  ): Promise<Request | null> {
    const result = await this.service.getRequest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
