import React from "react"
import { Box, Heading, HStack, Stack, StackProps, Text } from "@chakra-ui/react"
import { CarouselItem, WorkCarousel } from "../work-carousel"
import { BorderFrame } from "../border-frame"
import Link from "../link"

export interface WorkSectionProps extends StackProps {
    children?: any
}


const dummyItems: CarouselItem[] = [
    {
        title:
            <Stack
                alignItems="center"
            >
                <HStack
                    justifyContent="center"
                >
                    <Heading fontWeight="normal" letterSpacing="5px" color="red">
                        SENDLIX
                    </Heading>

                </HStack>
                <Text color="white">
                    Drag n Drop Email Template Builder
                </Text>
                <Link href="https://www.sendlix.com" isExternal>
                    <Text color="whiteAlpha.800" fontWeight="thin">
                        Visit Site
                    </Text>
                </Link>
            </Stack>,
        description: <Text color="whiteAlpha.800" fontWeight="thin">
            Sendlix (sendlix.com) is a web-based software-as-a-service (SaaS) platform that enables users to create customized email templates using a simple drag and drop interface. The platform offers a variety of pre-designed templates that can be easily customized to meet the specific needs of users.
            As a developer, building Sendlix was an exciting challenge that required a deep understanding of email design and development. We knew that designing email templates can be a time-consuming and complicated process, which is why we aimed to create a solution that simplifies the process while still delivering high-quality results.
            <br />
            <br />
            We started by researching the various email marketing tools available in the market and identifying the gaps and pain points that users were experiencing. From there, we developed a clear vision for Sendlix as a drag and drop-based email template builder that would enable users to create professional-looking email templates with minimal effort.
            <br />
            <br />
            The development process involved building a user-friendly interface that made it easy for users to customize their templates using drag and drop functionality. We also ensured that the platform was responsive and compatible with all major email clients, ensuring that email templates would display correctly regardless of the device or email client used by the recipient.
            <br />
            <br />
            We implemented a range of features, such as dynamic content and the ability to schedule and track campaigns, to ensure that Sendlix provided users with a comprehensive email marketing solution. We also focused on ensuring that the platform was secure and reliable, with robust data protection measures in place to safeguard user data.
            <br />
            <br />
            Throughout the development process, we prioritized user feedback and worked closely with our beta testers to refine the platform and address any issues or concerns that arose.
            <br />
            <br />
            Overall, building Sendlix was a rewarding experience, and we are proud to have created a tool that simplifies the email design process and empowers businesses of all sizes to create engaging and effective email campaigns.
        </Text>,
        image: "/purewibez-bg.png",
    },
    {
        title:
            <Stack
                alignItems="center"
                textAlign="center"
            >
                <HStack
                    justifyContent="center"
                >
                    <Heading fontWeight="normal" letterSpacing="5px" color="red">
                        FLYT
                    </Heading>
                    <Heading fontWeight="normal" letterSpacing="5px" color="whiteAlpha.800">
                        CHEAP
                    </Heading>
                </HStack>
                <Text color="white">
                    Flight Search and Booking Engine
                </Text>
                <Link href="https://www.flytcheap.com" isExternal>
                    <Text color="whiteAlpha.800" fontWeight="thin">
                        Visit Site
                    </Text>
                </Link>

            </Stack>
        ,
        description: <Text color="whiteAlpha.800" fontWeight="thin">
            Flytcheap.com is an online flight searching and booking engine that helps users find affordable flights to their desired destinations. The platform offers a user-friendly interface that allows users to input their travel details, including departure and arrival airports, travel dates, and number of passengers. The website then searches through various airlines and travel agencies to find the cheapest available flights that match the user&apos;s criteria.
            <br />
            <br />
            Flytcheap.com also provides users with information on flight times, layovers, and airline reviews to help them make informed decisions when booking their flights. In addition, the platform offers a range of filters and sorting options to help users customize their search results and find the best flight deals.
            <br />
            <br />
            Once users have selected their preferred flight, Flytcheap.com redirects them to the respective airline or travel agency&apos;s website to complete their booking. The platform also offers a range of payment options, including credit cards and PayPal, to make the booking process as convenient as possible. Overall, Flytcheap.com is a reliable and user-friendly platform that offers affordable flight options to budget-conscious travelers.
        </Text>,
        image: "/flight-cheap-bg.png",
    },
    {
        title:
            <Stack
                alignItems="center"
                textAlign="center"
            >
                <HStack
                    justifyContent="center"
                >
                    <Heading fontWeight="normal" letterSpacing="5px" color="red">
                        RX
                    </Heading>
                    <Heading fontWeight="normal" letterSpacing="5px" color="whiteAlpha.800">
                        CRM
                    </Heading>
                </HStack>
                <Text color="white" >
                    Customer Relationship Management Platform
                </Text>
                <Link href="https://rx-crm.exclamationx.com/admin" isExternal>
                    <Text color="whiteAlpha.800" fontWeight="thin">
                        Visit Site
                    </Text>
                </Link>

            </Stack>
        ,
        description: <Text color="whiteAlpha.800" fontWeight="thin">
            Rx-CRM is a custom-built customer relationship management (CRM) web application that provides businesses with a comprehensive solution for managing customer interactions and improving sales performance. Developed in-house, Rx-CRM is tailored to meet the specific needs of our organization, with all the basic features of a custom CRM software.
            <br />
            <br />
            The platform offers a user-friendly interface that enables our sales team to manage customer contacts, track interactions, and monitor sales progress. The application also allows our team to segment customers based on various criteria, such as purchasing history or demographics, enabling us to deliver targeted marketing campaigns and personalized experiences.
            <br />
            <br />
            In addition to contact management, Rx-CRM offers a range of features that streamline our sales processes, including the ability to track leads, manage opportunities, and generate sales reports. The platform also integrates with various third-party tools, such as email marketing software and social media platforms, enabling us to automate tasks and streamline our workflows.
            <br />
            <br />


        </Text>,
        image: "https://images.unsplash.com/photo-1664736939017-cb84613d9f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
        title:
            <Stack
                alignItems="center"
                textAlign="center"
            >
                <HStack
                    justifyContent="center"
                >
                    <Heading fontWeight="normal" letterSpacing="5px" color="white">
                        EINFACH <Box display="inline" color="red">24</Box> KREDIT
                    </Heading>
                </HStack>
                <Text color="white">
                    Financial Services Website
                </Text>
                <Link href="https://einfach247kredit.de/" isExternal>
                    <Text color="whiteAlpha.800" fontWeight="thin">
                        Visit Site
                    </Text>
                </Link>

            </Stack>
        ,
        description: <Text color="whiteAlpha.800" fontWeight="thin">
            As a developer of einfach24kredit.de, a financial website that helps people get loans from third-party loan providers, my team and I faced several challenges in creating a user-friendly and secure platform that met the needs of our users.
            <br />
            <br />
            One of the primary challenges was ensuring that the platform was easy to navigate and understand, given the complexity of financial products and services. We focused on creating a simple and intuitive interface that enabled users to compare different loan options easily and select the best option for their needs.
            <br />
            <br />
            Another significant challenge was ensuring that the platform was secure and compliant with relevant data protection regulations. To achieve this, we implemented robust security measures, including SSL encryption, secure authentication, and data encryption, to protect user data and prevent unauthorized access.
            <br />
            <br />
            We also faced the challenge of integrating the platform with third-party loan providers, requiring us to establish secure and reliable connections to external systems while ensuring data integrity and privacy.
            <br />
            <br />
            To address these challenges, we utilized the latest web development technologies and frameworks, including responsive design, REST APIs, and database management systems. We also conducted extensive user testing and solicited feedback from our users to refine the platform and ensure that it met their needs.


        </Text>,
        image: "https://images.unsplash.com/photo-1664736939017-cb84613d9f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
        title:
            <Stack
                alignItems="center"
                textAlign="center"
            >
                <HStack
                    justifyContent="center"
                >
                    <Heading fontWeight="normal" letterSpacing="5px" color="white">
                        LENDING <Box display="inline" color="red">GROUND</Box>
                    </Heading>
                </HStack>
                <Text color="white">
                    Financial Services Website
                </Text>
                <Link href="https://www.lending-ground.com/" isExternal>
                    <Text color="whiteAlpha.800" fontWeight="thin">
                        Visit Site
                    </Text>
                </Link>

            </Stack>
        ,
        description: <Text color="whiteAlpha.800" fontWeight="thin">
            Lending Ground is a financial website that helps people get loans from third-party loan providers. I faced several challenges in creating a robust and user-friendly platform that meets the needs of borrowers and lenders alike.
            <br />
            <br />
            One of the primary challenges was creating a platform that could securely connect borrowers with lenders while ensuring that sensitive financial information was protected. We implemented advanced encryption techniques and secure data storage solutions to safeguard user data and prevent unauthorized access.
            <br />
            <br />

            Another significant challenge was ensuring that the platform was user-friendly and accessible to borrowers of all backgrounds and experience levels. We focused on creating a simple and intuitive interface that made it easy for borrowers to apply for loans, compare offers, and select the best option for their needs.
            <br />
            <br />

            To achieve these goals, we leveraged cutting-edge web development technologies and frameworks, including responsive design and REST APIs. We also conducted extensive user testing to refine the platform and ensure that it met the needs of our target audience.

        </Text>,
        image: "https://images.unsplash.com/photo-1490318134124-34dadea1b8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    }
]

export function WorkSection({ children, ...props }: WorkSectionProps) {
    return (
        <Stack
            {...props}
            pos="relative"
            spacing={0}
            bgColor="blackAlpha.100"

        >
            <BorderFrame zIndex={3} borderColor="red" />
            <HStack
                justifyContent="center"
                py={12}
            >
                <Heading textAlign="center" fontWeight="normal">SOME PAST WORK</Heading>
            </HStack>
            <WorkCarousel minH="30vh" items={dummyItems} />
        </Stack>
    )
}
