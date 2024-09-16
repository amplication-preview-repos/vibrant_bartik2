/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { KeywordWhereUniqueInput } from "../../keyword/base/KeywordWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SearchResultListRelationFilter } from "../../searchResult/base/SearchResultListRelationFilter";

@InputType()
class RequestWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => KeywordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KeywordWhereUniqueInput)
  @IsOptional()
  @Field(() => KeywordWhereUniqueInput, {
    nullable: true,
  })
  keyword?: KeywordWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  requestedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SearchResultListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SearchResultListRelationFilter)
  @IsOptional()
  @Field(() => SearchResultListRelationFilter, {
    nullable: true,
  })
  searchResults?: SearchResultListRelationFilter;
}

export { RequestWhereInput as RequestWhereInput };
