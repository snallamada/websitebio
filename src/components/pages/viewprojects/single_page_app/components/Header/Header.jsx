import reactImg from '../../assets/react-core-concepts.png';
import '../Header/Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img style={{width:300, height:300, display:'block', marginLeft:"auto", marginRight:"auto"}} src={reactImg} alt="Stylized atom" className='head_img'/>
      <h1>Single Page App - React</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}