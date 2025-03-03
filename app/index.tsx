import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/welcome");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splashImage.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral900,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});
