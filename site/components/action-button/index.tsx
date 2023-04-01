import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

export interface ActionButtonProps extends ButtonProps {
    children?: any
}

export function ActionButton({ children, ...props }: ActionButtonProps) {
    return (
        <Button
            borderRadius={0}
            colorScheme={"blue"}
            size="lg"
            border="1px dashed"
            {...props}
        >
            {children}
        </Button>
    )
}

export function RedActionButton({ children, ...props }: ActionButtonProps) {
    return (
        <ActionButton
            colorScheme={"red"}
            borderColor="white"
            {...props}
        >
            {children}
        </ActionButton>
    )
}



