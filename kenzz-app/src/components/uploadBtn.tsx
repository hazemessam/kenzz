import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { grabImage, prepareImgforUploading, uploadImg } from "../services/upload";
import { mainColor } from '../common/styles';


async function handleOnPress() {
    try {
        const img = await grabImage();
        const imgData = prepareImgforUploading(img);
        const imgId = await uploadImg(imgData);
        console.log(imgId);
        // TODO: Add the uploaded img id to the ImagesContainer state
    } catch (error) {
        console.log(error);
    }
}


export function UploadBtn() {
    return (
        <TouchableOpacity style={styles.btn} onPress={handleOnPress}>
            <Feather name={'upload'} color={'white'} size={20} />
            <Text style={styles.text}>Upload</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: mainColor,
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        margin: 10,
        
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 5
    }
});
