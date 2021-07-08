import React, {Component} from 'react';
import {
    View,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import {Platform} from "react-native-web";
import {WebView} from 'react-native-webview';
import TextInput from "react-native-web/src/exports/TextInput";

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={40}
            />
        )
    }
}

export default class Welcome extends Component {

    /**
     * ProgressBar with animated
     */
    state = {progressStatus: 0}
    anim = new Animated.Value(0);

    componentDidMount() {
        this.onAnimate();
    }

    onAnimate = () => {
        this.anim.addListener(({value}) => {
            this.setState({progressStatus: parseInt(value, 10)});
        });
        Animated.timing(this.anim, {
            toValue: 100,
            duration: 50000,
        }).start();
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Android',
                'iOS', 'Java', 'Swift',
                'Php', 'Hadoop', 'Sap',
                'Python', 'Ajax', 'C++',
                'Ruby', 'Rails', '.Net',
                'Perl'
            ]),
            text: 'Useless Multiline Placeholder',
            ready: false,
            where: {lat: null, lng: null},
            error: null
        };
    }
    componentDidMount() {
        let geoOptions = {
            enableHighAccuracy: false,
            timeOut: 20000, // 20 seconds
            // maximumAge: 60000 // 60 seconds
        };
        this.setState({ready:false,error:null});
        navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        this.setState({
            ready: true,
            where: {lat: position.coords.latitude, lng: position.coords.longitude}
        })
    }
    geoFailure = (err) => {
        this.setState({error:err.message});
    }
    _onPressButton() {
        alert('You tapped the button!')
    }

    _onLongPressButton() {
        //alert('You long-pressed the button!')
    }

    // handling onPress action
    getListViewItem = (rowData) => {
        alert(rowData);
    }

    render() {
        return (
            <div className="App">
                {!this.state.ready&&(<Text style={{fontSize:25}}>Using Geolocation in React Native.</Text>)}
                {this.state.error&&(<Text style={{fontSize:25}}>Error: {this.state.error}</Text>)}
                {this.state.ready&&(<Text style={{fontSize:25}}>Latitude: {this.state.where.lat} Longitude: {this.state.where.lng}</Text>)}
                <Animated.View
                    style={[styles.inner, {width: this.state.progressStatus + '%'}]}
                />
                <Animated.Text style={styles.label}>
                    {this.state.progressStatus}%
                </Animated.Text>
                <WebView source={{html: '<h1>Hello World!</h1>'}}/>
                <View style={{padding: 10}}>
                    <TextInput style={{height: 40, backgroundColor: 'azure', fontSize: 20}}
                               placeholder="Type here to translate!"
                               onChangeText={(text) => this.setState({text})}/>
                    <Text style={{padding: 100, fontSize: 50}}>
                        {this.state.text.split('').map((word) => word && ':|').join('')}
                    </Text>
                    <UselessTextInput multiline={true} numberOfLines={10} onChangeText={(text) => this.setState({text})}
                                      value={this.state.text} style={{fontSize: 20}}/>
                </View>
                <View>
                    <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback onPress={this._onPressButton}
                                             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton()}
                                        underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable with Long Press</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <Text style={styles.rowViewContainer}
                              onPress={this.getListViewItem.bind(this, rowData)}>{rowData}
                        </Text>
                    }
                    renderSeparator={(sectionId, rowId) =>
                        <View key={rowId} style={styles.separator}/> // adding separation
                    }
                />
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#5ead97'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 18
    },
    separator: {
        height: 0.5, width: '100%', backgroundColor: '#000'
    },
    rowViewContainer: {
        flex: 1,
        paddingRight: 15,
        paddingTop: 13,
        paddingBottom: 13,
        borderBottomWidth: 0.5,
        borderColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        marginLeft: 10
    },
    inner: {
        width: '100%',
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green'
    },
    label: {
        fontSize: 24,
        color: 'black',
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
});