import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { Container, ScrollContainer } from "@/components/container";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";
import { Pagination } from "@/components/pagination";
import { Typography } from "@/components/typography";

import { url } from "@/constants/url";
import { Order } from "@/types/order";

const POSTS_PER_PAGE = 20;

export default function Index() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${url}?_start=${(page - 1) * POSTS_PER_PAGE}&_end=${
            page * POSTS_PER_PAGE
          }`
        );
        setOrders(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (error) return <Error error={error} />;

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ScrollContainer>
          {orders.map((order) => (
            <Typography
              key={order.id}
              onPress={() => {
                router.push({
                  pathname: "/orders/[id]",
                  params: { id: order.id },
                });
              }}
            >
              {order.title}
            </Typography>
          ))}
        </ScrollContainer>
      )}

      <Pagination
        page={page}
        min={1}
        max={5}
        pageChangeHandler={handlePageChange}
      />
    </Container>
  );
}
