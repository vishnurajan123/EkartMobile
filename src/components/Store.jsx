import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Store() {
  return (
    <View style={{flexDirection: 'row', marginTop: 25}}>
      <View>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/ff38/4609/352bf2348604e3e78ce0ed01dc4b3c44?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yq5eQiwQnCBmjdRTTM272j0AT~LawncjEYyH3rjR~Smrbt0oeJ3ID4O9z2a-UQF~MaA11MMMFGeew4k9kVPFOd5~TCe47Z3ayOczR6oJ9NNtwVvSlR~WSNwePNm~aGkaRXQlk-VUo7xMlg-OEQIRLDfBXw6wNSS2Tl6zHVNwUVXc14U2UHxWl14IhujrFdXCU35lXJPikguti1U3DYDhHhlmZAXhyiP9i1gBOX2yK2qvXvTbbgbj-Ob7R4N0TX9pmZm5UWzZsKbZuc4JYeoi5kl8u3kc1S52wKcf-2ZWJS7qFUI6FBt5m5Pv0ckL5GTmGygYuY6FyFlFLrY0fqCIVA__',
          }}
          style={{height: 66, width: 73, borderRadius: 6}}
        />
      </View>
      <View style={{marginLeft: 20, justifyContent: 'center'}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
          Store 1
        </Text>
        <Text style={{fontSize: 12, color: 'grey', lineHeight: 16}}>
          Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
