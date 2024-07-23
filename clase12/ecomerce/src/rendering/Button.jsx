

function Button({type, label}) {
  return (
    <button className={type === "primary" ? "btn btn-primary" : "btn btn-danger"}>{label}</button>
  )
}

export default Button
