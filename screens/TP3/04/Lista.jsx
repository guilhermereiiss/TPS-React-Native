import { SectionList, Text, View, StyleSheet } from 'react-native';

const Lista = ({ tarefasPorDia }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text style={styles.headerTexto}>{section.title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={tarefasPorDia}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  headerTexto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});

export default Lista;