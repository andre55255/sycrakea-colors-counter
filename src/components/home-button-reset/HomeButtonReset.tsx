import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './HomeButtonReset.style'

export default function HomeButtonReset() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonTxt}>Reset</Text>
        </TouchableOpacity>
    </View>
  )
}
