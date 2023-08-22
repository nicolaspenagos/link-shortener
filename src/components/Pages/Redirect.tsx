import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RedirectPage: React.FC = () => {
  const { backHalf } = useParams();
  const navigate = useNavigate();
  console.log(backHalf);
  useEffect(() => {
    window.location.href = "https://google.com";
  }, []);

  return (
    <>
      <h1>TESTTTTT</h1>
    </>
  );
};

export default RedirectPage;
