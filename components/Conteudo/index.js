import React from 'react';
import { View, Text } from 'react-native-web';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>

                <Text style={styles.texto}>
            Bolt passou a vida inteira dentro dos estúdios de televisão, interpretando um cão super-herói.
            Misturando ficção e realidade, Bolt acredita possuir os superpoderes do seu personagem também fora das telas.
            Ao descobrir que não passa de um cachorro como todos os outros, sua vida vira de pernas pro ar. E quem vai lhe mostrar isso é Mittens, uma gatinha que não acredita mais na raça humana.
            Essa é a trama da animação "Bolt - Supercão" (2008), que a Globo exibe, em HD, na Temperatura Máxima deste domingo.
                </Text>
            </View>
        </View>
    );
}