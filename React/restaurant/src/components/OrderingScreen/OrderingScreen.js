import { LeftOrderSection } from "./LeftOrderSection/LeftOrderSection"
import { MainFilters } from "./MainFilters/MainFilters"
import { RightOrderSection } from "./RightOrderSection/RightOrderSection"

export const OrderingScreen = () => {
    return (
        <>
            <MainFilters />
            <LeftOrderSection />
            <RightOrderSection />
        </>
    )
}