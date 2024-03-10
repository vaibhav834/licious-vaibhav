import { useState, useEffect,useCallback } from "react";
import { getBooks, searchBooks } from "../../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default useHomeScreenController = () => {
  const [books, setBooks] = useState([]);
  const [isSearching,setIsSearching] = useState(false)
  const [query,setQuery] = useState("")
  const [loading,setLoading] = useState(false)
  const [loadMore,setLoadMore] = useState(false)
  const [pageNumber,setPageNumber] = useState(0)
  const [hasMore,setHasMore] = useState(true)
  const [favorites,setFavorites] = useState([])
  
  useEffect(()=>{
    //fetching favorites from local storage
    AsyncStorage.getItem("favs")
    .then(val=>{
        if(val){
           const keys = JSON.parse(val)
           setFavorites(keys)
        }
    })
  },[])
  useEffect(() => {
    fetchBooksData();
  }, [isSearching]);
  const fetchBooksData = async () => {
    try {
      setLoading(true)
      //on search mode adding query string to params else empty query
      const data = await searchBooks(isSearching?query:"",1);
      const newBooks = [...data.docs]
        if(newBooks.length>=data.numFound){
            //if no more book available 
            setHasMore(false)
        }
      setBooks(newBooks)
      setPageNumber(1)
    } catch (error) {
     
    }
    finally{
      setLoading(false)
    }
  };
  
  const handleChange = useCallback((txt) => {
    setQuery(txt)
  })
  const handleSubmit = () => {
    setIsSearching(true)
  }
  const resetSearch = () =>{
    setQuery("")
    setIsSearching(false)
  }
  const fetchNextPage = async() => {
    if(hasMore){
        try {
            setLoadMore(true)
            const data = await searchBooks(isSearching?query:"",pageNumber+1);
            setBooks(prevBooks=>{
              const newBooks = [...prevBooks,...data.docs]
              if(newBooks.length>=data.numFound){
                  setHasMore(false)
              }
              return newBooks
            })
            setPageNumber(prev=>prev+1)
          } catch (error) {
           
          }
          finally{
            setLoadMore(false)
          }
    }
  }
  const handleFav = (key,isFav) => {
    let favs = favorites
    if(isFav){
        //if already fav, remove key
        favs = favs.filter(item=>item != key)
    }
    else{
        //else add to favorites
        favs = [...favs,key]
    }
    setFavorites(favs)
    AsyncStorage.setItem("favs",JSON.stringify(favs))
  }
  return {
    books,
    isSearching,
    handleChange,
    handleSubmit,
    loading,
    fetchNextPage,
    pageNumber,
    loadMore,
    resetSearch,
    query,
    handleFav,
    favorites
  };
};
