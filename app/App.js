import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');
  const [firstPlayer, setFirstPlayer] = useState(null);
  const [roundPoints, setRoundPoints] = useState({});
  const [started, setStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const animValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (players.length > 0 && players[0].id === firstPlayer) {
      Animated.sequence([
        Animated.timing(animValue, { toValue: 1.5, duration: 300, useNativeDriver: true }),
        Animated.timing(animValue, { toValue: 1, duration: 300, useNativeDriver: true })
      ]).start();
    }
  }, [players]);

  const addPlayer = () => {
    if (!name) return;
    setPlayers([...players, { id: Date.now().toString(), name, score: 0 }]);
    setName('');
  };

  const beginGame = () => {
    if (players.length < 2) return;
    if (!firstPlayer) setFirstPlayer(players[0].id);
    setStarted(true);
  };

  const submitRound = () => {
    const updated = players.map(p => {
      const points = roundPoints[p.id] ? parseInt(roundPoints[p.id], 10) : 0;
      return { ...p, score: p.score + points };
    });
    updated.sort((a, b) => b.score - a.score);
    setPlayers(updated);
    setRoundPoints({});
  };

  const endGame = () => {
    setWinner(players[0]);
  };

  if (winner) {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.winnerText, { transform: [{ scale: animValue }] }]}>Winner: {winner.name}!</Animated.Text>
      </View>
    );
  }

  if (!started) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add Players</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
          <Button title="Add" onPress={addPlayer} />
        </View>
        <FlatList
          data={players}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        {players.length > 0 && (
          <Picker
            selectedValue={firstPlayer}
            onValueChange={setFirstPlayer}
            style={styles.picker}
          >
            {players.map(p => (
              <Picker.Item key={p.id} label={p.name} value={p.id} />
            ))}
          </Picker>
        )}
        <Button title="Start Game" onPress={beginGame} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Animated.View style={index === 0 ? { transform: [{ scale: animValue }] } : null}>
            <Text style={styles.player}>{item.name}: {item.score}</Text>
            <Picker
              selectedValue={roundPoints[item.id] || '0'}
              onValueChange={val => setRoundPoints({ ...roundPoints, [item.id]: val })}
              style={styles.picker}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <Picker.Item key={i} label={`${i}`} value={`${i}`} />
              ))}
            </Picker>
          </Animated.View>
        )}
      />
      <Button title="Submit Round" onPress={submitRound} />
      <Button title="Finish Game" onPress={endGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
    width: 150,
  },
  picker: {
    width: 150,
  },
  player: {
    fontSize: 18,
    marginVertical: 4,
  },
  winnerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
