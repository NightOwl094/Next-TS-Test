import {Button, Stack} from "@mui/material";
import {useRouter} from "next/router";
import HeadMetaData from "../components/HeadMetaData";

const detail = () => {
    const router = useRouter()
    console.log(router.query)
    const {id} = router.query

    const handleBtnClick = () => {
        router.back()
    }

    return <>
        <Stack>
            <HeadMetaData/>

            <Button onClick={handleBtnClick}>
                {`Detail ${id}`}
            </Button>
        </Stack>
    </>
}

export default detail
