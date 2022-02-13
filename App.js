
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider,  Paragraph, Switch, Button, FAB} from 'react-native-paper';
import Test from './src/Screens/Home/HomeController'

export default App = () => {
  return (
    <PaperProvider>
      <MainPage />
    </PaperProvider>
  );
};

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Paragraph>Botão 12313</Paragraph>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <Paragraph>Switch</Paragraph>
        <Switch value={true} />
        <Paragraph>FAB</Paragraph>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

