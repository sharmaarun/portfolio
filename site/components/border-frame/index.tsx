import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import Styles from "./index.module.css"
export interface BorderFrameProps extends BoxProps {
    children?: any
    gutter?: number[]
}

export function BorderFrame({ children, borderColor, gutter, ...props }: BorderFrameProps) {
    return (
        <Box
            pos="absolute"
            top={gutter ?? ["5", "5", "10"]}
            left={gutter ?? ["5", "5", "10"]}
            right={gutter ?? ["5", "5", "10"]}
            bottom={gutter ?? ["5", "5", "10"]}
            pointerEvents={"none"}
            style={{
                backgroundImage: `linear-gradient(90deg, ${borderColor} 50%, transparent 50%), linear-gradient(90deg, ${borderColor} 50%, transparent 50%), linear-gradient(0deg, ${borderColor} 50%, transparent 50%), linear-gradient(0deg, ${borderColor} 50%, transparent 50%)`
            }}
            className={Styles.borderFrameAnim}
            {...props}
        >
            {children}
        </Box>
    )
}
