import styles from "./Formulario.module.css"

import Campo from "../Campo/Index"
import ListaOpciones from "../ListaOpciones/Index"
import AreaTexto from "../AreaTexto/Index"
import Boton from "../Boton/Index"

import { useContext } from "react"
import { GlobalContext } from "../../context/Globalcontext"

function Formulario() {

    const { crearVideo,
        dataCategorias,
        categoriaNv, setCategoriaNv,
        tituloNv, setTituloNv,
        descripcionNv, setDescripcionNv,
        id_ytNv, setId_ytNv,
        limpiarInput

    } = useContext(GlobalContext)

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejarEnvio")
        let datosAEnviar = {
            tituloNv,
            id_ytNv,
            descripcionNv,
            categoriaNv
        }
        crearVideo(datosAEnviar);
        limpiarInput();
    }

    return (
        <form
            className={styles.formulario}
            onSubmit={manejarEnvio}

        >
            <section className={styles.divisor}>
                <label> Titulo </label>
                <Campo
                    label="titulo"
                    placeholder="ingrese el título"
                    type="text"
                    required={true}
                    minLength="3"
                    valor={tituloNv}
                    actualizarValor={setTituloNv}
                />

                <label>Descripcion</label>
                <AreaTexto
                    label="Descripcion"
                    placeholder="¿De qué se trata este vídeo?"
                    type="textArea"
                    required={true}
                    valor={descripcionNv}
                    actualizarValor={setDescripcionNv}

                />
                <div className={styles.botones}>
                    <Boton
                        type="submit"
                        label="GUARDAR"
                    />
                    <Boton
                        label="LIMPIAR"
                        type="button"
                        onClick={limpiarInput}

                    />
                </div>
            </section>

            <section className={styles.divisor}>
                <label> Categoria </label>
                <ListaOpciones
                    placeholder="seleccione la categoria"
                    required
                    valor={categoriaNv}
                    actualizarValor={setCategoriaNv}
                    categoria={dataCategorias}
                />

                <label>Identidicador de YouTube</label>
                <Campo
                    label="Id de YouTube"
                    placeholder="ingrese ed Id de YouTube"
                    type="text"
                    required={true}
                    valor={id_ytNv}
                    actualizarValor={setId_ytNv}
                />
            </section>
        </form>
    )



}

export default Formulario