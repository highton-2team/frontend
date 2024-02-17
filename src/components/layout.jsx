import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Aside from "./common/Aside";

const Wrapper = styled.div`
  display: flex;
  width: 100vh;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-left: 100px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  flex-direction: row;
  background-color: white;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin: 16px, 16px;
  &:hover {
    opacity: 0.7;
  }
`;

const Home = styled.div`
  margin-right: auto;
`;

const Text = styled.text`
  font-size: 12px;
  color: black;
  margin-right: 32px;
`;

const LayoutStyle = styled.div``;

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Navbar>
          <Menu>
            <Home>
              <Link to="/">
                <Text>Home</Text>
              </Link>
            </Home>
            <MenuItem>
              <Link to="/calendar">
                <Text>달력</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/mentoring">
                <Text>멘토링</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">
                <Text>로그인</Text>
              </Link>
            </MenuItem>
          </Menu>
        </Navbar>
        <Aside />
        <LayoutStyle>
          <Outlet />
        </LayoutStyle>
      </Wrapper>
    </>
  );
}
