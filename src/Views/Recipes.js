import React from 'react';
import { Container, Inner } from '../Styling';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import List from '../Components/List';
function Recipes() {
    return (
        <Container>
            <NavBar />
            <Inner>
                <List />
                <Footer />
            </Inner>
        </Container>
    );
}

export default Recipes;
