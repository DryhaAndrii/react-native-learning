import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

export function Input({
  onChangeText,
  value,
  secureTextEntry,
  placeholder,
}: Props) {
  const textInputClass = "text-xl p-4 bg-slate-200 rounded-2xl outline-none";
  return (
    <TextInput
      className={textInputClass}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
