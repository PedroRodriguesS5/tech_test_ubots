import { HttpException, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { PrismaService } from '../prisma/prisma.service'
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';


@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) { }

  async createMovie(createMovieDto: CreateMovieDto): Promise<MovieEntity> {
    const existinMovie = await this.prisma.movies.findUnique({
      where: { title: createMovieDto.title }
    })
    if (existinMovie) {
      throw new HttpException("Filme já cadastrado", 400)
    }
    return await this.prisma.movies.create({
      data: createMovieDto
    })
  }

  async findAll(): Promise<any[]> {
    return await this.prisma.movies.findMany({
      orderBy: {
        rating: 'asc'
      }
    })
  }

  async findOne(title: string): Promise<MovieEntity> {
    const findMovie = await this.prisma.movies.findUnique({
      where: { title: title },
    })
    if (!findMovie) {
      throw new HttpException("Filme não encontrado", 404)
    }
    return findMovie;
  }

  async ratingMovie(id: string, ratingValue: string): Promise<any> {
    const existingMovie = await this.prisma.movies.findUnique({
      where: { id: Number(id) }
    })
    if (!existingMovie) {
      throw new HttpException("Filme não encontrado", 400);
    }
    if (Number(ratingValue) <= 0) {
      throw new HttpException("Avalição é de 1 a 10, por favor insira uma nota válida", 400);
    }
    if (Number(ratingValue) > 10) {
      throw new HttpException("A avalição necessita ser um número entre 0 e 10", 400)
    }
    return await this.prisma.movies.update({
      data: {
        rating: Number(ratingValue)
      },
      where: { id: Number(id) }
    })
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<MovieEntity> {
    const existingMovie = await this.prisma.movies.findUnique({
      where: { title: updateMovieDto.title }
    });
    if (existingMovie) {
      throw new HttpException("Filme já cadastrado", 400)
    }
    return await this.prisma.movies.update({
      where: { id: Number(id) },
      data: updateMovieDto
    })
  }

  async remove(id: string) {
    const findMovie = await this.prisma.movies.findUnique({
      where: { id: Number(id) }
    })
    if (!findMovie) {
      throw new HttpException("Filme não encontrado, por favor insira um id válido", 400)
    }
    return await this.prisma.movies.delete({
      where: { id: Number(id) }
    });
  }
}
