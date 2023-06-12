import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const DogList = () => {
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    fetchDogImages();
    fetchDogBreeds();
  }, []);

  const fetchDogImages = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random/10');
      setImages(response.data.message);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  const fetchDogBreeds = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      const breedsArray = Object.keys(response.data.message);
      setBreeds(breedsArray);
      setSelectedBreed(breedsArray[0]); // Seleccionar la primera raza por defecto
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
    }
  };

  const renderItem = ({ item }) => (
    <ListItem>
      <Image style={styles.frame} source={{ uri: item }} />
    </ListItem>
  );

  const filteredImages = images.filter(image => {
    const parts = image.split('/');
    const breed = parts[4];
    return breed === selectedBreed;
  });

  return (
    <View style={styles.View}>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={selectedBreed}
          onValueChange={value => setSelectedBreed(value)}
        >
          {breeds.map(breed => (
            <Picker.Item key={breed} label={breed} value={breed} />
          ))}
        </Picker>
      </View>
      <Button title="Mostrar" onPress={() => setShowImages(true)} />
      {showImages && (
        <FlatList
          data={filteredImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  View:{
    backgroundColor:'#A0CAD7',
  },
  selectContainer: {
    backgroundColor: '#A0CAD7',
    padding: 10,
    fontSize:100,
  },
  frame: {
    borderRadius: 50,
    borderColor:'#415460',
    width: 200,
  },
});

export default DogList;
