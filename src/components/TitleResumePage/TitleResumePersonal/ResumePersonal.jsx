import { Text, View, Image } from '@react-pdf/renderer';
import { Phone, Email, Location } from '@/components/svg/icons.jsx';
import { styles } from './styles';

const ResumePersonal = ({inputPersonalDataField}) => {
    const hasPersonalValue = Object.values(inputPersonalDataField).some(item => item !== '');

    return (
        <View>
            {hasPersonalValue && (
                <>
                    <Image src={inputPersonalDataField.photo || '/img/default-avatar.png'} alt='avatar' style={styles.image} />
                    <View>
                        <Text style={[styles.title, {textAlign: 'center'}]}>CONTACT</Text>
                        {inputPersonalDataField.phoneNumber.length !== 0 && (
                            <View style={styles.contact}>
                                <Phone />
                                <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.phoneNumber || '-'}</Text>
                            </View>
                        )}
                        {inputPersonalDataField.address.length !== 0 && (
                            <View style={styles.contact}>
                                <Email />
                                <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.address || '-'}</Text>
                            </View>
                        )}
                        {inputPersonalDataField.email.length !== 0 && (
                            <View style={styles.contact}>
                                <Location />
                                <Text style={[styles.text, {fontSize: 10}]}>{inputPersonalDataField.email || '-'}</Text>
                            </View>
                        )}
                    </View>
                </>
            )}
        </View>   
    )
}

export default ResumePersonal;