import { useState,useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default useBookScreenController = (book) => {
const [isFav,setIsFav] = useState([])
  const [favorites,setFavorites] = useState([])
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  useEffect(()=>{
    AsyncStorage.getItem("favs")
    .then(val=>{
        if(val){
           const keys = JSON.parse(val)
           setFavorites(keys)
           setIsFav(keys.includes(book?.cover_edition_key))
        }
    })
  },[])
    const handleFav = () => {
        let favs = favorites
        if(isFav){
            favs = favs.filter(item=>item != book?.cover_edition_key)
        }
        else{
            favs = [...favs,book?.cover_edition_key]
        }
        setIsFav(!isFav)
        setFavorites(favs)
        AsyncStorage.setItem("favs",JSON.stringify(favs))
      
    }
    const handleReviewModal = (value) => {
        setReviewModalVisible(value);
    };
    return{
        isFav,
        handleFav,
        isReviewModalVisible,
        handleReviewModal
    }
}