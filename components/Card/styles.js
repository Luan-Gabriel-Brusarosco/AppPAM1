import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 20
    },
    texto:{
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000' /*'#ae3038'*/ /*'#4e6c73'*/
    },
    img:{
        width:350,
        height: 200,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20
    },
    card:{
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 350
    }
});

export default styles;