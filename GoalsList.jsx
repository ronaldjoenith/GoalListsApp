import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalsList(props){
    return(
   
        <View style={styles.goalItem}>
          <Pressable onPress={props.onDelete} ///android_ripple={{color:'#210466'}}//
          style={({pressed})=>pressed && styles.pressedItem}>
              <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable> 
        </View>
    
    )
}

const styles=StyleSheet.create({
    goalItem:{
        marginTop:15,
        borderRadius:6,
        backgroundColor:'#5e0acc' 
       },
    
      goalItemText:{
        margin:8,
        padding:8,
        color:'white'
      },
      pressedItem:{
        opacity:0.5,
        backgroundColor:'red'
      }
})
export default GoalsList;