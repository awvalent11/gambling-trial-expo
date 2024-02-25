import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import {RootStackParamList} from "../index";



const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    SignUp: {
                        screens: {
                            SignUpScreen: "SignUp",
                        },
                    },
                    SignIn: {
                        screens: {
                            SignInScreen: "SignIn",
                        },
                    },
                },
            },
        },
    },
};

export default linking;