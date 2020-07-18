import styled from "styled-components";
import { Card } from "react-bootstrap";

const PrimaryCard = styled(Card)`
  width: 30rem;
  margin: 10rem auto;
  padding: 2rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  border-radius: 24px 4px;
  font-size: 16px;
`;

export { PrimaryCard };
