import { Button, Card, Divider, Grid, Input, Text } from "@geist-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginComponent(props) {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function handlerFactory(setValFn) {
    return (e) => setValFn(e.target.value);
  }

  function handleRegister() {
    fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: registerEmail,
        phone_number: phone,
        password: registerPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err == null) {
          console.log("Register success: ", data);
          props.setUser(data);
          navigate("/reservations");
        } else {
          console.error("Register error: ", data.err.message);
        }
      })
      .catch((err) => {
        console.error("Register error: ", err);
      });
  }

  // Committing an atrocity here
  function handleLogin() {
    fetch("http://localhost:8080/api/v1/users", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        for (const user of data) {
          if (user.email === loginEmail && user.password === loginPassword) {
            console.log("Login success: ", data);
            props.setUser(user);
            navigate("/listing");
          }
        }
        console.error("Invalid email/password combination");
      })
      .catch((err) => {
        console.error("Login error: ", err);
      });
  }

  return (
    <div class='wrapper'>
      <Grid.Container gap={3} justify='center'>
        <Grid xs={8}>
          <Card shadow width='100%'>
            <Text h4>Register</Text>
            <Divider />
            <Grid.Container gap={3} justify='center'>
              <Grid xs={8}>
                <Input
                  value={firstName}
                  onChange={handlerFactory(setFirstName)}
                  placeholder='First name'
                />
              </Grid>
              <Grid xs={8}>
                <Input
                  value={lastName}
                  onChange={handlerFactory(setLastName)}
                  placeholder='Last name'
                />
              </Grid>
              <Grid xs={8}>
                <Input
                  value={registerEmail}
                  onChange={handlerFactory(setRegisterEmail)}
                  placeholder='Email'
                />
              </Grid>
              <Grid xs={8}>
                <Input
                  value={phone}
                  onChange={handlerFactory(setPhone)}
                  placeholder='Phone number'
                />
              </Grid>
              <Grid xs={8}>
                <Input.Password
                  value={registerPassword}
                  onChange={handlerFactory(setRegisterPassword)}
                  placeholder='Password'
                />
              </Grid>
              <Divider />
              <Grid xs={8}>
                <Button onClick={handleRegister}>Sign up</Button>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>
        <Grid xs={8}>
          <Card shadow width='100%'>
            <Text h4>Login</Text>
            <Divider />
            <Grid.Container gap={3} justify='center'>
              <Grid xs={8}>
                <Input
                  value={loginEmail}
                  onChange={handlerFactory(setLoginEmail)}
                  placeholder='Email'
                />
              </Grid>
              <Grid xs={8}>
                <Input.Password
                  value={loginPassword}
                  onChange={handlerFactory(setLoginPassword)}
                  placeholder='Password'
                />
              </Grid>
              <Grid xs={8}>
                <Button onClick={handleLogin}>Sign in</Button>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default LoginComponent;
