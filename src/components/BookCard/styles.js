import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bookCard: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 1,
    marginVertical: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
  author: {
    color: "black",
    fontWeight: "400",
    fontSize: 14,
    marginTop:5
  },
  cover: {
    width: "30%",
    height: 180,
    // backgroundColor:'red',
    borderRadius: 5,
  },
  detailsView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height:"100%",
    marginLeft: 10,
  },
  detailTopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:"90%"
  },
  txt: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
  favBtn:{
    width:"25%"
  },
  titleView:{
    width:"70%"
  },
  hStack:{
    flexDirection:"row",
    alignItems:'center',
    marginTop:15
  },
  grayText:{
    color:"gray"
  },
  highlightTextView:{
    marginTop:25,
    backgroundColor:"#FFC9C9",
    alignSelf:'flex-start',
    padding:10,
    borderRadius:5,
    maxWidth:"70%"
  },
  highlightText:{
    color:'#DE5454',
  }
});
