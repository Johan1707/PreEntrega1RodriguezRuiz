const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

const Button = (props) => {
    return (
        <button {...props} style={styles.button} />
    )
}

export default Button