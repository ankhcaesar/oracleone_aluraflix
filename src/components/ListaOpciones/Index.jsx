import styles from "./ListaOpciones.module.css"

function ListaOpciones(props) {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <>
            <select
                className={styles.form_option}
                value={props.valor}
                onChange={manejarCambio}
            >
                <option value="" disabled defaultValue="">{props.placeholder}
                </option>

                {props.categoria.map((res) =>
                    <option key={res.id} value={res.titulo}>{res.titulo}</option>
                )}
            </select >
        </>
    )
}
export default ListaOpciones
