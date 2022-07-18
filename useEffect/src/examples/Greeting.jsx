import {useState, useEffect} from 'react'

function Greeting() {
    const [width, setWidth] = useState(0)

    /*
        The useEffect hook is a good fit here. After the component is mounted, we can listen
        for a resize event provided by the window object.
    */
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        // We invoke handleResize at the mount to get the initial window size.
        handleResize()

        // In order to prevent a memory leak, we return a destroy function from the useEffect
        // callback where the registered event listener is removed when the component is unmounted.
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])
    
    console.log('Screen width: ', width)

    return <h1>{ width > 1900 ? "Hello world from big screen" : width > 800 ? "Hello World" : "Hello" }</h1>
}

export default Greeting