import styles from "./E404.module.css"

function E404() {
    return (
        <div className={styles.container}>
            <h1 className={styles.numeroerror}>404</h1>
            <div className={styles.dos}>
                <h3 className={styles.textoerror}>...pagina web no encontrada </h3>
                <h3 className={styles.guion}>_</h3>
            </div>

        </div>
    )
}
export default E404