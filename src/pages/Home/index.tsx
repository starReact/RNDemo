import React, { useEffect } from 'react'
import { ScrollView, FlatList, View, ListRenderItemInfo} from 'react-native'
import Carrousel from './Carrousel'
import Guess from './Guess'
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../models';
import { IChannel } from '../../models/Home';
import ChannelItem from './ChannelItem';

const connector = connect(({home, loading}: RootState) => ({
  loading: loading.effects,
  channels: home.channels
}))
type ModelState = ConnectedProps<typeof connector>

const renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
  return <ChannelItem data={item} onPress={() => {}} />;
};

function Header() {
  return <View>
    <Carrousel />
    <Guess />
  </View>
}

function Home({loading, channels, dispatch}: ModelState) {
  console.log(channels);
  useEffect(() => {
    dispatch({
      type: "home/fetchChannels"
    })
  }, [])
  
  return (
    <FlatList
        ListHeaderComponent={<Header />}
        // ListFooterComponent={footer}
        // ListEmptyComponent={empty}
        data={channels}
        renderItem={renderItem}
    />
  )
}

export default connector(Home);
