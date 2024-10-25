import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  createNew(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.songService.findAll();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e.message,
      });
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `This action returns song based on id ${typeof id}`;
  }
  @Put(':id')
  updateOne() {
    return 'This action update song based on id';
  }

  @Delete(':id')
  deleteOne() {
    return 'This action delete song based on id';
  }
}
