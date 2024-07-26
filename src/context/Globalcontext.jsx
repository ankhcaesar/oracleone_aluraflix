import { createContext, useEffect, useState } from "react";


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

    /**  no es necesario
    const valoresIniciales =()=>{
        const videoUrl = `https://www.youtube.com/embed/${data.id_yt}`;
        const imagenS= `https://img.youtube.com/vi/${data.id_yt}/hqdefault.jpg.`;
        const imagenXl= `https://img.youtube.com/vi/${data.id_yt}/maxresdefault.jpg.`;
    
    }
    
     */


    /** crea nuevo video */
    const crearVideo = (data) => {
        let idNueva = uuid();

        const dataAEnviar = {
            id: idNueva,
            categoria: data.categoriaNv,
            titulo: data.tituloNv,
            descripcion: data.descripcionNv,
            url: data.urlNv,
            id_yt: data.id_ytNV,
            imagen: data.imagenNv
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
                setVideos([...videos, nuevoVideo]);
            })

            .catch((err) => {
                console.error("Error:", err);
            });
    };

    return (
        <GlobalContext.Provider
            value={{
                logo1, logo2,
                botonHome, setBotonHome,
                botonNuevoVideo, setBotonNuevoVideo,
                datadestacados, setDatadestacados,
                dataCategorias, setDataCategorias,
                dataVideos, setDataVideos
                

            }} >
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;