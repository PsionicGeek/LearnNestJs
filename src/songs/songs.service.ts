import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];
  create(song) {
    this.songs.push(song);
    return song;
  }
  findAll() {
    throw new Error('Error in db while fetching songs');
    return this.songs;
  }
}
