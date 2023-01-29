import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDisconnect } from "@thirdweb-dev/react";

function Logout() {
  const navigate = useNavigate();
  const disconnect = useDisconnect();

  useEffect(() => {
    disconnect().then(() => {
      navigate("/");
    });
  }, [disconnect, navigate]);

  return <p>Logging out...</p>;
}

export default Logout;
