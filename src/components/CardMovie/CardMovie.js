

const CardMovie = (props) => {
    console.log('CardMovie props: ', props);
    return (
        <main style={{ padding: "1rem 0" }}>
            <h1>CardMovie</h1>
            {props.children}
        </main>
    )
}

export default CardMovie;