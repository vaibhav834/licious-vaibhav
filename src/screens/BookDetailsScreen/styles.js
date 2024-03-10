import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    
    backgroundColor: "rgb(251,251,251)",
    alignItems: "center",
  },
  cover: {
    height: 240,
    width: 145,
    backgroundColor: "red",
    borderRadius: 5,
    marginTop: 10,
  },
  author: {
    color: "black",
    fontWeight: "400",
    fontSize: 16,
    marginTop: 5,
  },
  txt: {
    color: "black",
    fontWeight: "500",
    fontSize: 28,
    marginTop:20
  },
  infoView:{
    backgroundColor:"white",
    flexDirection:"row",
    alignItems:"center",
    margin: 1,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    
    paddingVertical:20,
    borderRadius:5,
    width:"90%",
    justifyContent:"space-evenly"
  },
  dataView:{
    flex:1,
    alignItems:"center",
    paddingHorizontal:5,
    paddingVertical:5
  },
  data:{
    color:"#FF1C00",
    fontWeight:"500"
  },
  dataTitle:{
    fontSize:16,
    fontWeight:"600",
    marginTop:3
  },
  borderView:{
    width:1.5,
    height:"100%",
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  description:{
    color:"rgba(0,0,0,0.7)",
    fontSize:16,
    fontWeight:"400",
    marginTop:10
  },
  descView:{
    margin: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    padding:10,
    paddingVertical:20,
    borderRadius:5,
    backgroundColor:"white"
},
bottomView:{
    flexDirection:'row',
    alignItems:"center",
    margin:20
},
reviewBtn:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:40,
    backgroundColor:"#FF1C00",
    borderRadius:10,
    marginLeft:10
},
favBtn:{
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:"#4A4A4A",
    borderRadius:10
},
reviewText:{
    color:'white',
    fontWeight:"500",
    fontSize:16
}
});
