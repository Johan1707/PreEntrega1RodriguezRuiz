import '../styles/bubbleAlert.css'

const getNumber = n => {
    if(!n) { return ' ' }
    return n > 9 ? '9+' : n
}

const BubbleAlert = (props) => {
    const { value } = props

    return (
        <span className='bubbleAlert'>
            {getNumber(value)}
        </span>
    )
}

export default BubbleAlert