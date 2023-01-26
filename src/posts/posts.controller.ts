import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { CreatePostDto, CreatePostQueryDto } from './dto';
import { UpdatePostDto } from './dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { Public, User } from '../auth/decorators';
import { User as UserModel } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('create')
  createPost(@User() user: UserModel, @Body() dto: CreatePostDto) {
    return this.postService.createPost(user.id, dto);
  }

  @Public()
  @Get()
  getPosts(@Query() query?: CreatePostQueryDto) {
    const { user = null } = query;
    return this.postService.getPosts(user && +user);
  }

  @Public()
  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getPost(id);
  }

  @Put('update/:id')
  editPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePostDto,
    @User() user: UserModel,
  ) {
    return this.postService.editPost(id, dto, user);
  }

  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number, @User() user: UserModel) {
    return this.postService.deletePost(id, user);
  }
}
