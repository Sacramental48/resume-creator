import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

const ResumeContact = ({inputPersonalDataField}) => {
    const hasFirstName = inputPersonalDataField.lastName || null;
    const hasLastName = inputPersonalDataField.firstName || null;
    const hasPosition = inputPersonalDataField.position || null;

    return (
        <View style={styles.header}>
            {hasFirstName && (
                <Text style={[styles.text, {fontSize: 46, fontWeight: 800, marginBottom: -10}]}>{`${inputPersonalDataField.firstName || 'Name'}`}</Text>  
            )}
            {hasLastName && (
                <Text style={[styles.text, {fontSize: 30}]}>{`${inputPersonalDataField.lastName || 'Surname'}`}</Text>
            )}
            {hasPosition && (
                <Text style={[styles.text, {fontSize: 16}]}>{inputPersonalDataField.position || 'Position'}</Text>
            )}
        </View>   
    )
}

export default ResumeContact;