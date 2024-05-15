import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {FilterProductContext} from '../contexts/ContextShare';

export default function Categories() {
  const {filter, setFilter} = useContext(FilterProductContext);
  const categories = [
    {
      name: 'All',
      image:
        'https://i.pinimg.com/736x/6c/a8/f0/6ca8f02f56d48f0daf38063da995e763.jpg',
    },
    {
      name: 'Vegetables',
      image: 'https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg',
    },
    {
      name: 'Fruits',
      image:
        'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
    },
    {
      name: 'Meat',
      image:
        'https://s3-alpha-sig.figma.com/img/0a91/d686/3401970cc0964141ad1838b9fd2b3021?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c5n8oTuq0E17MldaMS2TrQ4DUC7TRhN2umQuzYxGbqMbNid~7BjsiGFv49SqwKygW4rSwQoOdf4CI39P3KS2fqUYkbDWpVTv8z5t00IAHmZHurNqY45gip~w0VrfdRXd~emDzBgbMmJP6LokBV3JS7tmS65fAMRxjhCnsZ94-XoWAv8ygbLZGpmAqlpWVRW7NqSPm7RnkWDMrf0wM~CMl9zmQqWHdf9Ixgiemgt1Qwilc~HaMBhF7lmGyBPojgjNGNby1tQKuzxHXUsvgks6ckkRiNcN6NjR~rYYFwiERXYFaqzQH0uj8f2hOZhl2N0khgsITluzJvxCp7ZrclAngg__',
    },
    {
      name: 'Rice',
      image:
        'https://s3-alpha-sig.figma.com/img/23cf/29f2/345ef1931481edc9ff2dbd868dc7c721?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eM-nXlA23VUJ4mYrY~oujU8HB720Hhu8ZoXJ3tu3Eokw0-xW0G82J3Vl9i1nCoFCOyu53mpeLlb4NLpf3Mdf4Q~VJVxHvdxWUJ4apVA5A7Fu8RS~YpUu06Ghs1kyZnyGhRfP2CQakGwZD6598YqTyscP0T2vAM8X-muth6EG3iqIrsFvXaZGrbbjbzEGtLPGkAye3LmnFFb67mbhfyAQw-P~Yoyk2ULsF-Tpoq3UETgdSTetUAF615tli-52YKMuqDheLdfc1BDCh1NT0cQnIErU~vs0rV3zPeYB4emnkO1NWRMRM0d9ROF7i9AV8NlP9WydeQq4YMkvv6K62ulXKg__',
    },
    {
      name: 'Tea',
      image:
        'https://s3-alpha-sig.figma.com/img/0d31/a014/3f47fbed8e8be30ceb7a606435f21f71?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGbmGQKS5u30qaN8UI4nzNg9OIEo8v4kCSD1Q6Q5fRHRKxX6RbjDSw2YxIG8BENoDkRDMKBAHmLZXOCoZUrMBRR9gSkHgPHVQYdW4PXQjtsx2QUrlP~F2pbPpnzKoPJf3D25~A6cicQnLwg8Y52gHLKKwIoSM1g7nJwCYYAk7uNUegaqFRqUPyJ0DW2POoH7ojEfjxOHLdKKZC~kOJGf4G6Pt~7g4LpktIdXXvAc2w7uohdNTz2l40~5GNAy7WIzgbba7Y7w8G0HknY8-HQCbnY2dt0WlpxUXHWALekEHIDHPgyEpxJGm-eJe~ZX5nFA~jOtU1Warfhgct2c46ZL2Q__',
    },
    {
      name: 'Drink',
      image:
        'https://s3-alpha-sig.figma.com/img/c83d/2626/73d30ceae989b355d435995a6b782976?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SC4OU6-ut8aP7KgVIqnuWOrIL9INSbN8vncjxOSZfT80uhR~kKDM5cu4BmSVjHL7lljxQpyuzElA1t7ShUm-fLO9B97XunI1Scn7TkVpd9n6ItoOsX0ZUKQ6CWJF3j2jeTJW5rqApZ5q0lkJgd8oddVfFzoISKljmv7MtGQddXk3u70thmPu-phUKA3h6XIpjL6-MRVn1vWR4vz-D7C96f19SD9mjanPSh5Vz2zthjZkGPoS2p2tQqpQoIMDZAbebh-djweqgsR-9FPuhjx-HHe82OxaM6ELFFLDSTJr9ZIinFZa5wXdvVixiSr6o~6X629y2v~4CCgmzPR6TqTdaw__',
    },
  ];

  const handleClick = name => {
    setFilter(name.toLowerCase());
  };
  return (
    <ScrollView
      style={{marginTop: 30}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories.map(item => (
        <View style={{paddingRight: 20}}>
          <TouchableOpacity onPress={() => handleClick(item.name)}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 72,
                height: 62,
                borderRadius: 10,
                objectFit: 'cover',
              }}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
