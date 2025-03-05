import HomeMain from "./main/HomeMain"
import { Stack } from "./stack/Stack"
import Exhibition from "./main/Exhibition/Exhibition"

const Homes: React.FC = () => {
    return (
        <>
            <HomeMain />
            <Stack />
            <Exhibition />
        </>
    )
}

export default Homes