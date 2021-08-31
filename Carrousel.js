import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, Image, Button,  Animated, Dimensions, ScrollView, Card} from 'react-native';

const images = [
    {
        title: 'Estados Unidos - Miami',
        img: 'https://www.viajarmiami.com/img/guia-viaje-miami.jpg',
        id: 1
      },
      {
        title: 'Canada',
        img: 'https://cdn.getyourguide.com/img/country/58de136b73284.jpeg/88.jpg',
        id:2
      },
      {
        title: 'Grecia',
        img: 'https://www.caracteristicas.co/wp-content/uploads/2018/09/grecia-1-e1579487438729.jpg',
        id:3
      },
      {
        title: 'Argentina - Buenos Aires',
        img: 'https://mdamericas.com/wp-content/uploads/2020/08/8.21.2020-ARGENTINA.jpg',
        id:4
      },
      
      
]

function Carrousel() {
const animation = useRef(new Animated.Value(0))
const [currentImage, setCurrentImage] = useState(0)

const handlePrevious = () => {
   let newCurrentImage = currentImage -1  
    Animated.spring(animation.current, {
        toValue: -(Dimensions.get('screen').width * newCurrentImage),
        useNativeDriver: true 
    }).start()

    setCurrentImage(newCurrentImage)
}

const handleNext = () => {
    let newCurrentImage = currentImage + 1
    Animated.spring(animation.current, {
     toValue: -(Dimensions.get('screen').width * newCurrentImage),
     useNativeDriver: true
   }).start();
 
   setCurrentImage(newCurrentImage)
}



    return (
       <View >
           <Animated.View style={[styles.container, {
        transform: [{translateX: animation.current}]
      }]} >
               {images.map((image) => (
                   <View key={image.id} style={styles.cards}>
                       <Image style={styles.eachImage} source={{uri: image.img}} />
                       <Text style={{fontSize: 30, color: 'white'}}>{image.title}</Text>
                   </View>
               ))
               }
           </Animated.View>
          

           <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center' , margin: 20}}>
    {currentImage <=0 ? <Button title='Previous' disabled={true}></Button> : <Button
    title='Previous'
    onPress={handlePrevious}
    />}


    {currentImage != images.length -1?  <Button
    title='Next'
    onPress={handleNext}
    /> : <Button title='Next'disabled={true}></Button>  }
    
    
    </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'gray'
        
    },
    cards: {
        alignItems : 'center',
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'space-between'
        
    },
    eachImage: {
        resizeMode: 'cover',
        height: 500, 
        width: Dimensions.get('screen').width
    },
  });

export default Carrousel
