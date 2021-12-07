export default function Info({iconClass, title, description}) {
    return (
        <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="square">
                <i className={iconClass} aria-hidden="true"></i>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
