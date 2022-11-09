import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'components/Button';
import { Flex } from 'components/Flex';
import { HorizontalScroll } from 'components/HorizontalScroll';
import { TabBar } from 'components/TabBar';
import { Table } from 'components/Table';
import { TextInput } from 'components/TextInput';
import { TopNavigation } from 'components/TopNavigation';

import { useActionSheet } from 'hooks/useActionSheet';
import { theme } from 'theme';

function App() {
  const { showActionSheetWithOptions } = useActionSheet();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.palette.neutral[600], height: '100%', width: '100%' }}
    >
      <ScrollView>
        <TopNavigation
          left={{ icon: <Ionicons name="chevron-back" size={32} />, title: 'Back' }}
          right={{ title: 'Save' }}
          title="Settings"
        />

        <Flex my={4} width="100%">
          <HorizontalScroll>
            <Button size="small" title="Filled Small" variant="filled" />
            <Button size="small" title="Gray Small" variant="gray" />
            <Button size="small" title="Plain Small" variant="plain" />
            <Button size="small" title="Tinted Small" variant="tinted" />
          </HorizontalScroll>
        </Flex>

        <Flex my={4}>
          <HorizontalScroll>
            <Button title="Filled Medium" variant="filled" />
            <Button title="Gray Medium" variant="gray" />
            <Button title="Plain Medium" variant="plain" />
            <Button title="Tinted Medium" variant="tinted" />
          </HorizontalScroll>
        </Flex>

        <Flex my={4}>
          <HorizontalScroll>
            <Button size="large" title="Filled Large" variant="filled" />
            <Button size="large" title="Gray Large" variant="gray" />
            <Button size="large" title="Plain Large" variant="plain" />
            <Button size="large" title="Tinted Large" variant="tinted" />
          </HorizontalScroll>
        </Flex>

        <Flex my={4}>
          <TextInput value="Search" />
        </Flex>

        <Flex my={4}>
          <Table
            header="Networks"
            rows={[{ rightIcon: true, title: 'Z17AHW' }, { title: 'HP24' }, { title: 'My Wifi' }]}
          />
        </Flex>

        <Flex my={4}>
          <Button
            title="Action Sheet"
            onPress={() =>
              showActionSheetWithOptions({
                cancel: { onPress: () => console.log('cancel'), title: 'Cancel' },
                options: [{ onPress: () => console.log('save'), title: 'Save' }],
              })
            }
          />
        </Flex>

        <TabBar>
          <TabBar.Tab
            icon={<Ionicons name="list-circle-outline" size={28} />}
            onPress={() => {
              console.log('here 1');
            }}
          />

          <TabBar.Tab
            icon={<Ionicons name="checkmark-circle-outline" size={28} />}
            onPress={() => console.log('here 2')}
          />

          <TabBar.Tab
            icon={<Ionicons name="stats-chart-outline" size={28} />}
            onPress={() => console.log('here 3')}
          />

          <TabBar.Tab
            icon={<Ionicons name="timer-outline" size={28} />}
            onPress={() => {
              console.log('here 4');
            }}
          />
        </TabBar>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
