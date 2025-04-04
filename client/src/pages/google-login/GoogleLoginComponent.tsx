import { Box, useToast } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function GoogleLoginComponent() {
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <Box data-testid="google-login">
      <GoogleLogin
        theme="filled_black"
        type="icon"
        onSuccess={async ({ credential }) => {
          localStorage.setItem(
            "googleCredential",
            credential !== undefined ? credential : ""
          );
          const res = await fetch(`/api/newuser`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${credential}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          const uid = await res.text();
          localStorage.setItem("authenticatedId", uid);
          navigate(`/portfolio/${uid}`);
        }}
        onError={() => {
          toast({
            title: "Error",
            description: "Login failed",
            status: "error",
            isClosable: true,
            duration: 3000,
            position: "top",
          });
        }}
      />
    </Box>
  );
}

export default GoogleLoginComponent;
