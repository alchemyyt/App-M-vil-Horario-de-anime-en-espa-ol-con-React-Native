import React, { Component } from "react";
import { Text, View } from "react-native";
import { Slot } from "expo-router";
export default class _layout extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-center">
        <Slot />
      </View>
    );
  }
}
