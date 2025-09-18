import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";

import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { LoginFormData } from "@/types/userForm";
import { loginUser } from "@/functions/loginUser";
import { loginSchema } from "./schema";
import { useCheckToken } from "@/hooks/useCheckToken";

export default function LoginForm() {
  const router = useRouter();
  const { checkToken } = useCheckToken();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const successfulLogin = await loginUser(data);
    const isAuthenticated = await checkToken();
    if (successfulLogin && isAuthenticated) {
      router.replace("/");
    }
  };

  return (
    <View className="flex gap-4 w-full bg-slate-100 p-4 rounded-2xl">
      <Typography size="lg" centered>
        Login
      </Typography>
      <Typography>Username:</Typography>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input placeholder="username" onChangeText={onChange} value={value} />
        )}
      />
      {errors.username && (
        <Typography type="error" size="sm">
          {errors.username.message}
        </Typography>
      )}

      <Typography>Password:</Typography>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Typography size="sm" type="error">
          {errors.password.message}
        </Typography>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
