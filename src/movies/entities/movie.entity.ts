import { Movies } from "@prisma/client";
export class MovieEntity implements Movies {
    id: number;
    title: string;
    synopsis: string;
    createdAt: Date;
    releaseDate: Date;
    poster: string;
    rating: number;
    genre: string[];
}
