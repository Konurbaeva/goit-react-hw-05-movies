

const CardMovie = (props) => {
    console.log('CardMovie props: ', props);
    return (
        <main style={{ padding: "1rem 0" }}>

            {props.children}
        </main>
    )
}

export default CardMovie;