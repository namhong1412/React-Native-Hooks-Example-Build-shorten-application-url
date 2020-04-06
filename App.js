import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [url, setUrl] = useState('https://kid1412-it.blogspot.com/');
  const [finalUrl, setFinalUrl] = useState('');

  useEffect(() => {
    console.log('url changed');
    shorten();
  }, [url]);

  const shorten = async () => {
    fetch('https://cutt.ly/api/api.php?key=[API-KEY]&short=' + url)
      .then(async response => {
        const data = await response.json();
        setFinalUrl(data.url.shortLink);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        my
        <Text style={{color: '#ff7c7c'}}>URL</Text>
      </Text>
      <TextInput
        style={styles.urlInput}
        onChangeText={text => setUrl(text)}
        value={url}
        placeholder="Enter Your Url"
      />
      <TouchableOpacity style={styles.ShortenBtn} onPress={() => shorten()}>
        <Text style={{color: '#fff'}}>Shorten</Text>
      </TouchableOpacity>

      <Text style={styles.finalUrl}>{finalUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
  },
  urlInput: {
    height: 50, 
    width: '80%',
    borderColor: '#21243d', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
    fontSize: 20,
  },
  ShortenBtn: {
    backgroundColor: '#ff7c7c',
    borderRadius: 20,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalUrl: {
    height: 40, 
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
