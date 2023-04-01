import React, { useState } from "react"
import { Box, Card, Heading, HStack, Image, Stack, StackProps, Text } from "@chakra-ui/react"
import { BorderFrame } from "../border-frame";
import { ActionButton } from "../action-button";
import Link from "../link";

export interface ServicesProps extends StackProps {
    children?: any
}

const services: any = {
    web: [
        {
            title: "Website Development",
            description: "Building websites and web applications using various programming languages and technologies.",
            icon: "/web-dev.svg",
            props: {
                color: "red.500"
            }
        },
        {
            title: "SaaS Development",
            description: "Developing software as a service (SaaS) applications that can be accessed over the internet",
            icon: "/saas-icon.svg",
            props: {
                color: "purple.500"
            }
        },
        {
            title: "E-Commerce Development",
            description: "Developing online stores and ecommerce platforms to sell products or services online",
            icon: "/ecomm-icon.svg"
        },
        {
            title: "CMS, CRM, ERP Development",
            description: "Developing custom content management systems (CMS), customer relationship management (CRM) systems, and enterprise resource planning (ERP) systems to manage business processes and data.",
            icon: "/cms-icon.svg"
        },
        {
            title: "Cross-Platform Development",
            description: "Developing web applications that can run on different platforms and devices, such as desktop, mobile, and tablets.",
            icon: "/cross-dev-icon.svg"
        },
    ],
    app: [
        {
            title: "Mobile (IOS/ANDROID) App Development",
            description: "Developing mobile applications for both iOS and Android platforms.",
            icon: "/mobile-dev-icon.svg"
        },
        {
            title: "Desktop App Development",
            description: "Developing desktop applications for Windows, Mac, and Linux operating systems",
            icon: "/desktop-dev-icon.svg"
        },
        {
            title: "Cross Platform App Development",
            description: "Developing applications that can run on multiple platforms, including desktop, mobile, and web.",
            icon: "/cross-dev-icon.svg"
        }
    ],
    devops: [
        {
            title: "CI/CD",
            description: "Setting up continuous integration and continuous deployment (CI/CD) pipelines to automate the process of building, testing, and deploying software",
            icon: "/ci-cd-icon.svg"
        },
        {
            title: "Pipeline Management",
            description: "Managing and optimizing software development pipelines to ensure efficient and streamlined delivery of software.",
            icon: "/pipeline-icon.svg"
        },
        {
            title: "Containerization",
            description: "Developing and deploying software applications in containers for improved scalability and portability.",
            icon: "/docker-icon.svg"
        },
    ]
}



export function Services({ children, ...props }: ServicesProps) {
    const [selectedService, setSelectedService] = useState("web");

    const onServiceClick = (service: string) => {
        setSelectedService(service);
    };

    const selectedServices = services[selectedService];
    return (
        <Stack
            minH="80vh"
            bgColor="blackAlpha.100"
            // color="whiteAlpha.900"
            {...props}
        >
            <Stack
                w="100%"
                maxW="6xl"
                mx="auto"
                py={24}
                px={[4, 4, 8]}
                spacing={8}
            >
                <HStack justifyContent="center">
                    <Heading fontWeight="normal">
                        SERVICES
                    </Heading>
                </HStack>
                <Stack
                    alignItems={["flex-start", "flex-start", "center"]}
                    overflowX="auto"
                >
                    <HStack
                        spacing={8}
                    >
                        {Object.keys(services).map((service) => (
                            <Stack
                                onClick={() => onServiceClick(service)}
                                key={service}
                                py={2}
                                px={8}
                                cursor="pointer"
                                {...(selectedService === service ? {
                                    borderBottom: "2px solid black",
                                } : {})}
                            >
                                <Text fontWeight="normal" fontSize="lg">{service?.toUpperCase?.()}</Text>
                            </Stack>
                        ))}
                    </HStack>
                </Stack>
                <Stack
                    alignItems={["flex-start", "flex-start", "center"]}
                    overflowX="auto"
                >
                    <HStack
                        spacing={8}
                        w="100%"
                        alignItems="stretch"
                    >
                        {selectedServices?.map?.((service: any, index: number) => {
                            return <Card
                                key={index}
                                p={8}
                                cursor="pointer"
                                minW={["80vw", "80vw", "25vw"]}
                                minH="200px"
                                borderRadius={0}
                                pos="relative"
                            >
                                <BorderFrame
                                    gutter={[2, 2, 4]}
                                    zIndex={2}
                                    borderColor="red"
                                />
                                <Stack textAlign="center" alignItems="center" >
                                    <Box py={4}>
                                        <Image h="12" src={service.icon} />
                                    </Box>
                                    <Heading textAlign="center" size="sm" >
                                        {service.title}
                                    </Heading>
                                    <Text textAlign="center">
                                        {service.description}
                                    </Text>
                                </Stack>
                            </Card>
                        }
                        )}
                    </HStack>
                </Stack>
                <HStack
                    justifyContent={["flex-start", "flex-start", "center"]}
                >
                    <Link href="/#contact">
                        <ActionButton
                            colorScheme="red"
                        >
                            CONTACT ME
                        </ActionButton>
                    </Link>
                </HStack>
            </Stack>
        </Stack >
    )
}