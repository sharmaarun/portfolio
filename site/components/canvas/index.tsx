import { Box } from '@chakra-ui/react';
import { Canvas as CCanvas, Props } from "@react-three/fiber";
import { ReactElement } from 'react';
interface Propss extends Props {

}

function Canvas(props: Propss): ReactElement {
    return (
        <Box>
            <CCanvas {...props}>{props.children}</CCanvas>
        </Box>
    )
}

export default Canvas;
