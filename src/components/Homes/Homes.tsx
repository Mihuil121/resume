import HomeMain from "./main/HomeMain"
import { Stack } from "./stack/Stack"
import Exhibition from "./main/Exhibition/Exhibition"
import Botton from "./botton/Botton"

const Homes: React.FC = () => {
    return (
        <>
            <HomeMain />
            <Stack />
            <Exhibition />
            <Botton />
        </>
    )
}

export default Homes