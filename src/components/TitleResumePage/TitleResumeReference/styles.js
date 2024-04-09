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
    description: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        color: '#454541'
    },
    referenceInfoCompany: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6
    }
});
