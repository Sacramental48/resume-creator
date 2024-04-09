import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    skill: {
        marginBottom: 12
    },
    title: {
        color: '#fff',
        backgroundColor: '#454541',
        fontSize: 18,
        marginBottom: 10,
        borderBottom: '0.6px solid gray',
        fontWeight: 600
    },
    text: {
        color: '#454541'
    },
    body: {
        display: 'flex',
        gap: 10
    },
    lineSkill: {
        content: '',
        backgroundColor: '#454541',
        height: '100%',
        Left: 4
    },
    skills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center'
    },
});
