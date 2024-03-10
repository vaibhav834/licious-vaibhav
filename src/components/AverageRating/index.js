import { View } from "react-native"
import styles from "./styles"
import { FontAwesome } from '@expo/vector-icons';
const AverageRating = ({ratings_average}) => {
    const rating = Math.floor(ratings_average)
    return(
        <View style={styles.container}>
            {
                Array.from({length:5},(_,index)=>{
                    return(
                        <FontAwesome key={index+1} name={rating>=index+1?"star":"star-o"} size={24} color="#FFD501" style={{marginHorizontal:2}} />
                    )
                })
            }
        </View>
    )
}
export default AverageRating