import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('Result: ');

  function calculate(operation: string) {
    let n1 = Number(num1);
    let n2 = Number(num2);

    if (num1 === '' || num2 === '') {
      setResult('Result: Please enter both numbers');
      return;
    }

    let answer = 0;

    if (operation === '+') {
      answer = n1 + n2;
    } else if (operation === '-') {
      answer = n1 - n2;
    } else if (operation === '×') {
      answer = n1 * n2;
    } else if (operation === '÷') {
      if (n2 === 0) {
        setResult('Result: Cannot divide by zero');
        return;
      }
      answer = n1 / n2;
    }

    answer = Math.round(answer * 100) / 100;
    setResult('Result: ' + answer);
  }

  function handleClear() {
    setNum1('');
    setNum2('');
    setResult('Result: ');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Kelechi Calculator</Text>

        <TextInput
          style={styles.input}
          placeholder="First number"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Second number"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.opButton} onPress={() => calculate('+')}>
            <Text style={styles.opButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opButton} onPress={() => calculate('-')}>
            <Text style={styles.opButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opButton} onPress={() => calculate('×')}>
            <Text style={styles.opButtonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opButton} onPress={() => calculate('÷')}>
            <Text style={styles.opButtonText}>÷</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  opButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  opButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: '600',
    color: '#333',
  },
});