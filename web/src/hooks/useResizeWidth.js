import { useEffect, useState } from "react"
import debounce from "../utils/debounce"

const getWidth = () => window.innerWidth

export default function useResizeWidth() {
  const [width, setWidth] = useState(null)
  const handleSetWidth = () => setWidth(getWidth())
  useEffect(() => {
    handleSetWidth()
    const handler = debounce(handleSetWidth, 200)

    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])
  return { width }
}
