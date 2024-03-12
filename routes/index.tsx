import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/Home"
import About from "../pages/About"
import { createURL } from "expo-linking"
import { Linking } from "react-native"

const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {


    const url = createURL('')
    console.log('url', url)

    Linking.addEventListener('url', ({ url }) => {
        console.log('listener deep linking', url)
    });

    const linking = {
        prefixes: [url],
        config: {
            screens: {
                home: "home",
                about: "about"
            }
        }
    }

    return (
        <NavigationContainer
            linking={linking}>
            <Navigator>
                <Screen name="home" component={Home} />
                <Screen name="about" component={About} />
            </Navigator>
        </NavigationContainer>
    )
}