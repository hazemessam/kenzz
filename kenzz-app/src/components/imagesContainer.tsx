import { FlatList, View, Text } from "react-native";

import { ImageContainer } from "./imageContainer";
import config from "../../config";
import { useFetch } from "../hooks/useFetch";


export function ImagesContainer() {
    const [data, loading, error, refresh] = useFetch(`${config.API_BASE_URL}/api/images`);

    if (error) return (
        <View>
            <Text style={{ textAlign: "center" }}>Failed to load images</Text>
        </View>
    );

    return (
        <FlatList 
            numColumns={2}
            data={data ? data.imagesIds : []}
            renderItem={({ item: imgId }) => <ImageContainer imgId={imgId} />}
            keyExtractor={item => item}
            refreshing={loading}
            onRefresh={refresh}
        />
    );
}
