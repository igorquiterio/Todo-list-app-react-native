import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';


interface FlatListHeaderComponent {
  isThemeDark: boolean;
}

function FlatListHeaderComponent({isThemeDark}: FlatListHeaderComponent) {
  return (
    <View>
      <Text style={styles(isThemeDark).header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  isThemeDark: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, isThemeDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? (styles(isThemeDark)).taskButtonDone: (styles(isThemeDark)).taskButton}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? (styles(isThemeDark)).taskMarkerDone: (styles(isThemeDark)).taskMarker}
            />
            <Text 
               style={item.done ? (styles(isThemeDark)).taskTextDone: (styles(isThemeDark)).taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isThemeDark={isThemeDark}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = (isDarkTheme?: boolean) => StyleSheet.create({
  header: {
    color: isDarkTheme? '#FF79C6' :'#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: isDarkTheme? '#FF79C6' :'#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: isDarkTheme? '#FF79C6' :'#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: isDarkTheme? 'rgba(255, 121, 198, 0.1)' : 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: isDarkTheme? '#FF79C6': '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color:  isDarkTheme? '#E1E1E660':'#A09CB1',
    textDecorationLine: 'line-through'
  }
})