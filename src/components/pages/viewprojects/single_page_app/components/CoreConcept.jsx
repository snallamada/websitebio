import '../../single_page_app/style.css'
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title}  style={{display:'block', marginLeft:"auto", marginRight:"auto"}} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}