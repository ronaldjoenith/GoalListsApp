import { useState } from 'react';
import { Button, FlatList, FlatListComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalsList from './GoalsList';
import GoalsInput from './GoalsInput';
import{StatusBar} from 'expo-status-bar'

export default function App() {

 const[goals, setGoals]=useState([])
 const [isModal, setIsModal]=useState(false)

 function modalOpen(){
   setIsModal(true)
 }

 function closeModal(){
  setIsModal(false)
}

function addGoalHandler(goalText){
  setGoals((currentgoals)=>[...currentgoals,goalText] )
  setIsModal(false)
}

function deleteItem(index){
  console.log("item deleted" +index)
  const newGoals=goals.filter((goal,i)=> i!==index)
  setGoals(newGoals)
}


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
         <Button title='Add new goal' 
         onPress={modalOpen}
         />
         {isModal && <GoalsInput onAddGoal={addGoalHandler}
         closeModal={closeModal}
          />}
         <View style={styles.goalsContainer   }>
         <FlatList
             data={goals}
             renderItem={(itemData)=>{
                  return <GoalsList text={itemData.item} onDelete={()=>deleteItem(itemData.index)} />
             }} />
          
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingLeft:16,
    paddingRight:16,
    flex:1,
    backgroundColor:'#1A0037'
  },
  goalsContainer:{
    flex:4
  },
  
});
