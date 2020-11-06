import styled from '@emotion/styled'

export const ModalStyle = styled.div`
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    height: max-content;
    /* padding: .2rem; */
    color: var(--var-primary-color);
    /* border: 1px solid var(--var-primary-color); */
    /* border-radius: 1rem; */
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 3px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(231, 148, 148, 0.12);
`;

export const Overlay = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    /* background-color: var(--var-background-color); */
    /* opacity: 0.8; */
`;