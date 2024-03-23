import { MotiView } from "moti";
import { Easing } from 'react-native-reanimated'
import { Platform } from 'react-native'

export const FadeIn = ({ children }) => {
    return Platform.OS !== 'android' ? (
        <MotiView
            from={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'timing',
                duration: 150,
                easing: Easing.linear,
            }}
        >
            {children}
        </MotiView>
    ) : (
        <>{children}</>
    )
}