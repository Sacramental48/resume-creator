import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

const ResumeReference = ({referenceFields}) => {
    return (
        <View>
            {referenceFields.length !== 0 && (
                <>
                    <Text style={[styles.title, {paddingLeft: 16}]}>REFERENCE</Text>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                        {referenceFields.map((refer, index) => (
                            <View key={index} style={{marginBottom: 15}}>
                                <Text style={[styles.text, {fontWeight: 600, fontSize: 16}]}>{refer.name}</Text>
                                <View style={styles.referenceInfoCompany}>
                                    <Text style={[styles.text, {fontSize: 12}]}>{refer.companyName}</Text>
                                    <Text style={{margin: '0 5', fontSize: 12}}>/</Text>
                                    <Text style={[styles.text, {fontSize: 12}]}>{refer.position}</Text>
                                </View>
                                <View style={[styles.referenceInfoCompany, {marginBottom: 0}]}>
                                    <Text style={[styles.text, {fontSize: 10, fontWeight: 600, marginRight: 8}]}>Phone:</Text>
                                    <Text style={[styles.text, {fontSize: 10}]}>{refer.phone}</Text>
                                </View>
                                <View style={styles.referenceInfoCompany}>
                                    <Text style={[styles.text, {fontSize: 10, fontWeight: 600, marginRight: 8}]}>Email:</Text>
                                    <Text style={[styles.text, {fontSize: 10}]}>{refer.email}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    
                </>
            )}
        </View>   
    )
}

export default ResumeReference;