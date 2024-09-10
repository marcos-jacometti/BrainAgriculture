import React from "react";
import { Container, Content, Picture, User } from "./styles";
import ThemeBtn from "../../specific/theme";
import img from "../../../assets/images/profilePicture.jpeg";

const mockUsers = [
  {
    id: 1,
    name: "Marcos Jacometti",
    image: img
  },
];

export default function UserFeature() {
  return (
    <Container>
        <Content>
            {mockUsers.map((user) => (
                <User key={user.id}>
                    <Picture $background={user.image} />
                    <span>{user.name}</span>
                </User>
            ))}
            <ThemeBtn />
      </Content>
    </Container>
  );
}
