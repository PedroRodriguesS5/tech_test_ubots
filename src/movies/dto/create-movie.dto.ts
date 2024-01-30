import {
    IsArray,
    IsDateString,
    IsNotEmpty,
    IsNumberString,
    IsString,
} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    synopsis: string;

    @IsDateString()
    @IsNotEmpty()
    releaseDate: Date;

    @IsString()
    poster: string;

    @IsString()
    @IsArray()
    @IsNotEmpty()
    genre: string[];
}
