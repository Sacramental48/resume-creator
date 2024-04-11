import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
        height: 160,
        margin: '0 auto',
        marginBottom: 12,
    },
    title: {
        color: '#fff',
        backgroundColor: '#454541',
        fontSize: 18,
        marginBottom: 10,
        borderBottom: '0.6px solid gray',
        fontWeight: 600
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },
    text: {
        color: '#454541'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '40px 0 10px 0',
        margin: 0
    },
});
