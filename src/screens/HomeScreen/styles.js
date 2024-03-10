import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        paddingBottom:0,
        backgroundColor:"rgb(240,240,240)"
    },
    safeAreaView:{
        flex: 1,
        backgroundColor: "rgb(240,240,240)",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    txtInput:{
        backgroundColor:"white",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        height:50,
        paddingHorizontal:10,
        borderColor:'#FDBB62',
        borderWidth:1
    },
    input:{
        includeFontPadding:false
    },
    headingView:{
        backgroundColor:"#FDBB62",
        borderRadius:10,
        padding:10,
        marginTop:10,
    },
    heading:{
        fontSize:18,
        fontWeight:"600",
        includeFontPadding:false,
        color:"white"
    },
    searchBtn:{
        backgroundColor:'#FDBB62',
        width:50,
        borderRadius:10,
        marginLeft:5,
        alignItems:"center",
        justifyContent:'center',
        height:50
    }
})