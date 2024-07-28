import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export const GlobalContext = createContext();
function GlobalContextProvider({ children }) {

    /** estado de botones home y nuevo video */
    const [botonHome, setBotonHome] = useState(true);
    const [botonNuevoVideo, setBotonNuevoVideo] = useState(false);

    /**logos */
    const logo1 = "logo_aluraflix";
    const logo2 = "jconiv";

    /**Url del api */
    const url = "http://localhost:3001";


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
            })

            .catch((err) => {
                console.error("Error:", err);
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
                const newVideos = videos.filter((video) => video.id !== id);
                setDataVideos(newVideos);
            })
            .catch((err) => {
                console.error("Error: ", err);
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