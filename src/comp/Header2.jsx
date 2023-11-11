import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    
    return (
        <Container> 
        
        <Toolbar>
        </Toolbar>
        </Container>
    )
}

export default Header;