import { Platform } from 'react-native';
import { ImagePickerAsset, launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import config from '../../config';


export async function grabImage() {
    const imgPickerResult = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images
    });
    if (imgPickerResult.canceled)
        throw new Error("Picking an image was canceled");

    return imgPickerResult.assets[0];
}


export function prepareImgforUploading(img: ImagePickerAsset) {
    const formDataValue: FormDataValue = {
        name: img.fileName as string,
        type: img.type,
        uri: Platform.OS == 'ios' ? img.uri.replace('file://', '') : img.uri
    };

    const data = new FormData();
    data.append('image', formDataValue as any, img.fileName as string);

    return data;
}


export async function uploadImg(data: FormData) {
    const reqOpts: RequestInit = {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: data
    };
    const res =  await fetch(`${config.API_BASE_URL}/api/images`, reqOpts);
    const resData = await res.json();

    if (res.status != 201)
        throw new Error(`Failed to upload the image: ${resData.msg}`);

    return resData.imageId as string;
}
