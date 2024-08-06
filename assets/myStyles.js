import { colors } from "./colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightYellow,

  },
  ProductSearchInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: .50,
    marginTop: 2,
    marginLeft: 4,
    marginRight: 5,
    borderRadius: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: 10,
    shadowRadius: 10,
    elevation: 5
  },
  ProductView: {
    width: 180,
    height: 250,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 10,
    backgroundColor: colors.lightGreen,
    borderRadius: 20,
    shadowOffset: 10,
    elevation: 5,
    borderWidth:.50,
    borderColor:'grey'
  },
  ProductNameTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'purple',
    paddingBottom: 1,
    paddingTop: 1
  },
  ImageView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: 10,
    elevation: 3
  },
  ActiveIngredientsLabelTxt: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'purple',
    paddingTop: 1,
    paddingBottom: 1,
    textDecorationLine: 'underline'
  },
  ActiveIngredients: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'purple',
    fontStyle: 'italic',
    paddingTop: 1
  },
  CropsView:{
    height:100,
    width:110,
    borderRadius:10,
    margin:6,
    marginLeft:10,
    backgroundColor: colors.white,
    flexDirection:'column',
    alignItems:'center',
    shadowColor:'grey',
    shadowOffset:10,
    shadowRadius:10,
    elevation:8,
   borderWidth:.40
  }
});