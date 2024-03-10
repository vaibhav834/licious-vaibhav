import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { Image } from 'expo-image';
import { MaterialIcons } from '@expo/vector-icons';
import AverageRating from "../AverageRating";
const BookCard = ({navigation,book,handleFav,isFav}) => {
    const handleNavigation = (book) => {
        //navigate to details screen on book card press
        navigation.navigate("BookDetailsScreen", { book });
    };
     //generating cover image url
    const coverUrl = `https://covers.openlibrary.org/w/id/${book?.cover_i}-M.jpg`
        return(
            <TouchableOpacity style={styles.bookCard} onPress={() => handleNavigation(book)}>
                <Image
                    source={coverUrl}
                    style={styles.cover}
                    contentFit={"cover"}
                />
                <View style={styles.detailsView}>
                    <View style={styles.detailTopView}>
                        <View style={styles.titleView}>
                            <Text style={styles.txt}>{book?.title}</Text>
                        </View>
                        <TouchableOpacity style={styles.favBtn} onPress={()=>{
                            handleFav(book?.cover_edition_key,isFav)
                        }}>
                            <MaterialIcons name={isFav?"favorite":"favorite-border"} size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                     <Text style={styles.author}>{book?.author_name?.[0]}</Text>
                     <View style={styles.hStack}>
                        <Text style={styles.grayText}>{book?.number_of_pages_median} Pages, </Text>
                        <Text style={styles.grayText}>Published in {book?.first_publish_year} </Text>
                     </View>
                     <AverageRating ratings_average={book?.ratings_average ?? 0}/>
                     {
                        book?.subject?.[1]&&
                        <View style={styles.highlightTextView}>
                            <Text numberOfLines={1} style={styles.highlightText}>{book?.subject?.[1]} </Text>
                        </View>
                     }
                </View>
            </TouchableOpacity>
        )
}
export default BookCard