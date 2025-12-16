import { useEffect, useState } from "react"

export function useGetCategories() {
    const url = `http://localhost:1337/api/categories?populate=*`
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState ("")

    useEffect(() => {
(async () => {
    try {
        const res = await fetch(url)
        const json = await res.json()
        setResult(json.data)
        setLoading(false)
    } catch (error:any) {
        setError(error)
        setLoading(false)

    }
})()

},[url])

return { loading, result, error}

}