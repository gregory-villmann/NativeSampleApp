import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FAFAFA',
        marginTop: '5%',
    },
    innerText: {
        textDecorationLine: 'underline',
        color: '#FCA34D',
    },
    image: {
        width: '100%',
        height: 225,
        marginTop: '5%'
    },
    background: {
        backgroundColor: '#353c4d',
        height: '200%',
        width: '100%',
        borderRadius: '125',
        overflow: 'hidden',
        marginTop: '5%'
    },
    view: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        overflow: 'hidden'
    },
    buttonLogin: {
        justifyContent: 'center',
        width: '65%',
        height: 50,

    },
    buttonComponent: {
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSign: {
        marginTop: 20,
    }
})