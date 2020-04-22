import * as React from "react"
import { Data, Override, Scroll } from "framer"

//double scroll
export function DoubleScroll(): Override {
    return <Scroll direction="both" directionLock={false}></Scroll>
}

//accordion
export function Accordion(props): Override {
    return {
        variants: {
            open: {
                height: 207,
            },
            closed: {
                height: 50,
            },
        },
        initial: "closed",
        whileTap: "open",
    }
}

export function Item(props): Override {
    return {}
}
