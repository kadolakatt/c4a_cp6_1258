function ProyectListItem (props) {
    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ props.nombre }</h5>
                <small>{ props.fecha }</small>
              </div>
              <p className="mb-1">{ props.fecha }</p>
              <small>{ props.director }</small>
              <button className="btn btn-danger btn-sm float-end mx-lg-1">Eliminar</button>
              <button className="btn btn-success btn-sm float-end">Editar</button>
            </a>
    );
}

export default ProyectListItem;