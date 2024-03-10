// screens/BookDetailsScreen.js

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Image } from "expo-image";
import { MaterialIcons } from '@expo/vector-icons';
import useBookScreenController from "./controller/useBookScreenController";
import ReviewModal from "./components/ReviewModal";
const BookDetailsScreen = ({ route }) => {
  const { book,} = route.params;
  const {
    isReviewModalVisible,
    handleReviewModal,
    handleFav,isFav 
  } = useBookScreenController(book)
  //generating cover image url
  const coverUrl = `https://covers.openlibrary.org/w/id/${book?.cover_i}-M.jpg`;
  return (
    <ScrollView contentContainerStyle={styles.container} style={{flex:1}}>
      <Image source={coverUrl} style={styles.cover} contentFit={"contain"} />
      <Text style={styles.txt}>{book?.title}</Text>
      <Text style={styles.author}>{book?.author_name?.[0]}</Text>
      <View style={styles.infoView}>
        <View style={[styles.dataView]}>
          <Text style={styles.data}>{book?.ratings_average?.toFixed(2)}</Text>
          <Text style={styles.dataTitle}>Rating</Text>
        </View>
        <View style={styles.borderView} />
        <View style={[styles.dataView,{flex:1.2}]}>
          <Text style={styles.data}>{book?.first_publish_year}</Text>
          <Text style={styles.dataTitle}>Publication Year</Text>
        </View>
        <View style={styles.borderView} />
        <View style={styles.dataView}>
          <Text numberOfLines={1} style={styles.data}>{book?.subject?.[1]}</Text>
          <Text style={styles.dataTitle}>Genre</Text>
        </View>
      </View>
      <View style={styles.descView}>
        <Text style={styles.dataTitle}>Description</Text>
        <Text style={styles.description}>
          We oftentimes look towards the outside world to find the roots of our
          problems. However, most of the times, we should be looking inwards.
          Our mind and our emotions determine our state of being in the present
          moment. If those aspects are left unchecked, we can get easily
          overwhelmed and are left feeling unfulfilled every single day.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.favBtn} onPress={
            ()=>{
                handleFav()
            }
        }>
          <MaterialIcons name={'favorite'} size={24} color={isFav?"red":"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewBtn} onPress={()=>handleReviewModal(true)}>
            <Text style={styles.reviewText}>Write a review</Text>
        </TouchableOpacity>
      </View>
      <ReviewModal visible={isReviewModalVisible} handleReviewModal={handleReviewModal} />
    </ScrollView>
  );
};

export default BookDetailsScreen;
