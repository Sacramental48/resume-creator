import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

const ResumeExperience = ({experienceFields}) => {
    return (
        <View>
            {experienceFields.length !== 0 && (
                <>
                    <Text style={[styles.title, {paddingLeft: 16}]}>EXPERIENCE</Text>
                    {experienceFields.map((experience, index) => (
                        <View key={index} style={{marginBottom: 12}}>
                            <Text style={[styles.text, {fontSize: 10, opacity: .8}]}>{experience.from} - {experience.to}</Text>
                            <View style={styles.description}>
                                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 0}}>
                                    <Text style={[styles.text, {fontSize: 14, fontWeight: 600}]}>{experience.position}</Text>
                                    <Text style={[styles.text, {fontSize: 14, fontWeight: 600, marginBottom: 2}]}>{experience.company}</Text>
                                </View>
                                <Text style={[styles.text, {fontSize: 10, opacity: .7}]}>{experience.accomplishments}</Text>
                            </View>
                        </View>
                    ))}
                </>
            )}
        </View>   
    )
}

export default ResumeExperience;