import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Button, SectionList, Image, ImageBackground} from 'react-native';

export default class Home extends Component {
    onPressButton() {
        alert('You clicked the button!')
    }

    // handling onPress action
    getListViewItem = (item) => {
        alert(item);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{uri:'https://gamek.mediacdn.vn/133514250583805952/2020/12/26/1324330934298211083620358746477471549748216n-16089555070181596527456.jpg'}}
                    style={{width:'100%',height:'100%'}}
                >
                   <Image source={{uri:'https://www.javatpoint.com/images/logo/jtp_logo.png'}} style={{width:'80%',height:70}}/>
                   <Image style={{width:60,height:60}} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}/>
                </ImageBackground>
                <SectionList
                    sections={[
                        {title: 'A', data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH']},
                        {title: 'B', data: ['BEST MEN', 'BEYOND JUSTICE', 'BLACK GUNN', 'BLOOD RANCH', 'BEASTIES']},
                        {title: 'C', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',]},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}
                                                  onPress={this.getListViewItem.bind(this, item)}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    renderSeparator={() =>
                        <View style={{height: 1, width: '100%', backgroundColor: '#000'}}/>
                    }
                    keyExtractor={(item, index) => index}
                />
                <ScrollView horizontal={true} style={styles.container_fluid}>
                    <Text style={{fontSize: 22, padding: 10}}>Horizontal ScrollView</Text>
                    <View style={[{width: 220, height: 70, padding: 10}]}>
                        <Button onPress={this.onPressButton} title="Button 2" color="#3D00FF"/>
                    </View>
                    <Text style={{fontSize: 22, padding: 10}}>React Native ScrollView Example</Text>
                    <View style={[{width: 220, height: 70, padding: 10}]}>
                        <Button
                            onPress={this.onPressButton}
                            title="Button 3"
                            color="#FFFF3D"
                        />
                    </View>
                    <Text style={{fontSize: 22, padding: 10}}>If you like</Text>
                    <View style={[{width: 220, height: 70, padding: 10}]}>
                        <Button
                            onPress={this.onPressButton}
                            title="Button 4"
                            color="#FF3DFF"
                        />
                    </View>
                    <Text style={{fontSize: 22, padding: 10}}>Scrolling horizontal</Text>
                    <View style={[{width: 220, height: 70, padding: 10}]}>
                        <Button
                            onPress={this.onPressButton}
                            title="Button 5"
                            color="#3DFF00"
                        />
                    </View>
                </ScrollView>
                <View style={styles.powderblue}/>
                <View style={styles.skyblue}/>
                <View style={styles.steelblue}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', // set elements horizontally, try column
        justifyContent: 'center', alignItems: 'stretch', backgroundColor: '#5ead97'
    },
    container_fluid: {
        flex: 1
    },
    powderblue: {
        width: 100, height: 100, backgroundColor: 'powderblue'
    },
    skyblue: {
        width: 200, height: 200, backgroundColor: 'skyblue'
    },
    steelblue: {
        height: 300, backgroundColor: 'steelblue'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#8fb1aa'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});