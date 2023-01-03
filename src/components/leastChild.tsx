
type leastProps = {
    head: string
    body: string
}

export const LeastChild = ({head, body}: leastProps) => {
  return (
    <div className='grndCh'>
        <h3 className='justCap'>{head}</h3>
        <h4 className='bolder'>{body}</h4>
    </div>
  )
}
