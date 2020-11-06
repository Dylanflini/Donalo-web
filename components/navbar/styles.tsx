import styled from '@emotion/styled'

export const Nav = styled.nav`
  position: fixed;
  z-index: 500;
  width:100%;
  height: 50px;
  background-color: var(--var-primary-color);
  color: var(--var-text-nav-color);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
`

export const NavContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  list-style: none;
`;

export const NavItem = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 3rem;
  font-size: 1.2rem;
`;

export const Icon = styled.img`
  width: 3rem;
  display: inline;
  margin-right: 1rem;
  &:hover{
    transition: transform .3s;
    transform: scale(1.15);
    cursor: pointer;
  }
`

export const BranName = styled.span`
font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
