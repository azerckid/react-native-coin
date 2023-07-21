import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Text } from "react-native";
import styled from "styled-components/native";
import { history, info } from "../api";
import { Icon } from "../components/Coin";

const Container = styled.ScrollView`
  flex: 1;
`;
const Description = styled.Text`
  color: black;
`;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Icon
          source={{
            uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
          }}
        />
      ),
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery(
    ["coinInfo", id],
    info
  );
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ["coinHistory", id],
    history
  );
  console.log(infoData);
  return (
    <Container>
      <Description>{infoData?.description}</Description>
    </Container>
  );
};
export default Detail;
