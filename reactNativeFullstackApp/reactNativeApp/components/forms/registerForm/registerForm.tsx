import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { RegisterFormData } from "@/types/registerForm";
import { registerUser } from "@/functions/registerUser";
import { registerSchema } from "./schema";

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await registerUser(data);
  };

  return (
    <View className="flex gap-4 w-full bg-slate-100 p-4 rounded-2xl">
      <Typography size="lg" centered>
        Registration
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

      <Typography>Confirm Password:</Typography>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.confirmPassword && (
        <Typography size="sm" type="error">
          {errors.confirmPassword.message}
        </Typography>
      )}

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
