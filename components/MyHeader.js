import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';

const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: 'white', fontSize: 25, fontWeight: 'bold' },
      }}
      backgroundColor="black"
    />
  );
};

export default MyHeader;
