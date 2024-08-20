import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

interface ImageCDescProps{
    url: string
    desc: string
}

const ImageCDesc = ({ url, desc }: ImageCDescProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  descContainer: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%', 
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    flexWrap: 'wrap', 
    lineHeight: 20, 
  },
})

export default ImageCDesc
