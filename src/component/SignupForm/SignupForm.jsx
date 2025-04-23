import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

// import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../../services/userService";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"; 
import bgLogninImage from "../Assets/BG-Login.jpg";

const SignupForm = () => {

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  const handleClick = () => { };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("error");

  const handleValidation = () => {
    const validations = [
      { condition: !username, message: "Tên đăng nhập không được để trống!" },
      { condition: !fullname, message: "Họ tên không được để trống!" },
      { condition: !isValidGmail(username), message: "Tên đăng nhập phải đúng định dạng mail!" },
      { condition: !password, message: "Mật khẩu không được để trống!" },
      { condition: !rePassword, message: "Nhập lại mật khẩu không được để trống!" },
      { condition: password !== rePassword, message: "Mật khẩu và nhập lại mật khẩu không khớp!" },
    ];

    for (let validation of validations) {
      if (validation.condition) {
        setSnackBarMessage(validation.message);
        setSeverity("error");
        setSnackBarOpen(true);
        return false;
      }
    }
    return true;
  };

  const isValidGmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!handleValidation()) {
      return;
    }
    
    const newUser = {
      username: username,
      password: password,
      fullName: fullname,
      email: username,
    };

    setLoading(true);

    try {
      await createUser(newUser);
      setSnackBarMessage("Đăng ký thành công! Vui lòng check mail để xác nhận");
      setSeverity("success");
      setSnackBarOpen(true);
      setUsername("");
      setPassword("");
      setFullname("");
      setRePassword("");
    } catch (error) {
      const errorMessage = error.message || "Đăng ký không thành công";
      setSnackBarMessage(errorMessage);
      setSeverity("error");
      setSnackBarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Snackbar
        open={snackBarOpen}
        onClose={handleCloseSnackBar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="250vh"
        bgcolor={"#f0f2f5"}
        sx={{
          backgroundImage: `url(${bgLogninImage})`,  // Sử dụng biến đã import cho background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}

      >
        <Card
          sx={{
            minWidth: 400,
            maxWidth: 500,
            boxShadow: 4,
            borderRadius: 4,
            padding: 4,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Đăng ký
            </Typography>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
              marginBottom="1rem"
              onSubmit={handleSubmit}
            >
              <TextField
                label="Họ tên"
                variant="outlined"
                fullWidth
                margin="normal"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Mật khẩu"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="Nhập lại mật khẩu"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{
                  mt: "15px",
                  mb: "25px"
                }}
              >
                <span style={{alignItems: "center"}}>{loading ? <CircularProgress /> : "Đăng ký"}</span>
              </Button>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="20px"
              width="100%"
              marginBottom="20px" // Khoảng cách dưới
            >
              {/* Đăng nhập bằng Google */}
              <Button
                type="button"
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleClick}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "", // Màu Google
                }}
              >
                <FaGoogle size={30} color="white" />
              </Button>

              {/* Đăng nhập bằng Facebook */}
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClick}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#1877F2", // Màu Facebook
                }}
              >
                <FaFacebook size={30} color="white" />
              </Button>

              {/* Đăng nhập bằng GitHub */}
              <Button
                type="button"
                variant="contained"
                color="default"
                size="large"
                onClick={handleClick}
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#333", // Màu GitHub
                }}
              >
                <FaGithub size={30} color="white" />
              </Button>
            </Box>

            <div className="register-link">
              <p>
                Bạn đã có tài khoản?{" "}
                <Link to="/login">
                  <span  style={{
                      color: "blue",
                      textDecoration: "underline",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    >Đăng nhập</span>
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SignupForm;
