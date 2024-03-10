// screens/HomeScreen.js

import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import useHomeScreenController from './controller/useHomeScreenController';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import BookCard from '../../components/BookCard';
import CenteredLoader from '../../components/CenteredLoader';
import { Entypo } from '@expo/vector-icons';
const HomeScreen = ({ navigation }) => {
    const {
        books,
        isSearching,
        handleChange,
        handleSubmit,
        loading,
        fetchNextPage,
        loadMore,
        resetSearch,
        query,
        handleFav,
        favorites
    } = useHomeScreenController()
    const renderItem = ({item}) => {
        const isFav = favorites.includes(item?.cover_edition_key) //checking if the book is favorite
        return(
            <BookCard book={item} navigation={navigation} handleFav={handleFav} isFav={isFav}/>
        )
    }
    const keyExtractor = item => item.key
    
    return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
        
            <View style={styles.txtInput}>
                <TextInput
                    placeholder={"Search books"}
                    value={query}
                    style={styles.input}
                    onChangeText={handleChange}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="search"
                />
                {
                    isSearching &&
                    <TouchableOpacity onPress={resetSearch}>
                        <Entypo name="circle-with-cross" size={24} color="#FDBB62" />
                    </TouchableOpacity>
                }
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={handleSubmit}>
                <AntDesign name="search1" size={20} color="white" />
            </TouchableOpacity>
        </View>
       <View style={styles.headingView}>
        <Text style={styles.heading}>{isSearching?"Search Results":"Top Rated Books"}</Text>
       </View>
        {
            loading?
            <CenteredLoader/>:
            <View style={{marginTop:5,flex:1}}>
                <FlatList
                data={books}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.8}
            />
            </View>
           
        }
            {
                loadMore &&
                <ActivityIndicator size={'small'} color={"#FDBB62"}/>
            }
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
