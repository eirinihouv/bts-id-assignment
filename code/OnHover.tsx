import * as React from "react"
import { Frame, Override } from "framer"

export function OnHover(props): Override {
    return {
        whileHover: {
            scale: 1.1,
        },
    }
}
