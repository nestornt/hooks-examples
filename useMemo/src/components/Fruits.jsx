import React, {useState, useMemo} from 'react'
import { _, debounce } from 'lodash'

export const Fruits = React.memo(function() {

    const fruites = ['apple', 'banana', 'blackberries', 'blueberries', 'strawberry', 'pineapple']
    const [text, setText] = useState('')
    const [query, setQuery] = useState('')

    // useMemo will always use the same instance of the function instead creating one every time we call it
    // matched will be only called when "query" state changes
    const matched = useMemo(() => {
      console.log('created', query) 
      return fruites.filter(v => v.includes(query))
    }, [query])
    
    const setDebouncedQuery = debounce(value => {
      setQuery(value)
    }, 900)

    //useMemo(() => { return debounce ...}, [setQuery, count])

    const onType = e => {
      const value = e.target.value
      setText(value)
      setDebouncedQuery(value)
    }

    console.log('updated', text)

    return (
      <>
        <input value={text} onChange={onType} />
        <p>{matched.join("\t")}</p>
      </>
    )
})
