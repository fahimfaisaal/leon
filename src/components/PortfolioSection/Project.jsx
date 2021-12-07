export default function Project({ image, alt, title, description, link }) {
    return (
       <div className="col-md-4 col-sm-6 portfolio-item">
         {/* eslint-disable-next-line react/jsx-no-target-blank */}
         <a className="hover01" href={link} target="_blank">
           <figure>
             <img className="img-fluid" src={image} alt={alt} />
           </figure>
         </a>
        
         <div className="portfolio-caption">
           <h4>{title}</h4>
           <p>{description}</p>
         </div>
       </div>
    )
}
