import "./Header.css";

const descriptiveAdjs = ["Core", "Fundamental", "Crucial"];

function getRandomAdjective(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptiveAdjs[getRandomAdjective(3)]} React concepts you will need
        for almost any app you are going to build!
      </p>
    </header>
  );
}
