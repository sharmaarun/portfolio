import { Link as _Link, LinkProps as _LinkProps } from "@chakra-ui/react"
import NLink from "next/link"
export interface LinkProps extends _LinkProps {

}

export function Link(props: LinkProps) {
    return (
        <_Link {...props} as={NLink} />
    )
}

export default Link