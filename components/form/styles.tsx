import styled from '@emotion/styled'

export const FormStyle = styled.form`
      color: var(--var-text-color);
      min-height: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: .2rem 5%;
      width: 80%;
      max-width: 500px;
      margin: 0 auto;
`;

export const Group = styled.div`
    width: 100%;
    padding-bottom: var(--var-font-size);
    margin-bottom: calc(var(--var-font-size) / 2);
    position: relative;
    /* background: var(--var-background-color); */
`

export const Input = styled.input`
    padding: 0 calc(var(--var-font-size) - 0.1rem);
    display: block;
    width: -webkit-fill-available;
    margin-top: calc(var(--var-font-size) + 0.3rem);
    border: none;
    background: none;
    color:#474646;
    /* color: var(--var-primary-light-color); */
    font-size: var(--var-font-size);
    transition: 0.3s ease;
    border-bottom: 1px solid var(--var-bar-color);
    outline: none;
    overflow-x: scroll;
  &:focus{
    border-bottom: 1px solid var(--var-primary-color);
    outline: none;
  }
  &::placeholder{
    color:#474646;
  }
`;

export const Select = styled.select`
    padding: 0 calc(var(--var-font-size) - 0.1rem);
    display: block;
    width: -webkit-fill-available;
    margin-top: calc(var(--var-font-size) + 0.3rem);
    border: none;
    background: none;
    color: #474646;
    font-size: var(--var-font-size);
    transition: 0.3s ease;
    border-bottom: 1px solid var(--var-bar-color);
    outline: none;
    overflow-x: scroll;
  &:focus{
    border-bottom: 1px solid var(--var-primary-color);
    outline: none;

  }
`;

export const Label = styled.label`
    position: absolute;
    top: var(--var-font-size);
    left: calc(var(--var-font-size) - 0.3rem);
    color: var(--var-second-color);
    /* font: 400 var(--var-font-size) Raleway; */
    font: 400 var(--var-font-size) serif;
    cursor: text;
    transition: 0.25s ease;
`;


export const Upload = styled.div`
  &:hover{
    cursor: pointer;
  }
`

// export function Body( { align = 'center', backgroundColor = 'var(--var-background-color)', children } ) {
//   const BodyStyle = styled.div`
//       color: var(--var-text-color);
//       /* background: ${ backgroundColor }; */
//       min-height: 2rem;
//       display: flex;
//       flex-direction: column;
//       align-items: ${ align };
//       justify-content: center;
//       padding: .2rem 5%;
//       width: 80%;
//       max-width: 500px;
//       margin: 0 auto;
//       /* margin: 0 auto; */
//       /* padding-left: 5%; */
//   `
//   return ( <BodyStyle >{ children }</BodyStyle> )


export const Div = styled.div`
display: flex;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  height: 200px;
  background-color: gray;
`;

// export 