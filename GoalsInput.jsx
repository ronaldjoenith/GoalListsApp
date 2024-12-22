import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native";

function GoalsInput(props){

const [goalText,setGoalText]=useState('')

  function goalInputHandler(text){
    setGoalText(text)
  }

  function addGoalHandler(){
    props.onAddGoal(goalText)
    setGoalText('')
}

  return(
    <Modal>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/Goal.png')} style={styles.image}/>
            <TextInput 
            onChangeText={goalInputHandler} 
            value={goalText}
            style={styles.textInput} 
            placeholder='Enter your goal here'/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button onPress={addGoalHandler} title='Add goal'/>
              </View>
              <View style={styles.button}>
                <Button title='Cancel'
                onPress={props.closeModal}
                color='#f31282'/>
              </View>
            </View>
           
      </View>
  </Modal>
  )
}

const styles=StyleSheet.create({
  inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    paddingBottom:24,
    flex:1,
    padding:16,
    backgroundColor:'#1A0037'
  
  },
  textInput:{
    borderWidth:1,
    width:'100%',
    borderColor:'#cccccc',
    padding:8,
    borderRadius:10,
    backgroundColor:'#e4d0ff'
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop: 16
  },
  button:{
    width:100,
    marginHorizontal:8
  }, 
  image:{
    width:100,
    height:100,
    margin:20
  }
})

export default GoalsInput;

