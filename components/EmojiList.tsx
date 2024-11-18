import { useState } from 'react';
import { Pressable, FlatList, Platform, StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';


type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] =useState<ImageSource[]>([
        require('@/assets/images/2022image.jpg'),
        require('@/assets/images/babyemo.jpg'),
        require('@/assets/images/heartemoji.jpg'),
        require('@/assets/images/twoheartemo.jpg'),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
            <Pressable
                onPress={() => {
                    onSelect(item);
                    onCloseModal();
                }}>
                <Image source={item} key={index} style={styles.image} />
            </Pressable>
        )}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});