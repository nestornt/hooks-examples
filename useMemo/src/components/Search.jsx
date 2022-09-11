import React, { useState, useMemo, useEffect } from 'react'
const fruites = ['apple', 'banana', 'blackberries', 'blueberries', 'strawberry', 'pineapple']

const Search = React.memo(function() {
    const [text, setText] = useState('')
    const [query, setQuery] = useState('')
    
    // useMemo will memorize the returned value, also it gets called just when query state is changed
    const matched = useMemo(() => {
      console.log('created', query)  
      return fruites.filter(v => v.includes(query))
    }, [query])
    
    const onType = e => { setText(e.target.value) }
    const onSearch = () => { setQuery(text) }
    
    console.log('updated', text)
    return (
      <>
        <input onChange={onType} />
        <button onClick={onSearch}>Search</button>
        <p>{matched.join("\t")}</p>
      </>
    )
})

export default Search