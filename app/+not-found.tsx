import { Link, Stack } from 'expo-router';
import { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <Fragment>
      <SafeAreaView>
        <Text>Not found</Text>
        <Link href={'/'}></Link>
      </SafeAreaView>
    </Fragment>
  );
}
