
export const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + "=" + value + "; expires=" + expires
}

export const getCookie = (name: string) => {
    const value = "; " + document.cookie
    const parts = value.split("; " + name + "=")
    if (parts.length === 2) return parts.pop()?.split(";").shift()
}

export const removeCookie = (name: string) => {
    document.cookie = name + "=; max-age=-99999999;"
}