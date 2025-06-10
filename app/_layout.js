import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
export default class _layout extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-center">
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </View>
    );
  }
}
