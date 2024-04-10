import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    title: {
        color: '#fff',
        backgroundColor: '#454541',
        fontSize: 18,
        marginBottom: 10,
        borderBottom: '0.6px solid gray',
        fontWeight: 600
    },
    lang: {
        display: 'flex',
        flexDirection: 'row',
    },
    body: {
        display: 'flex',
        gap: 8
    },
    text: {
        color: '#454541'
    },
});
