import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>To-Do-List</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.titlecontainer}>
          <Text style={styles.titletextbody}>Lista de Compras</Text>
        </View>
          <ScrollView style={styles.bodycontent}>
          <CheckBox title="Leche" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pan" containerStyle={styles.CheckBox}/>
          <CheckBox title="Queso" containerStyle={styles.CheckBox}/>
          <CheckBox title="Cereal" containerStyle={styles.CheckBox}/>
          <CheckBox title="Frutas" containerStyle={styles.CheckBox}/>
          <CheckBox title="Carne" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pollo" containerStyle={styles.CheckBox}/>
          <CheckBox title="Pescado" containerStyle={styles.CheckBox}/>
          <CheckBox title="Harina" containerStyle={styles.CheckBox}/>
          <CheckBox title="Verduras" containerStyle={styles.CheckBox}/>
          <CheckBox title="Huevos" containerStyle={styles.CheckBox}/>
          <CheckBox title="Jamón" containerStyle={styles.CheckBox}/>
          <CheckBox title="Chorizo" containerStyle={styles.CheckBox}/>
          <CheckBox title="UwU" containerStyle={styles.CheckBox}/>
        </ScrollView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#16a085',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1, // Permite que el body ocupe el espacio disponible
    width: '100%',
    backgroundColor: '#f3f2ef'
  },
  titlecontainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletextbody: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodycontent: {
    flex: 1, // Hace que el contenedor crezca correctamente
    padding: 10, // Añadir un poco de espacio alrededor
  },
  CheckBox: {
    backgroundColor: '#ecf0f1',
    width: '50%',
    fontSize: 15,
    marginLeft: '15%'
  }
});
