import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export const GlobalContext = createContext();
function GlobalContextProvider({ children }) {


    //* Popup */
    const [popUp, setPopUp] = useState({ show: false, mensaje: "", tipoMensaje: "" });

    /** estado de botones home y nuevo video */
    const [botonHome, setBotonHome] = useState(true);
    const [botonNuevoVideo, setBotonNuevoVideo] = useState(false);

    /**logos */
    const logo1 = "logo_aluraflix";
    const logo2 = "jconiv";

    /**Url del api */
    const url = "http://localhost:3000";


    /**Importar destacados */
    const [datadestacados, setDatadestacados] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${url}/destacados`);
            const data = await res.json();
            setDatadestacados(data);
        };
        getData();
    }, []);


    /*Importar categorias */
    const [dataCategorias, setDataCategorias] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${url}/categorias`);
            const data = await res.json();
            setDataCategorias(data);
        };
        getData();
    }, []);


    /*importar videos */
    const [dataVideos, setDataVideos] = useState([]);
    useEffect(() => {
        const getDataV = async () => {
            const res = await fetch(`${url}/videos`);
            const data = await res.json();
            setDataVideos(data);
        };
        getDataV();
    }, []);


    /** manejar nuevos datos  */
    const [categoriaNv, setCategoriaNv] = useState("");
    const [tituloNv, setTituloNv] = useState("");
    const [descripcionNv, setDescripcionNv] = useState("");
    const [id_ytNv, setId_ytNv] = useState("");


    /** Manejar nuevos ingresos */
    const manejarCambiosInput = (nombre, valor) => {
        switch (nombre) {
            case "titulo":
                setTituloNv(valor);
                
                break;
            case "categoria":
                setCategoriaNv(valor);
                
                break;

            case "id_yt":
                setId_ytNv(valor);
                
                break;
            case "descripcion":
                setDescripcionNv(valor);
                
                break;

            default:
                break;
        }
    };


    /** Actualizar datos y videos */
    const actualizarVideoInfo = (data) => {
        const { categoriaNv, tituloNv, descripcionNv, id_ytNv } = data;

        const ActualizarVideo = {
            Categoria: categoriaNv,
            titulo: tituloNv,
            descripcion: descripcionNv,
            id_yt: id_ytNv,
        };

        fetch(
            `${url}/videos/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(ActualizarVideo),
            }
        )
            .then((result) => result.json())
            .then((updatedVideoFromServer) => {
                const newInfo = videos.map((video) => {
                    if (video.id === id) {
                        return updatedVideoFromServer;
                    }
                    return video;
                });
                setVideos(newInfo);
            })
            .catch((err) => {
                console.error("Error: ", err);
            });
    };



    /** crea nuevo video */
    const crearVideo = (data) => {
        let idNueva = uuidv4();

        const dataAEnviar = {
            id: idNueva,
            categoria: data.categoriaNv,
            titulo: data.tituloNv,
            descripcion: data.descripcionNv,
            id_yt: data.id_ytNv,
        };

        fetch(`${url}/videos`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(dataAEnviar),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al crear el video");
                }
                return res.json();
            })
            .then((nuevoVideo) => {
                ([...dataVideos, nuevoVideo]);
                setPopUp({
                    show: true,
                    mensaje: `Se ha agregado con exito el video: ${nuevoVideo.titulo}`,
                    tipoMensaje: "check"
                });
                setTimeout(() => {
                    setPopUp({
                        show: false,
                        mensaje: "",
                        tipoMensaje: ""
                    });
                }, 3000);
            })

            .catch((err) => {
                console.error("Error:", err);
                setPopUp({
                    show: true,
                    mensaje: `Hubo un problema al agregar el video: ${err}`,
                    tipoMensaje: "error"
                });
                setTimeout(() => {
                    setPopUp({
                        show: false,
                        mensaje: "",
                        tipoMensaje: ""
                    });
                }, 3000);
            });
    };

    /** borrarVideo */
    const borrarVideo = (id) => {
        fetch(`${url}/videos/${id}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al eliminar el video");
                }
                return res.json();
            })
            .then(() => {
                const newVideos = dataVideos.filter((video) => video.id !== id);
                setDataVideos(newVideos);
                setPopUp({
                    show: true,
                    mensaje: "Video Eliminado con exito.",
                    tipoMensaje: "check"
                });
                setTimeout(() => {
                    setPopUp({
                        show: false,
                        mensaje: "",
                        tipoMensaje: ""
                    });
                }, 2000);
            })
            .catch((err) => {
                console.error("Error: ", err);
                setPopUp({
                    show: true,
                    mensaje: `Hubo un problema al eliminar el video: ${err}`,
                    tipoMensaje: "error"
                });
                setTimeout(() => {
                    setPopUp({
                        show: false,
                        mensaje: "",
                        tipoMensaje: ""
                    });
                }, 2000);
            });
    };


    /**limpiar inputs */
    const limpiarInput = () => {
        setTituloNv("");
        setCategoriaNv("");
        setDescripcionNv("");
        setId_ytNv("");
    };







    return (
        <GlobalContext.Provider
            value={{
                logo1, logo2,
                botonHome, setBotonHome,
                botonNuevoVideo, setBotonNuevoVideo,

                datadestacados, setDatadestacados,
                dataCategorias, setDataCategorias,
                dataVideos, setDataVideos,

                crearVideo,
                borrarVideo,
                limpiarInput,

                popUp, setPopUp,

                actualizarVideoInfo,
                manejarCambiosInput,

                categoriaNv, setCategoriaNv,
                tituloNv, setTituloNv,
                descripcionNv, setDescripcionNv,
                id_ytNv, setId_ytNv

            }} >
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;