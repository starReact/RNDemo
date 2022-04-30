import React, { useEffect } from 'react'
import { View, Text,FlatList, StyleSheet, Alert } from 'react-native'
import { Image } from 'react-native'
import { TouchAble } from '../../components/TouchAble';
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../models'
import { IGuess } from '../../models/Guess'
import IconFont from '../../assets/iconfont';

const connector = connect(({home, loading}: RootState) => ({
  list: home.guess,
  loading: loading.effects['guess']
}))

type ModelState = ConnectedProps<typeof connector>

function Guess({list, dispatch}: ModelState) {
  useEffect(() => {
    dispatch({
      type: "home/fetchGuess"
    })
  }, [])

  console.log(list);

  const rendItem = ({item}: {item: IGuess}) => {
    return <TouchAble style={styles.item} onPress={() => {
      alert('点击');
    }}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text numberOfLines={2}>{item.title}</Text>
    </TouchAble>
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          <IconFont name="icon-like"/>
          <Text style={{marginLeft: 4, color: "#333"}}>猜你喜欢</Text>
        </View>
        <View style={styles.header_right}>
          <Text style={{marginRight: 4, color: "#333"}}>更多</Text>
          <IconFont name="icon-more" />
        </View>
      </View>
      <FlatList
        style={styles.flaList}
        numColumns={3}
        data={list}
        renderItem={rendItem}
      />
      <TouchAble style={styles.changeGuess} onPress={() => {
        dispatch({
          type: "home/fetchGuess"
        })
      }}>
        <IconFont name="icon-huanyipi"/>
        <Text style={styles.changeGuessText}>换一批</Text>
      </TouchAble>
    </View>   
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 8,
        margin: 16 
    },
    item: {
      flex: 1,
      paddingVertical: 6,
      paddingHorizontal: 8
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 8,
      marginBottom: 10
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: 15, 
      borderBottomColor: "#efefef",
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    header_left: {
      flexDirection: 'row'
    },
    header_right: {
      flexDirection: "row"
    },
    flaList: {
      padding: 10
    },
    changeGuess: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    },
    changeGuessText: {
      marginLeft: 5
    }
})

export default connector(Guess);
