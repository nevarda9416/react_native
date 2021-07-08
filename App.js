import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    ActivityIndicator,
    Picker,
    StatusBar,
    Switch,
    Modal
} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import Home from './components/Home';
import Welcome from './components/Welcome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        width: '70%',
        backgroundColor: 'gray'
    },
    textStyle2: {
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#344953'
    },
    buttonStyle: {
        width: '30%'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20
    },
    buttonContainer: {
        margin: 20
    },
    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pickerStyle: {
        height: 150,
        width: '80%',
        color: '#344953',
        justifyContent: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        marginTop: 80,
        marginLeft: 40
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
});

class ChildClass extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.welcome}>Hello {this.props.name}!</Text>
            </View>
        )
    }
}

export default class App extends Component {
    /**
     * ActivityIndicator: is used to display a circular loading indicator
     */
    state = {animating: true}
    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 6000);
    componentDidMount = () => this.closeActivityIndicator()

    onPressButton() {
        alert('You clicked the button!');
    }
    /**
     * Picker
     */
    state = {choosenIndex: 0}
    /**
     * Switch
     */
    state = {switchValue:true}
    /**
     * Modal
     */
    state = {isVisible: false} // State of modal default false
    /**
     * The component that uses the state is mutable. They can be changed later on if required.
     * The props component is immutable, and it is fixed throughout the lifetime.
     */
    /**
     * Create three state variables that will be changed by clicking the Text component defined as a state.
     * Clicking the Text component calls the handleToggle function, and the current state of boolean variable "isPasswordVisible" is assigned in it.
     * Here, if the condition checks the value of 'isPasswordVisible' and proceeds accordingly
     */
    state: {
        myState: string,
        password: string,
        isPasswordVisible: boolean,
        toggleText: string,
        placeName: string,
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            myState: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.`,
            isPasswordVisible: true,
            toggleText: 'Show',
            placeName: ''
        };
    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        alert("Button clicked");
    };

    handleToggle = () => {
        const {isPasswordVisible} = this.state;
        if (isPasswordVisible) {
            this.setState({isPasswordVisible: false});
            this.setState({toggleText: 'Hide'});
        } else {
            this.setState({isPasswordVisible: true});
            this.setState({toggleText: 'Show'});
        }
    };
    updateState = () => this.setState({myState: 'The state is updated!'});
    imagePath = {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'};

    render() {
        const animating = this.state.animating
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle2}>Modal</Text>
                <Modal
                animationType={"fade"}
                transparent = {false}
                visible={this.state.isVisible}
                onRequestClose={()=>{console.log("Modal has been closed.")}}
                >
                    {/*All views of Modal*/}
                    <View style={styles.modal}>
                        <Text style={styles.text}>Modal is open!</Text>
                        <Button title="Click to close modal" onPress={()=>{
                            this.setState({isVisible:!this.state.isVisible})
                        }}/>
                    </View>
                </Modal>
                {/*Button will change state to true and view will re-render*/}
                <Button title="Click to open modal" onPress={()=>{this.setState({isVisible:true})}}/>
                <Text style={styles.textStyle2}>Switch Example</Text>
                <Text style={styles.textStyle2}>{this.state.switchValue?'on':'off'}</Text>
                <Switch
                value={this.state.switchValue}
                onValueChange={(switchValue)=>this.setState({switchValue})}/>
                <StatusBar
                backgroundColor="#b3e6ff"
                barStyle="dark-content"
                hidden={false}
                translucent={true}
                />
                <Text style={styles.textStyle}>Picker Example</Text>
                <Picker style={styles.pickerStyle}
                        selectedValue={this.state.language}
                        onValueChange={(itemValue, itemPosition) =>
                            this.setState({language: itemValue, choosenIndex: itemPosition})
                        }
                >
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="Javascript" value="js"/>
                    <Picker.Item label="React Native" value="rn"/>
                </Picker>
                <Text style={styles.textStyle}>{"Index=" + this.state.choosenIndex}</Text>
                <ActivityIndicator animating={animating} size="large" color="#FF0000"/>
                <ActivityIndicator size="small" color="#44FF00"/>
                <ActivityIndicator size="large" color="#345376"/>
                <View style={styles.innerContainer}>
                    <TextInput placeholder="An awesome place"
                               onChangeText={this.placeNameChangedHandler}
                               style={styles.textStyle}
                    />
                    <Button title="Button" onPress={this.placeSubmitHandler}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.onPressButton()} title="Press Me"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.onPressButton()} title="Press Me" color="#009933"/>
                </View>
                <View style={styles.multiButtonContainer}>
                    <Button onPress={() => this.onPressButton()} title="A disabled button" disabled={true}/>
                    <Button onPress={() => this.onPressButton()} title="OK!" color="#009933"/>
                </View>
                <ChildClass name='Ashu'/>
                <ChildClass name='Aman'/>
                <ChildClass name='Max'/>
                <NativeRouter>
                    <Link to="/home" underlayColor="#f0f4f7">
                        <Text>Home</Text>
                    </Link>
                    <Link to="/welcome" underlayColor="#f0f4f7">
                        <Text>Welcome</Text>
                    </Link>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/welcome' component={Welcome}/>
                </NativeRouter>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Image source={this.imagePath} style={{width: 250, height: 250}}/>
                <TextInput secureTextEntry={this.state.isPasswordVisible}
                           style={{width: 400, height: 50, backgroundColor: '#a7a6a9', color: 'white', fontSize: 20}}/>
                <TouchableOpacity onPress={this.handleToggle}>
                    <Text style={{fontSize: 20}}>{this.state.toggleText}</Text>
                </TouchableOpacity>
                <Text onPress={this.updateState}>{this.state.myState}</Text>
                <Text>Hello world!</Text>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload</Text>
                <Text>Shake your phone to open the developer menu!</Text>
            </View>
        );
    }
}

