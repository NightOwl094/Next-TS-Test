import JsonPlaceholderClient from "../../source/JsonPlaceholderClient";
import {PhotoDto} from "./dto/photoDto";

export const fetchPhotos = async (limit: number) =>
    JsonPlaceholderClient.get<PhotoDto[]>(`/photos?_start=0&_limit=${limit}`)
