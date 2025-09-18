import { useState } from "react";
import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { ComponentContainer } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { KeyboardAwareContainer } from "@/components/ui/keyboardAwareContainer";
import { Typography } from "@/components/ui/typography";

import { useUser } from "@/hooks/useUser";
import { hideLoading, showLoading } from "@/redux/ducks/loading";
import { useFocusEffect } from "expo-router";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const user = useUser();
  const dispatch = useDispatch();

  useFocusEffect(() => {
    setHide(false);
    return () => {
      setHide(true);
    };
  });

  const handleLogin = async () => {
    try {
      dispatch(showLoading());
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.message) {
        alert(`Error: ${error.message}`);
      }
      console.log("Login error:", error);
    } finally {
      dispatch(hideLoading());
    }
  };

  const handleSignUp = async () => {
    try {
      dispatch(showLoading());
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log("Signup Error:", error);
      if (error.message) {
        alert(`Error: ${error.message}`);
      }
    } finally {
      dispatch(hideLoading());
    }
  };

  if (user) {
    return (
      <KeyboardAwareContainer hide={hide} direction="left">
        <Typography size="lg">Logged in as: {user.email}</Typography>
        <ComponentContainer>
          <Button title="Logout" onPress={() => auth.signOut()} />
        </ComponentContainer>
      </KeyboardAwareContainer>
    );
  }

  return (
    <KeyboardAwareContainer hide={hide} direction="left">
      <Typography>Email:</Typography>
      <ComponentContainer>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </ComponentContainer>

      <Typography>Password:</Typography>
      <ComponentContainer>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </ComponentContainer>

      <ComponentContainer>
        <Button title="Login" onPress={handleLogin} />
      </ComponentContainer>

      <ComponentContainer>
        <Button title="Register" onPress={handleSignUp} />
      </ComponentContainer>
    </KeyboardAwareContainer>
  );
}
