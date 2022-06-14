import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'http://s2.glbimg.com/AttbhKnq0WoxBxbqq09MlxagMP6hPTYqMAzu-Hwi-pZIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/og/rg/f/original/2012/10/05/bolt.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                 'Bolt - Supercão' é a atração da Temperatura Máxima
                </Text>
            </View>
        </View>
    );
}