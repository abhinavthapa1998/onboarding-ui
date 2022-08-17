import Cards from "./components/Cards";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import Title from "./components/Title";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Logo - Eden</h1>
      <ProgressBar/>
      <Title/>
      <Form/>
      <Cards/>
    <button>Button</button>
    </div>
  );
}
