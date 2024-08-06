import { View, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../assets/myStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BayerProducts } from '../../assets/ProductDetails/BayerProducts'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../assets/colors'
import { RallisProducts } from '../../assets/ProductDetails/RallisProducts'
import { ValagroProducts } from '../../assets/ProductDetails/ValagroProducts'
import { PiIndustriesProducts } from '../../assets/ProductDetails/PIIndustriesProducts'
import { SumitomoProducts } from '../../assets/ProductDetails/SumitomoProducts'
import { UplProducts } from '../../assets/ProductDetails/UplProducts'
import { DhanukaProducts } from '../../assets/ProductDetails/DhanukaProducts'
import { ProductsInfo } from '../screens/ProductInfo'
import { HpmProducts } from '../../assets/ProductDetails/HpmProducts'
import { AdamaProducts } from '../../assets/ProductDetails/AdamaProducts'
import { CrystalProducts } from '../../assets/ProductDetails/CrystalProducts'
import { CortevaProducts } from '../../assets/ProductDetails/CortevaProducts'
import { TropicalProducts } from '../../assets/ProductDetails/TropicalProducts'
import { StatusBar } from 'expo-status-bar'

const Products = ({ navigation }) => {

  const [adamaProd, setAdamaProd] = useState(AdamaProducts);

  const [bayerProd, setBayerProd] = useState(BayerProducts);
  const [ralliProd, setRalliProd] = useState(RallisProducts);
  const [valagroProd, setValagroProd] = useState(ValagroProducts);
  const [piProd, setPiProd] = useState(PiIndustriesProducts);
  const [sumitomoProd, setSumitomoProd] = useState(SumitomoProducts);
  const [uplProd, setUplProd] = useState(UplProducts);
  const [dhanukaProd, setDhanukaProd] = useState(DhanukaProducts);
  const [hpmProd, setHpmProd] = useState(HpmProducts);

  const [crystalProd, setCrystalProd] = useState(CrystalProducts)
  const [cortevaProd, setCortevaProd] = useState(CortevaProducts)
  const [tropicalProd, setTropicalProd] = useState(TropicalProducts)

  const Products = [...adamaProd,...ralliProd,...valagroProd,...piProd,...sumitomoProd,...uplProd,...dhanukaProd,...hpmProd,...crystalProd,...cortevaProd,...tropicalProd]
  const [userInput, setUserInput] = useState("");
  const [productList, setProductList] = useState(Products);

  // Filter functionality
  const handleFilter = (text) => {

    if (text) {
      let filteredList = Products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase()) || product.activeingredients.toLowerCase().includes(text.toLowerCase())

      );

      setProductList(filteredList); // pass the filtered list
    }
    else {
      setProductList(Products); // pass the Original list 

    }

  };


  return (

    <View style={styles.container}>
    
      <View style={styles.ProductSearchInput}>
        <Ionicons name='search' size={25} color='grey' />
        <TextInput placeholder='search product name or technical content' textAlign='center' placeholderTextColor='grey'
          onChangeText={(text) => {
            setUserInput(text);
            handleFilter(text);
          }}
        />
      </View>

      <FlatList
        data={productList}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ProductsInformation")}>
              <View style={styles.ProductView}>
                <Text style={styles.ProductNameTxt}>{item.name}</Text>
                <View style={styles.ImageView}>
                  <Image source={{ uri: item.images }} style={{ height: 180, width: 150 }} />
                </View>
                <Text style={styles.ActiveIngredientsLabelTxt}>Active Ingredients</Text>
                <Text style={styles.ActiveIngredients}>{item.activeingredients}</Text>
              </View>
            </TouchableOpacity>

          )

        }}

      />
      <View>
      </View>
    </View>

  )
}

export default Products