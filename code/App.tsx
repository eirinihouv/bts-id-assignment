import * as React from "react"
import { Data, Override, Scroll } from "framer"

const state = Data({
    taps: 0,
    page: 0,
    max: 0,
})

//primarybutton onTap
export function TapFrame(props): Override {
    return {
        borderRadius: 12,
        whileTap: {
            scale: 0.9,
        },
        onTap: () => {
            state.taps += 1
        },
    }
}

//bottom-nav
export function DesktopPage(props): Override {
    const component = props.children[0]
    const pages = component.props.children
    state.max = pages.length - 1
    return {
        currentPage: state.page,
        onChangePage: index => {
            state.page = index
        },
    }
}

export function ButtonNextPage(): Override {
    return {
        onClick: () => {
            if (state.page === state.max) {
                state.page = 0
            } else {
                state.page += 1
            }
        },
    }
}

export function ButtonPreviousPage(): Override {
    return {
        onClick: () => {
            state.page -= 1
        },
    }
}

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
