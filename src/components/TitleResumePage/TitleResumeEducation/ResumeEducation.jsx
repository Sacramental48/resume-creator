import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles.js'

const ResumeEducation = ({educationFields}) => {
    return (
        <View>
            {educationFields.length !== 0 && (
                <>
                    <Text style={[styles.title, {textAlign: 'center'}]}>EDUCATION</Text>
                    {educationFields.map((education, index) => (
                        <View key={index} style={{marginBottom: 10}}>
                            <View style={styles.description}>
                                <Text style={[styles.text, {fontSize: 12}]}>{education.faculty}</Text>
                                <Text style={[styles.text, {fontSize: 14}]}>{education.universityName}</Text>
                            </View>
                            <Text style={[styles.text, {fontSize: 10, opacity: .6}]}>{education.from} - {education.to}</Text>
                        </View>
                    ))}
                </>
            )}
        </View>   
    )
}

export default ResumeEducation;