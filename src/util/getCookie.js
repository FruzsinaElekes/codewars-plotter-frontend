export default function getCookie(name) {
    const cookies = document.cookie
    const listCookies = cookies.split('; ')
    for (const cookie of listCookies){
        if (cookie.startsWith(`${name}=`)){
            return cookie.substr(name.length + 1, cookie.indexOf(',') - (name.length + 1))
        }
    }
    return ""
}