import React, { useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Appbar, Button, Card, HelperText, Menu, Text, TextInput, Chip, IconButton, Divider } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';
import { Base, baseLabels, convertNumber, validateInput } from '@/utils/conversion';
import { useTheme } from 'react-native-paper';

type HistoryItem = {
  id: string;
  input: string;
  fromBase: Base;
  toBase: Base;
  output: string;
  timestamp: number;
};

const bases: Base[] = [2, 8, 10, 16];

export default function ConverterScreen() {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [fromBase, setFromBase] = useState<Base>(10);
  const [toBase, setToBase] = useState<Base>(2);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const hasErrors = useMemo(() => {
    if (value.trim().length === 0) return false;
    return !validateInput(value, fromBase);
  }, [value, fromBase]);

  const onConvert = () => {
    try {
      const res = convertNumber(value, fromBase, toBase);
      setResult(res.output);
      const item: HistoryItem = {
        id: `${Date.now()}`,
        input: res.input,
        fromBase: res.fromBase,
        toBase: res.toBase,
        output: res.output,
        timestamp: Date.now(),
      };
      setHistory((prev) => [item, ...prev].slice(0, 20));
    } catch (e: any) {
      setResult('');
    }
  };

  const onClear = () => {
    setValue('');
    setResult('');
  };

  const onCopy = async () => {
    if (!result) return;
    await Clipboard.setStringAsync(result);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header elevated style={{ backgroundColor: theme.colors.background }}>
        <Appbar.Content title="Number Converter" subtitle="Binary, Octal, Decimal, Hex" />
      </Appbar.Header>

      <FlatList
        contentContainerStyle={{ padding: 16, gap: 16 }}
        ListHeaderComponent={
          <>
            <Card style={{ backgroundColor: theme.colors.surface }}>
              <Card.Content>
                <TextInput
                  label={`Input (${baseLabels[fromBase]})`}
                  value={value}
                  onChangeText={setValue}
                  mode="outlined"
                  right={<TextInput.Affix text={baseLabels[fromBase].slice(0, 3)} />}
                />
                <HelperText type={hasErrors ? 'error' : 'info'} visible>
                  {hasErrors ? `Invalid ${baseLabels[fromBase]} number` : 'Enter a valid number'}
                </HelperText>

                <View style={{ flexDirection: 'row', gap: 12, marginTop: 8 }}>
                  <Menu
                    visible={fromOpen}
                    onDismiss={() => setFromOpen(false)}
                    anchor={
                      <Button mode="outlined" onPress={() => setFromOpen(true)}>
                        From: {baseLabels[fromBase]}
                      </Button>
                    }
                  >
                    {bases.map((b) => (
                      <Menu.Item key={b} onPress={() => { setFromBase(b); setFromOpen(false); }} title={baseLabels[b]} />
                    ))}
                  </Menu>

                  <Menu
                    visible={toOpen}
                    onDismiss={() => setToOpen(false)}
                    anchor={
                      <Button mode="outlined" onPress={() => setToOpen(true)}>
                        To: {baseLabels[toBase]}
                      </Button>
                    }
                  >
                    {bases.map((b) => (
                      <Menu.Item key={b} onPress={() => { setToBase(b); setToOpen(false); }} title={baseLabels[b]} />
                    ))}
                  </Menu>
                </View>

                <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
                  <Button mode="contained" onPress={onConvert} disabled={!value || hasErrors}>
                    Convert
                  </Button>
                  <Button mode="text" onPress={onClear}>Clear</Button>
                </View>
              </Card.Content>
            </Card>

            <Card style={{ backgroundColor: theme.colors.surface }}>
              <Card.Content>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text variant="titleMedium">Result ({baseLabels[toBase]})</Text>
                  <IconButton icon="content-copy" onPress={onCopy} disabled={!result} accessibilityLabel="Copy" />
                </View>
                <Text selectable style={{ fontSize: 20, fontWeight: '600', marginTop: 8 }}>
                  {result || '—'}
                </Text>
                <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
                  <Chip icon="numeric-1-box-outline" style={{ backgroundColor: '#0A1E2D' }}>From: {baseLabels[fromBase]}</Chip>
                  <Chip icon="numeric-2-box-outline" style={{ backgroundColor: '#0A1E2D' }}>To: {baseLabels[toBase]}</Chip>
                </View>
              </Card.Content>
            </Card>

            <Divider style={{ marginVertical: 8 }} />
            <Text variant="titleMedium" style={{ marginBottom: 8 }}>History</Text>
          </>
        }
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Content>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text variant="bodyLarge">{item.input} → {item.output}</Text>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <Chip compact>{baseLabels[item.fromBase]}</Chip>
                  <Chip compact>{baseLabels[item.toBase]}</Chip>
                </View>
              </View>
              <Text variant="bodySmall" style={{ marginTop: 4, opacity: 0.7 }}>{new Date(item.timestamp).toLocaleString()}</Text>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ opacity: 0.6, paddingHorizontal: 16 }}>No history yet.</Text>}
      />
    </View>
  );
}


