import { ActivityIndicator, View } from "react-native"

const CenteredLoader = () => {
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <ActivityIndicator size={"large"} color={"#FDBB62"}/>
        </View>
    )
}
export default CenteredLoader