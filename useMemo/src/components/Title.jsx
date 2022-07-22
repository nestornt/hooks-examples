import {useMemo} from 'react'

export default function Title({text,flag}) {
    const found = useMemo(() => {
        console.log('created')
        return matchTextInArray(text)
    }, [text])
    console.log('updated', found)
  return (
    <div>Title</div>
  )
}
