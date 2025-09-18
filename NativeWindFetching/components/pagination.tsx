import { View } from "react-native";

import { Button } from "./button";

interface Props {
  min: number;
  max: number;
  pageChangeHandler: (page: number) => void;
  page: number;
}

function getPageNumber(
  min: number,
  max: number,
  currentPage: number,
  interval = 1
) {
  const pages = new Set<number>();

  pages.add(min);
  pages.add(max);

  for (let i = currentPage - interval; i <= currentPage + interval; i++) {
    if (i > min && i < max) {
      pages.add(i);
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

export function Pagination({ min, max, pageChangeHandler, page }: Props) {
  const pages = getPageNumber(min, max, page);

  return (
    <View className="flex-row flex-wrap items-center justify-center w-[100%] gap-2">
      {pages.map((item) => (
        <Button
          key={item}
          onPress={() => {
            pageChangeHandler(item);
          }}
          type={item === page ? "highlighted" : "default"}
          title={String(item)}
        />
      ))}
    </View>
  );
}
