import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

const MainView = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Главная страница</h1>
      <Button onClick={() => navigate("/second")}>Вперед</Button>
    </>
  );
};

export default MainView;
