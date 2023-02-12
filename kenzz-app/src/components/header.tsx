import { View, Text, StyleSheet } from 'react-native';

import { mainColor } from '../common/styles';


export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kenzz</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: mainColor,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 20,
        marginBottom: 10
    },
    header: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
    }
});
