import styled from '@emotion/styled'

export const Container = styled.ul`
    /* border-radius: 4px; */
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    /* background-color: var(--var-background-color); */

`

export function Item( { onClick = () => { }, cursor='pointer', shadow = '0 3px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12)', backgroundColor = 'var(--var-background-color)', children } ) {
    const ItemStyle = styled.li`
    font-weight: bold;
    list-style: none;
    /* text-align: center; */
    flex: 0.4 1 160px;
    height: max-content;
    margin: 2%;
    color: var(--var-text-color);
    background-color: ${ backgroundColor };
    border-radius: var(--var-border);
    box-shadow: ${ shadow };
    &:hover {
        cursor: ${cursor};
    }
    `

    return ( <ItemStyle onClick={ onClick } >{ children }</ItemStyle> )
}

// export const Item = styled.div`
//     font-weight: bold;
//     text-align: center;
//     flex: 0.5 1 150px;
//     height: max-content;
//     margin: .7rem;
//     color: var(--var-text-color);
//     //     background-color: var(--var-background-color);
//     /* background-color: ${ backgroundColor }; */
//     border-radius: var(--var-border);
//     box-shadow: 0 3px 1px -1px rgba(0, 0, 0, 0.2),
//         0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(231, 148, 148, 0.12);
// `

// export const Image = styled.img`
//     width: 100%;
//     height: 12rem;
//     object-fit: cover;
// `

export function Image( {margin= '0', src, width = '100%', height = '12rem' } ) {
    const ImageStyle = styled.img`
    width: ${ width };
    max-width: 500px;
    height: ${ height };
    max-height: 600px;
    margin: ${margin};
    /* margin-left: auto; */
  /* margin-right: auto; */
    /* height: 12rem; */
    object-fit: cover;
    /* margin: 0 auto; */
    /* padding: 0 auto; */
    /* text-align: center; */
`

    return ( <ImageStyle src={ src } /> )
}

// export const Body = styled.div`
//     color: var(--var-text-color);
//     min-height: 2rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: .2rem .4rem;
// `

export function Body( { align = 'center', backgroundColor = 'var(--var-background-color)', children } ) {
    const BodyStyle = styled.div`
        color: var(--var-text-color);
        /* background: ${ backgroundColor }; */
        min-height: 2rem;
        display: flex;
        flex-direction: column;
        align-items: ${ align };
        justify-content: center;
        padding: .2rem 5%;
        width: 80%;
        max-width: 500px;
        margin: 0 auto;
        /* margin: 0 auto; */
        /* padding-left: 5%; */
    `
    return ( <BodyStyle >{ children }</BodyStyle> )
}

export const Title = styled.div`
   text-align: center;
    margin-top: .5rem;
    font-size: 1rem;
`

export const Description = styled.div`
    margin-top: .5rem;
    font-size: .9rem;
    font-weight: 300;
`
