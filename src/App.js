import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="Hello" />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

export default App;
