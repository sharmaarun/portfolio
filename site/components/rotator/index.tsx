

import { Flex, HStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import React, { useEffect, useRef } from 'react';



export const Marquee = ({ children }: any) => {
    const clonedChildren = [...children];
    const pRef = useRef<HTMLDivElement>()
    const pBox = pRef?.current?.getBoundingClientRect();

    const marquee = pBox ? keyframes`
    0% {
        transform: translateX(${(pBox?.width) ?? 100}px);
    }
    100% {
        transform: translateX(-100%);
    }
    `: "";
    console.log(pBox)
    return (
        <Flex overflow="hidden" ref={pRef as any}>
            {pBox ?
                <HStack animation={`${marquee} 10s linear infinite`} >
                    {clonedChildren.map((child, index) => (
                        <React.Fragment key={index}>{child}</React.Fragment>
                    ))}
                </HStack>
                :
                <></>
            }
        </Flex>

    );
};
