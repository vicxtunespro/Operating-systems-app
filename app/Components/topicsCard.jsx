export default function TopicsCard({title, description, image}) {
    return(
        <div className="card">
            <img 
            src={image} 
            className="card-image"
            alt="" 
            />
            <h3 className="topic">{title}</h3>
            <p className="description">{description}</p>
            <button class="btn">Read Now</button>
        </div>
    )
}