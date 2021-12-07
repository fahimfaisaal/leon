export default function Service({ iconClass, title, description}) {
    return (
        <div class="service-text">
            <i class={iconClass} aria-hidden="true"></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
   ) 
}