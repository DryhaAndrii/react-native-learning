import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { Container, ScrollContainer } from "@/components/container";
import { Error } from "@/components/error";
import { Loading } from "@/components/loading";
import { Typography } from "@/components/typography";

import AnimatedContainer from "@/components/animatedContainer";
import { url } from "@/constants/url";
import { Order } from "@/types/order";

export default function OrderDetail() {
  const { id } = useLocalSearchParams();

  const [order, setOrder] = useState<Order>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${url}?id=${id}`);
        setOrder(res.data[0]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <Container>
      <ScrollContainer verticalCenter>
        <AnimatedContainer delay={0}>
          <Typography>Order ID: {id}</Typography>
        </AnimatedContainer>
        <AnimatedContainer delay={100}>
          <Typography>Order Title: {order?.title}</Typography>
        </AnimatedContainer>
        <AnimatedContainer delay={200}>
          <Typography>Order Body: {order?.body}</Typography>
        </AnimatedContainer>
      </ScrollContainer>
    </Container>
  );
}
