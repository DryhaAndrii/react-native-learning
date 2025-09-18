import axios from "axios";
import { useRouter } from "expo-router";
import { AnimatePresence } from "moti";
import { useEffect, useState } from "react";

import { Container, ScrollContainer } from "@/components/container";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";
import { Pagination } from "@/components/pagination";
import { Typography } from "@/components/typography";

import AnimatedContainer from "@/components/animatedContainer";
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
        setOrders([]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await axios.get(
          `${url}?_start=${(page - 1) * POSTS_PER_PAGE}&_end=${
            page * POSTS_PER_PAGE
          }`
        );
        setOrders(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (error) return <Error error={error} />;

  return (
    <>
      {loading && <Loading />}
      <Container>
        <ScrollContainer>
          <AnimatePresence>
            {orders.map((order, index) => (
              <AnimatedContainer key={index} delay={index * 50}>
                <Typography
                  onPress={() => {
                    router.push({
                      pathname: "/orders/[id]",
                      params: { id: order.id },
                    });
                  }}
                >
                  {order.title}
                </Typography>
              </AnimatedContainer>
            ))}
          </AnimatePresence>
        </ScrollContainer>

        <Pagination
          page={page}
          min={1}
          max={5}
          pageChangeHandler={handlePageChange}
        />
      </Container>
    </>
  );
}
