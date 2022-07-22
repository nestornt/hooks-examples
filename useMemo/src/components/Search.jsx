import { useState, useMemo, useEffect } from 'react'
const fruites = ['apple', 'banana', 'blackberries', 'blueberries', 'strawberry', 'pineapple']

export default function Search() {
    const [text, setText] = useState('')
    const [query, setQuery] = useState('')
    // const matched = fruites.filter(v => v.includes(query))
    const matched = useMemo(() => {
      console.log('created', query)  
      return fruites.filter(v => v.includes(query))
    }, [query])
    
    const onType = e => { setText(e.target.value) }
    const onSearch = () => { setQuery(text) }
    
    console.log('updated', text)
    return (
      <>
        <input value={text} onChange={onType} />
        <button onClick={onSearch}>Search</button>
        <p>{matched.join("\t")}</p>
      </>
    )
}