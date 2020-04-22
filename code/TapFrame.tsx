import * as React from "react"
import { Override, Data } from "framer"

const state = Data({
    taps: 0,
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
