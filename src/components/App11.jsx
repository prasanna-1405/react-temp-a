import { useNavigate } from "react-router-dom";

export default function App11() {
  const navigate = useNavigate(); 

  return (
    <div>
      <h3>App11</h3>
      <button onClick={() => navigate("/app5")}>Go to App5</button>
    </div>
  );
}
