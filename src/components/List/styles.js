import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  header {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0px 10px;
    }

    button {
      width: 42px;
      height: 42px;
      background: #3b5bfd;
      border-radius: 17px;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
