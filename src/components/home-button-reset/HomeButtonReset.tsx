import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './HomeButtonReset.style'

interface AuxProps {
  onPressReset: () => void;
}

export default function HomeButtonReset({ onPressReset }: AuxProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPressReset} style={styles.resetButton}>
            <Text style={styles.resetButtonTxt}>Reset</Text>
        </TouchableOpacity>
    </View>
  )
}
