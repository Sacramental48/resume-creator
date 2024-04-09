import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    View: {
        border: '1px solid red'
    },
    reset: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '40px 0 10px 0',
        margin: 0
    },
    page: {
        fontFamily: 'IstokWeb',
    },
    info: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row-reverse',
        height: '100%',
    },
    section: {
        gap: 20,
        width: '65%',
        padding: '0 20px 0 30px',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
    },
    aside: {
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        backgroundColor: '#F5F5F5',
        padding: '20px 15px 0 15px',
    },
    image: {
        width: '100%',
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
    skills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center'
    },
    lineSkill: {
        content: '',
        backgroundColor: '#454541',
        height: '100%',
        Left: 4
    },
    lang: {
        display: 'flex',
        flexDirection: 'row',
    },
    referenceInfoCompany: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6
    }
});
