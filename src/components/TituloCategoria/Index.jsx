import styles from "./TituloCategoria.module.css"

function TituloCategoria(categoria) {

    
    return (
        <section className={styles.container}>
            <div className={styles.titulos} style={{ backgroundColor: `rgb(${categoria.color})` }} >
                <h2 className={styles.titulo_categoria} >{categoria.titulo}</h2>
            </div>
        </section>
    )
}
export default TituloCategoria