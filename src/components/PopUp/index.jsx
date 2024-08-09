import styles from "./PopUp.module.css"
import iconoError from "../../../public/img/iconos/cerrar.png"
import iconoCheck from "../../../public/img/iconos/check.svg"

function PopUp({ mensaje, tipoMensaje }) {
  const icon = tipoMensaje === "error" ? iconoError : iconoCheck;

  return (
    <div className={styles.container}>
      <img src={icon} alt={`icono de ${tipoMensaje}`} style={{ color: "inherit" }} />
      <p style={{ textAlign: "center" }}>{mensaje}</p>
    </div>
  )
}

export default PopUp
