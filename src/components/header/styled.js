import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 32px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-image: linear-gradient(
      to right,
      #77a1d3 0%,
      #79cbca 51%,
      #77a1d3 100%
    );
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    display: block;

    span {
      text-align: center;
      color: white;
    }

    &:hover {
      background-position: right center;
      color: #fff;
      text-decoration: none;
    }
  }
`;
