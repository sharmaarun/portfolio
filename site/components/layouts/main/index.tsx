import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { StackProps } from "@chakra-ui/react"

export interface MainlayoutProps extends StackProps {
    children?: any
    posts?: any
}

export function Mainlayout({ children, posts, ...props }: MainlayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer posts={posts}/>
        </>
    )
}
