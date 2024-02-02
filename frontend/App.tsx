import { View, StyleSheet } from 'react-native';
import { Header } from "./src/components/header";
import { ImagesContainer } from './src/components/imagesContainer';
import { UploadBtn } from './src/components/uploadBtn';


export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <ImagesContainer />
            <UploadBtn />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
