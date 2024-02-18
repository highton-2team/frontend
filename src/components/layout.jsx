import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Aside from "./common/Aside";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: 100px;
  background-color: white;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Menu = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  flex-direction: row;
  background-color: white;
  width: 100%;
  padding: 16px 16px;
  gap: 30px;
  border-bottom: 1px solid #d5d7dd;
  z-index: 3;
`;

const MenuItem = styled.div`
  margin: 16px, 16px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Home = styled.div`
  cursor: pointer;
  margin-right: auto;
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const Text = styled.text`
  font-size: 12px;
  color: black;
`;

const LayoutStyle = styled.div`
  overflow: hidden;
`;

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Navbar>
          <Menu>
            <Home>
              <Link to="/">
                <Title>바꿈</Title>
              </Link>
            </Home>
            <MenuItem>
              <Link to="/calendar">
                <Text>달력</Text>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Mentoring">
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
