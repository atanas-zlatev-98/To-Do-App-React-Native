import { Button, Text,View} from "react-native";

export default function TodoItem({id,text,isCompleted,onDone}){
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
            <Text style={{fontSize:20,textDecorationLine:isCompleted ? 'line-through' : 'none'}}>{text}</Text>
            <View style={{flexDirection:'row', gap:5}}>
               <Button title={isCompleted ? 'Undone' : 'Done'} onPress={() => onDone(id)}></Button>
               <Button title="Delete"></Button>
            </View>
        </View>
    )
}