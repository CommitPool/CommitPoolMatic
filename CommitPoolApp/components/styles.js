import React from "react";

import styled from "styled-components/native";
import { TouchableOpacity, Text, View, TextInput } from "react-native";

export const StyledText = styled(Text)`
  font-family: Helvetica;
  text-align: center;
  color: white;
  font-size: 25px;
  width: 100%;
`;

export const StyledTextInput = styled(TextInput)`
  text-align: center;
  border-radius: 5px;
  background-color: white;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 25px;
  color: black;
  height: 30px;
  width: 30%;
`;

export const StyledTextSmall = styled(StyledText)`
  font-size: 15px;
`;

export const StyledTextLarge = styled(StyledText)`
  font-size: 50px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-items: center;
`;

export const StyledTouchableOpacityRed = styled(StyledTouchableOpacity)`
  background-color: #d45353;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border-width: 3px;
  border-color: #d45353;
  justify-content: center;
`;

export const StyledView = styled(View)`
  align-items: center;
  margin-: 25px
`;

export const StyledViewContainer = styled(StyledView)`
  flex: 1;
  justify-content: space-around;
  width: 75%;
`;

export const StyledViewRow = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  padding: 10px;
`;

export const StyledViewRowContainer = styled(StyledViewRow)`
  flex-direction: row;
  justify-content: space-around;
  width: 400px;
  padding: 10px;
`;

export const StyledBackdropDark = styled(View)`
  width: 100%;
  justify-content: center;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;