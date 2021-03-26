// Copyright 2021 Prescryptive Health, Inc.
import { TextStyle, View, ViewStyle } from "react-native"
import { GreyScale } from "../utils/types/colors"

export interface IProgressBarStyles {
    viewStyle: ViewStyle,
    stepStyle: TextStyle;
}
const viewStyle: ViewStyle={
    flexDirection: 'column',
    justifyContent: 'flex-end',
}

const stepStyle: TextStyle = {
    paddingTop: '20px',
    paddingBottom: '5px',
    color: GreyScale.dark,
    fontWeight: '700',
}

export const progressBarStyles: IProgressBarStyles = {
    viewStyle,
    stepStyle
};