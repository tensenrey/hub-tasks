import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

const SecondView = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Не главная страница</h1>
      <Button onClick={() => navigate("/")}>Назад</Button>
    </>
  );
};

export default SecondView;
