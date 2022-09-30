const styles = {
    title: {
        marginBottom: '30px'
    }
}

const ItemListContainer = ({ greeting }) => {
    return (
        <h1 style={styles.title}>{greeting}</h1>
    )
}

export default ItemListContainer