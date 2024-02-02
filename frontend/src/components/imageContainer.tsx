import { View, Image, StyleSheet } from "react-native";
import config from '../../config';


type ImageContainerProps = {
    imgId: string
}


export function ImageContainer({ imgId }: ImageContainerProps) {
    return (
        <View style={styles.imgContainer}>
            <Image
                style={styles.img}
                source={{ uri: `${config.API_BASE_URL}/api/images/${imgId}` }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    img: {
        width: '90%',
        height: 150,
        borderRadius: 10,
    },
    imgContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        width: '50%',
        marginVertical: 10,
        alignItems: 'center',
    }
});
