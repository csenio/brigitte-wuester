import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  background: ${p => (p.dark ? p.theme.colors.brand : p.theme.colors.white)};
  padding: ${p => p.theme.layout.sideMargin};
  color: ${p => (p.dark ? p.theme.colors.white : p.theme.colors.black)};
`
export default Section
