import * as React from "react"
import { Data, Override } from "framer"

const state = Data({
    page: 0,
    max: 0,
})

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
