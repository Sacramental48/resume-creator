import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles.js'

const ResumeSkill = ({skillFields}) => {
    return (
        <View style={styles.skill}>
            {skillFields.length !== 0 && (
                <>
                    <Text style={[styles.title, {textAlign: 'center'}]}>SKILLS</Text>
                    <View style={styles.body}>
                        {skillFields.map((skill, index) => (
                            <View style={styles.skills} key={index}>
                                <Text style={[styles.text, {fontSize: 12, fontWeight: 800}]}>{skill.skillName}:</Text>
                                <View style={{width: '50%', height: 6, border: '0.4px solid black', borderRadius: 24}}>
                                    {skill && skill.skillLevel !== undefined && (
                                        <Text style={[styles.lineSkill, {width: `${skill.skillLevel}%`}]}></Text>
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </View>   
    )
}

export default ResumeSkill;