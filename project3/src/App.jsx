import Card from "./components/Card";
import "./App.css";

const App = () => {
  let obj = {
    name: "Gopal Dawar",
    line: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque unde vero harum iusto nesciunt maiores assumenda voluptatem repellat eius minus.",
  };
  return (
    <div className="om">
      <Card obje={obj} />
      <Card obje={obj} />
      <Card obje={obj} />
      <Card obje={obj} />
      <Card obje={obj} />
      <Card obje={obj} />
    </div>
  );
};

export default App;
