import type {GetServerSideProps, NextPage} from 'next'
import {Button, Stack} from "@mui/material";
import HeadMetaData from "../components/HeadMetaData";
import Image from "next/image"
import {PhotoDto} from "../data/api/photo/dto/photoDto";
import {fetchPhotos} from "../data/api/photo/PhotoApi";
import {useRouter} from "next/router";
import {RoutePath} from "../route/RoutePath";

type HomeProps = {
    photos: PhotoDto[]
}

const Home: NextPage<HomeProps> = (
    {photos}
) => {
    const router = useRouter()

    const handlePhotoClick = (id: number) => {
        router.push({
            pathname: RoutePath.DETAIL,
            query: {id}
        })
    }

    //

    const renderPhotos =
        photos.map(({id, thumbnailUrl}) => {
            return (
                <Button
                    key={id}
                    onClick={() => handlePhotoClick(id)}
                >
                    <Image
                        src={thumbnailUrl}
                        width={100}
                        height={100}
                    />
                </Button>
            )
        })

    return (
        <Stack aria-label={"test section"}>
            <HeadMetaData title={"home"}/>

            <div>
                {renderPhotos}
            </div>
        </Stack>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetchPhotos(5)
    const photos: PhotoDto[] = res.data

    return {
        props: {
            photos
        }
    }
}

export default Home
