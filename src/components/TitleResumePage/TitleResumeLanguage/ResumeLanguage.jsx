import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

const ResumeLanguage = ({languageFields}) => {
    return (
        <View>
            {languageFields.length !== 0 && (
                <>
                    <Text style={[styles.title, {textAlign: 'center'}]}>LANGUAGE</Text>
                    <View style={styles.body}>
                        {languageFields.map((lang, index) => (
                            <View key={index} style={styles.lang}>
                                    <Text style={[styles.text, {fontSize: 12}]}>{lang.inputField}: </Text>
                                    <Text style={[styles.text, {fontSize: 12}]}>{lang.level}</Text>
                            </View>
                        ))}
                    </View>
                    
                </>
            )}
        </View>   
    )
}

export default ResumeLanguage;