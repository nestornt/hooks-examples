import {useState, useMemo} from 'react'
import { _, debounce } from 'lodash'

export const Fruits = () => {

    const fruites = ['apple', 'banana', 'blackberries', 'blueberries', 'strawberry', 'pineapple']
    const [text, setText] = useState('')
    const [query, setQuery] = useState('')

    // const matched = fruites.filter(v => v.includes(query))
    const matched = useMemo(() => {
      console.log('created', query)  
      return fruites.filter(v => v.includes(query))
    }, [query])
    
    // useMemo will always use the same instance of the function instead creating one every time we call it
    const setDebouncedQuery = useMemo(() => {
      return debounce(t => {
        console.log('clicked')
        setQuery(t)
      }, 300)
    }, [setQuery])

    const onType = e => {
      const v = e.target.value
      setText(v)
      setDebouncedQuery(v)
    }
    
    console.log('updated', text)
    return (
      <>
        <input value={text} onChange={onType} />
        <p>{matched.join("\t")}</p>
      </>
    )
}
