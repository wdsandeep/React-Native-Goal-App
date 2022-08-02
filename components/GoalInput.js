import { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal, ToastAndroid, Image} from 'react-native'
function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if(!enteredGoalText.length){
            ToastAndroid.show("No input received!",ToastAndroid.SHORT);
        } else {
            props.onAddGoal(enteredGoalText);
        }
        setEnteredGoalText('');
    }
    // console.log('GoalInput');
        
    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <Image style={styles.image}
                source={require('../assets/goal.png')}
                />
                <TextInput
                style={styles.textInput}
                placeholder="Your course goal!!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal!" onPress={addGoalHandler} color="#b180180" />
                    </View>

                </View>
            </View>
        </Modal>
    )
};


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        width: "100%",
        padding: 8,
        color: '#120438',
        borderRadius: 6,
        padding: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      }
})