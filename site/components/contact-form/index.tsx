import React, { useEffect } from "react"
import { Button, HStack, Input, Stack, StackProps, Text, Textarea, useToast } from "@chakra-ui/react"
import { getCookie, setCookie } from "@/utils"

export interface ContactFormProps extends StackProps {
    children?: any
}

export function ContactForm({ children, ...props }: ContactFormProps) {
    const [form, setForm] = React.useState<any>({})
    const [errors, setErrors] = React.useState<any>({})
    const [done, setDone] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const toast = useToast({

    })

    useEffect(() => {
        const lastDoneDateStr = getCookie("qd")
        if (!lastDoneDateStr) return
        const lastDoneDate = new Date(lastDoneDateStr)
        const now = new Date()
        const diff = now.getTime() - lastDoneDate.getTime()
        const diffMins = Math.ceil(diff / (1000 * 60))
        console.log(lastDoneDate, now, diff, diffMins)
        if (diffMins < 5) {
            setDone(true)
        }
    }, [])

    const validate = (form: any) => {
        const errors: any = {}
        if (!form.email) {
            errors.email = "Email is required"
        }
        if (!form.email?.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.email = "Email is invalid"
        }
        if (!form.query) {
            errors.query = "Query is required"
        }
        return errors
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setLoading(true)
            e.preventDefault()
            const errors = validate(form)
            if (Object.keys(errors).length > 0) {
                setErrors(errors)
                return
            }
            const res = await fetch("/api/query", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const { ok, message } = (await res?.json?.()) ?? {}
            if (!ok) {
                toast({
                    title: "Error",
                    description: message,
                    status: "error",
                    position: "top",
                })
                return
            } else {
                toast({
                    title: "Success",
                    description: message,
                    status: "success",
                    position: "top",
                })
                setDone(true)
                setCookie("qd", new Date().toISOString(), 1)
            }
        } catch (e: any) {
            console.log(e)
            toast({
                title: "Error",
                description: e.message,
                status: "error",
                position: "top",
            })
        } finally {
            setLoading(false)
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    if (done) return (
        <Stack spacing={8} {...props}>
            <Text>Thanks for reaching out. I will get back to you soon.</Text>
        </Stack>
    )
    return (
        // <form onSubmit={onSubmit}>
        <Stack as={"form"} {...{ onSubmit: onSubmit } as any} spacing={8} {...props}>
            {errors && Object.keys(errors).length > 0 && (
                <Stack spacing={4}
                    alignItems="flex-start"
                    bgColor={"red.100"}
                    borderRadius="md"
                    p={4}
                >
                    <Text color="red">
                        Errors: <br />{Object.keys(errors).map((key, ind) => errors[key] ?? "")?.join(", ")}
                    </Text>
                </Stack>
            )}

            <HStack>
                <Input
                    onChange={handleChange}
                    name="name"
                    colorScheme="red"
                    borderColor="black"
                    variant="flushed"
                    placeholder="Name"
                />
                <Input
                    onChange={handleChange}
                    name="email"
                    colorScheme="red"
                    borderColor="black"
                    variant="flushed"
                    placeholder="Email-ID"
                />
            </HStack>
            <Textarea
                onChange={handleChange}
                name="query"
                colorScheme="red"
                borderColor="black"
                variant="flushed"
                placeholder="Enter you query"
            />
            <Button
                isLoading={loading}
                isDisabled={loading}
                type="submit" py={8} size="lg" colorScheme="red" variant="solid">
                SUBMIT
            </Button>
        </Stack>
        // </form>
    )
}
