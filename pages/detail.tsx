import {Button, Stack} from "@mui/material";
import {useRouter} from "next/router";

const detail = () => {
    const router = useRouter()
    console.log(router.query)
    const {id} = router.query

    const handleBtnClick = () => {
        router.back()
    }

    return <>
        <Stack>
            <Button onClick={handleBtnClick}>
                {`Detail ${id}`}
            </Button>
        </Stack>
    </>
}

export default detail
