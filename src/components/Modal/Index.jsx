import styles from "./Modal.module.css"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/Globalcontext"
import iconoCerrar from "./cerrar.svg"
import Campo from "../Campo/Index"
import ListaOpciones from "../ListaOpciones/Index"
import AreaTexto from "../AreaTexto/Index"
import Boton from "../Boton/Index"



function Modal({ video, cerrarModal }) {

    const {
        dataCategorias,

        categoriaNv, setCategoriaNv,
        tituloNv, setTituloNv,
        descripcionNv, setDescripcionNv,
        id_ytNv, setId_ytNv,
        limpiarInput,
        manejarCambiosInput,
        actualizarVideoInfo

    } = useContext(GlobalContext)

    useEffect(() => {
        const recibirDatosIniciales = () => {
            if (video) {
                manejarCambiosInput("categoria", video.categoria || "");
                manejarCambiosInput("titulo", video.titulo || "");
                manejarCambiosInput("descripcion", video.descripcion || "");
                manejarCambiosInput("id_yt", video.id_yt || "");
            }
        };
        recibirDatosIniciales();
    }, [video]);



    const manejarEnvio = (e) => {
        e.preventDefault();
        let id = video.id;
        let dataCambiar = {
            categoriaNv,
            tituloNv,
            descripcionNv,
            id_ytNv,
            id
        }
        actualizarVideoInfo(dataCambiar);
        cerrarModal();
        limpiarInput();
    };


    return (
        <>
            {video && (
                <div className={styles.overlay}>
                    <dialog className={styles.dialogo} open>
                        <form formMethod="dialog"   >

                            <button formMethod="dialog" className={styles.botonCerrarModal}
                                type="button"
                                onClick={cerrarModal}
                            >
                                <img src={iconoCerrar} alt="cerrar" className={styles.imagen_cerrar} />
                            </button>
                        </form>

                        <div className={styles.tituloPrincipal}>
                            <h3>EDITAR CARD</h3>
                        </div>

                        <form
                            formMethod="dialog"
                            className={styles.formulario}
                            onSubmit={manejarEnvio}
                        >
                            <section className={styles.container}>
                                <label> Titulo </label>
                                <Campo
                                    valor={tituloNv}
                                    actualizarValor={setTituloNv}
                                    placeholder="ingrese el título"
                                    label="titulo"
                                    type="text"
                                    required={true}
                                    minLength="3"
                                />

                                <label> Categoria </label>
                                <ListaOpciones
                                    placeholder="seleccione la categoria"
                                    required
                                    valor={categoriaNv}
                                    actualizarValor={setCategoriaNv}
                                    categoria={dataCategorias}
                                />


                                <label>Id de YouTube</label>
                                <Campo
                                    label="id_yt"
                                    placeholder="ingrese el enlace del video"
                                    type="text"
                                    required={true}
                                    valor={id_ytNv}
                                    actualizarValor={setId_ytNv}
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
                        </form>
                    </dialog>
                </div>
            )}


        </>
    )
}
export default Modal